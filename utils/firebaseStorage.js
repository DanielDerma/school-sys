import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { firestore } from "../firebase/client";

export const getRole = async (userId) => {
  const docRef = doc(firestore, "user", "Pr10@prepa7.com");
  const data = getDoc(docRef).then((doc) => {
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

export const updateUser = async (oldInfo,info, uid) => {

  const docRef = doc(firestore, "user", oldInfo.id);

  try {
    await updateDoc(washingtonRef, {
      capital: true,
    });
    console.log("Document successfully updated!");
  } catch (err) {
    console.log(err);
  }

};
