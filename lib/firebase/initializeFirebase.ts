import admin from "firebase-admin";

const initializeFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(
      process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT || ""
    ),
  });
};

export default initializeFirebase;
