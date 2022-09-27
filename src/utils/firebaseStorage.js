// getCollectionUser
// getCollectionClass
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
  setDoc,
  deleteDoc,
  startAt,
  endAt,
  limit,
  startAfter,
  endBefore,
  addDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uniqid from "uniqid";
import { firestore, storage } from "../services/client";

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
  try {
    const docRef = doc(firestore, "subject", subject);
    const response = await getDoc(docRef);
    const { student: data, refTeacher, numTeacher, nUnit } = response.data();

    const collectionClass = data.map(async (user) => {
      const docRefCourse = doc(firestore, "user", user, "course", subject);
      const docRefStudent = doc(firestore, "user", user);
      const response = await getDoc(docRefCourse);
      const response2 = await getDoc(docRefStudent);
      const { email, contact_add, fname, lname, age } = response2.data();

      return {
        email,
        contact_add,
        fname,
        lname,
        age,
        subject,
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
      nUnit,
    };

    return { resultSort, teacher };
  } catch (error) {
    return { resultSort: [], teacher: {} };
  }
};

export const getCourses = async (id) => {
  const q = query(collection(firestore, "user", id, "course"));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export const updateRanks = async (values, newRank) => {
  const docRef = doc(firestore, "user", values.email, "course", values.subject);
  try {
    await updateDoc(docRef, { ranks: newRank });
  } catch (err) {
    console.error(err);
  }
};

export const createUser = async (values) => {
  const docRef = doc(firestore, "user", values.email);
  try {
    await setDoc(docRef, values);
    await fetch("/api/addUser", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(values),
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (email, values) => {
  const docRef = doc(firestore, "user", email);
  try {
    await updateDoc(docRef, values);
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (email) => {
  const docRef = doc(firestore, "user", email);
  try {
    await deleteDoc(docRef);
    await fetch("/api/deleteUser", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(email),
    });
  } catch (err) {
    console.error(err);
  }
};

export const createCourse = async (email, ranks, subject) => {
  const docRef = doc(firestore, "user", email, "course", subject);
  const docRef2 = doc(firestore, "subject", subject);
  try {
    await setDoc(docRef, { ranks });
    await updateDoc(docRef2, {
      student: arrayUnion(email),
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateCourse = async (email, ranks, subject) => {
  const docRef = doc(firestore, "user", email, "course", subject);
  try {
    await updateDoc(docRef, { ranks });
  } catch (err) {
    console.error(err);
  }
};

export const deleteCourse = async (email, subject) => {
  const docRef = doc(firestore, "user", email, "course", subject);
  const docRef2 = doc(firestore, "subject", subject);
  try {
    await deleteDoc(docRef);
    await updateDoc(docRef2, {
      student: arrayRemove(email),
    });
  } catch (err) {
    console.error(err);
  }
};

const timestampToSimpleDate = (timestamp) => {
  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const createOrEditPost = async (post, isEdit) => {
  try {
    if (!isEdit) {
      const uid = uniqid();

      const timestamp = Timestamp.fromDate(new Date());

      const pathImg = "posts/" + uid;
      const storageRef = ref(storage, pathImg);
      await uploadBytes(storageRef, post.img[0]);
      const urlImg = await getDownloadURL(storageRef);

      await setDoc(doc(firestore, "posts", uid), {
        img: urlImg,
        content: post.content,
        title: post.title,
        date: timestamp,
        uid,
      });

      // add post to utils counter
      const docRef = doc(firestore, "utils", "posts");

      const dataDoc = await getDoc(docRef);
      const { count } = dataDoc.data();

      await setDoc(docRef, {
        count: count + 1,
      });
    } else {
      if (post?.img[0].name) {
        console.log("entre", post);
        // check if image is change
        const pathImg = "posts/" + post.uid;
        const storageRef = ref(storage, pathImg);
        await uploadBytes(storageRef, post.img[0]);
        const urlImg = await getDownloadURL(storageRef);
        await updateDoc(doc(firestore, "posts", post.uid), {
          img: urlImg,
          content: post.content,
          title: post.title,
        });
      } else {
        await updateDoc(doc(firestore, "posts", post.uid), {
          content: post.content,
          title: post.title,
          img: post.img,
        });
      }
    }
  } catch (e) {
    console.error("ERROR WITH ADD NEW POST: ", e);
  }
};

export const deletePost = async (uid) => {
  try {
    await deleteDoc(doc(firestore, "posts", uid));

    // delete post to utils counter
    const docRef = doc(firestore, "utils", "posts");

    const dataDoc = await getDoc(docRef);
    const { count } = dataDoc.data();

    await setDoc(docRef, {
      count: count - 1,
    });
  } catch (e) {
    console.error("ERROR WITH DELETE POST: ", e);
  }
};

export const getPostFeed = async () => {
  const ref = collection(firestore, "posts");
  const q = query(ref, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const { date } = doc.data();
    const dataFormatted = date.toDate().toLocaleDateString("es-ES");
    return { ...doc.data(), date: dataFormatted };
  });
};

export const getPost = async (path) => {
  const docRef = doc(firestore, "posts", path);
  const data = await getDoc(docRef);
  const dataF = data.data();

  return dataF;
};

export const getParcialFeed = async (typo, c) => {
  const ref = collection(firestore, "posts");
  const selectQuery = () => {
    if (typo === "next") {
      return query(ref, orderBy("date", "desc"), startAfter(c[1]), limit(2));
    } else if (typo === "prev") {
      return query(ref, orderBy("date", "desc"), endBefore(c[0]), limit(2));
    } else {
      return query(ref, orderBy("date", "desc"), limit(2));
    }
  };
  const q = selectQuery();
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc);
};

export const getPostCount = async (id) => {
  const docRef = doc(firestore, "utils", "posts");

  const dataDoc = await getDoc(docRef);
  const { count } = dataDoc.data();
  return count;
};
