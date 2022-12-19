import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "cricket-4bc52.firebaseapp.com",
  projectId: "cricket-4bc52",
  storageBucket: "cricket-4bc52.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_MESSAGE_SENDER_ID}`,
  appId: `${process.env.REACT_APP_ID}`,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
