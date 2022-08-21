import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  orderBy,
  Timestamp,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uniqid from "uniqid";
import { firestore, storage } from "../services/client";

export const getDocFromFirestore = async (collectionName, docId) => {
  const collectionRef = firestore.collection(collectionName);
  const docRef = collectionRef.doc(docId);
  const docSnapshot = await docRef.get();
  return docSnapshot.data();
};

export const getCollectionFromFirestore = async (collectionName, query) => {
  const collectionRef = firestore.collection(collectionName);
  const querySnapshot = await collectionRef.get();
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getCollectionFromFirestoreWithQuery = async (
  collectionName,
  query
) => {
  const collectionRef = firestore.collection(collectionName);
  const querySnapshot = await collectionRef.get();
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getCollectionFromFirestoreWithWhere = async (
  collectionName,
  where
) => {
  const collectionRef = firestore.collection(collectionName);
  const querySnapshot = await collectionRef.get();
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getRole = async (userId) => {
  const docRef = doc(firestore, "user", userId);
  const role = getDoc(docRef).then((doc) => {
    return doc.data().role;
  });
  return data;
};

export const getInfoAccount = async (userId) => {
  const docRef = doc(firestore, "user", userId);
  const data = getDoc(docRef).then((doc) => {
    return doc.data();
  });
  return data;
};

export const getCollectionUser = async (role) => {
  const q = query(collection(firestore, "user"), where("role", "==", role));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const getCollectionClass = async (subject) => {
  const docRef = doc(firestore, "subject", subject);
  const response = await getDoc(docRef);
  const { student: data, refTeacher, numTeacher } = response.data();

  const collectionClass = data.map(async (user) => {
    const docRefCourse = doc(firestore, "user", user, "course", subject);
    const docRefStudent = doc(firestore, "user", user);
    const response = await getDoc(docRefCourse);
    const response2 = await getDoc(docRefStudent);
    const { email, contact_add, fname, lname } = response2.data();

    return {
      email,
      contact_add,
      fname,
      lname,
      ranks: response.data().ranks,
    };
  });

  const result = await Promise.all(collectionClass);

  const resultSort = result.sort((a, b) =>
    a.email > b.email ? 1 : b.email > a.email ? -1 : 0
  );

  const teacher = {
    name: refTeacher,
    number: numTeacher,
  };

  return { resultSort, teacher };
};

export const updateUser = async (email, values) => {
  const docRef = doc(firestore, "user", email);
  try {
    await updateDoc(docRef, values);
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (values) => {
  const docRef = doc(firestore, "user", values.email);
  try {
    await setDoc(docRef, values);
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (values) => {
  const docRef = doc(firestore, "user", values);
  try {
    await deleteDoc(docRef);
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (newPost) => {
  const uid = uniqid();
  const pathImg = "posts/" + uid;
  const storageRef = ref(storage, pathImg);
  const { entityMap, blocks } = newPost.rawContent;
  const entityMap2 = [entityMap];
  const entityMap3 = Object.values(entityMap2[0]);
  const content = { blocks, entityMap3 };

  try {
    // add image to the firebase storage
    await uploadBytes(storageRef, newPost.img[0]);
    // get the image url
    const uriImg = await getDownloadURL(storageRef);
    // create path with title + date
    // add post to the firebase firestore
    await addDoc(collection(firestore, "posts"), {
      img: uriImg,
      content,
      title: newPost.title,
      date: Timestamp.fromDate(new Date()),
      path: uid,
    });
  } catch (e) {
    console.error("ERROR WITH ADD NEW POST: ", e);
  }
};

export const getPostFeed = async () => {
  const ref = collection(firestore, "posts");
  const q = query(ref, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const { date } = doc.data();
    const dataFormated = date.toDate().toLocaleDateString("es-ES");
    return { ...doc.data(), date: dataFormated };
  });
};

export const getCourses = async (id) => {
  const q = query(collection(firestore, "user", id, "course"));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
