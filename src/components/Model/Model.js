import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LogiInModel.css'
import { faCross, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { loggedInContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const customStyles = {
  content: {
    width: "400px",
    height: "400px",
    top: '50%',
    left: '70%',
    // right: 'auto',
    // bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(0%, -55%)',
  },
};

const Model = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loginData, setLoginData] = useState({});

  const [loggedInUser, setLoggedInUser] = useContext(loggedInContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (loggedInUser.email) {
    sessionStorage.setItem('email', loggedInUser.email)
  }

  const HandleInput = (e) => {
    if (e.target.name === "email") {
      const NewLoginInData = { ...loginData };
      NewLoginInData.email = e.target.value;
      setLoginData(NewLoginInData);
    }
    else if (e.target.name === "password") {
      const NewLoginInData = { ...loginData };
      NewLoginInData.password = e.target.value;
      setLoginData(NewLoginInData);
      console.log(e.target.value)

    }
  }

  const HandlSignin = (e) => {
    setLoggedInUser(loginData);
    SignInWithEmailPassword(loginData.email, loginData.password)
    // console.log(loginData);
    e.preventDefault();
  }

  const SignInWithEmailPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const Newuser = {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          errors: ''
        };
        setLoggedInUser(Newuser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        const Newuser = {
          error: errorMessage,
          success: ''
        }
        setLoggedInUser(Newuser);
      });
  }

  const HandleSigInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const Newuser = {
          name: result.user.displayName,
          email: result.user.email,
          errors: ''
        };
        setLoggedInUser(Newuser);
        storeAuthToken()
        // ...
      }).catch((error) => {
        const errorMessage = error.message;
        const Newuser = {
          error: errorMessage,
          success: ''
        }
        setLoggedInUser(Newuser);

        // ...
      });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);

        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <div>
      <button className="btn btn-primary mt-0 model-name" onClick={openModal}>Sign In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal} className="text-white bg-danger">
          <FontAwesomeIcon className='icon' icon={faTimesCircle} size='1x' color="#ffffff" />
        </button>
        <h1 className="text-center">Log In</h1>
        <form className="Login-model" onSubmit={HandlSignin}>
          <input onChange={HandleInput} name="email" className="input" type="email" placeholder="Enter Your Email" />
          <input onChange={HandleInput} name="password" className="input" type="password" placeholder="Enter Your Password"></input>
          <input onChange={HandleInput} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label class="form-check-label" for="flexCheckChecked"> Remember Me</label>
          <div className="d-flex justify-content-center mt-2">
            <button>Sign In</button>
          </div>
        </form>

        <div className="d-flex justify-content-center">

          <button className=" login-google-button" onClick={HandleSigInWithGoogle}>
            <FontAwesomeIcon className='icon' icon={faGoogle} size='1x' color="#DD5145" />
            <span>Log in with Google</span>
          </button>
          {
           loggedInUser.error&&<p className='text-warning'>{loggedInUser.error}</p>
          }
        </div>
      </Modal>
    </div>
  );
};

export default Model;