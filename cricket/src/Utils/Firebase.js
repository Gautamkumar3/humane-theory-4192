import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCioz7-9V3CGpxbMpQoDG2KBHFUjN2e05c",
  authDomain: "cricket-4bc52.firebaseapp.com",
  projectId: "cricket-4bc52",
  storageBucket: "cricket-4bc52.appspot.com",
  messagingSenderId: "437352731465",
  appId: "1:437352731465:web:db227cbe7142406a510098",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
