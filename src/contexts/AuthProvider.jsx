import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import {
  auth,
  githubAuthProvider,
  googleAuthProvider,
} from "../config/firebase";

const AuthContext = createContext();
export const useAuh = () => useContext(AuthContext);

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
    updateUserProfile,
    forgotPassword,
    verifyEmail,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubcribe();
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
