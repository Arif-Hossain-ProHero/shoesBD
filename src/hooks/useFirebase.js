import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../firebase/firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  firebaseInitialization();
  const auth = getAuth();

  //user with email and password
  const createUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //login user
  const loginUser = (email, password, history, redirect) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        if (admin) {
          history.replace("/dashboard");
        } else {
          history.replace(redirect);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    setIsLoading(false);
    return () => unSubscribe;
  }, []);

  //Save users
  const saveUser = (email, name) => {
    const newUser = {
      email: email,
      displayName: name,
    };
    fetch("https://floating-meadow-68096.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .catch((error) => {});
  };

  //check isAdmin
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://floating-meadow-68096.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        console.log(data);
        setIsLoading(false);
      });
  }, [user?.email]);

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setMessage("can not logging out");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    error,
    logOut,
    admin,
    createUser,
    loginUser,
    message,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
