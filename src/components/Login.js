import React, { useState } from "react";
import "./Login.css";
import Logo from "../assets/linkedin.png";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter your full name!");
    }
    createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
        updateProfile(userCredential.user, {
            displayName: name, 
            photoURL: profilePic,
      })
      .then(() => {
        dispatch(
            login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: name,
                photoURL: profilePic,
            })
        );
    });
    }).catch(error => alert(error))
}
  const logIntoApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        dispatch(
            login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                photoURL: userCredential.user.photoURL,
            })
        );
    })
  .catch((error) => alert(error));




  };

  return (
    <div className="login">
      <img src={Logo} alt="" />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Greg Jones"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Picture URL"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="gregjones@email.com"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={logIntoApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
