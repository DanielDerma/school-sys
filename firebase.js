import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDEP5t9o4sUucqJqEComfb7YzDC_uLI0SA",
  authDomain: "prueba1-4ba9d.firebaseapp.com",
  projectId: "prueba1-4ba9d",
  storageBucket: "prueba1-4ba9d.appspot.com",
  messagingSenderId: "171922185069",
  appId: "1:171922185069:web:19fad71e6a21d65d311864",
});

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });
export const auth = getAuth(app);
export default app;
