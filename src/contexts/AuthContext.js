import { useContext, useState, useEffect, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
} from "firebase/auth";
import { SelectPage } from "../utils";

import { auth } from "../services/client";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [pages, setPages] = useState("");
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email.toLowerCase(), password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmailF(email) {
    return updateEmail(auth.currentUser, email);
  }

  function updatePasswordF(password) {
    return updatePassword(auth.currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user === null) {
        setLoading(false);
      }
      user
        ?.getIdToken()
        .then((elem) =>
          fetch("/api/roles", {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: elem,
            }),
          })
        )
        .then((result) => result.json())
        .then((result) => {
          const role = SelectPage(result.role);
          setPages(role);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmailF,
    updatePasswordF,
    pages,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
