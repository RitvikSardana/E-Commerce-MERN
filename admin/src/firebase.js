import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPdOqHrha0524YtFsyf198KZsa98x88m8",
  authDomain: "ecommerce-3f92a.firebaseapp.com",
  projectId: "ecommerce-3f92a",
  storageBucket: "ecommerce-3f92a.appspot.com",
  messagingSenderId: "769125410043",
  appId: "1:769125410043:web:d9477489e2c13604c7bc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;