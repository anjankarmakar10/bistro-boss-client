import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {
  auth,
  githubAuthProvider,
  googleAuthProvider,
} from "../config/firebase";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, image) => {
    return updateProfile(user, { displayName: name, photoURL: image });
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const verifyEmail = (user) => {
    return sendEmailVerification(user);
  };

  const value = {
    user,
    signInWithGoogle,
    signInWithGithub,
    loading,
    signUpWithEmail,
    logOut,
    signInWithEmail,
    updateUserProfile,
    verifyEmail,
    forgotPassword,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      const userInfo = {
        email: user?.email || `${user?.reloadUserInfo?.screenName}@github.com`,
      };

      if (user) {
        const { data } = await axios.post(
          "https://bistro-boss-server-anjankarmakar.vercel.app/jwt",
          userInfo
        );
        localStorage.setItem("access_token", data);
      } else {
        localStorage.removeItem("access_token");
      }

      setLoading(false);
    });

    return () => unsubcribe();
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
