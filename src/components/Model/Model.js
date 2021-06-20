import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LogiInModel.css'
import { faCross, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const customStyles = {
  content: {
    width:"400px",
    height:"400px",
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

const[loginData,setLoginData]=useState({});

const HandleInput=(e)=>{
    if(e.target.name==="email"){
        const NewLoginInData={...loginData};
        NewLoginInData.email=e.target.value;
        setLoginData(NewLoginInData);
    }
    else if(e.target.name==="password"){
        const NewLoginInData={...loginData};
        NewLoginInData.password=e.target.value;
        setLoginData(NewLoginInData);
        console.log(e.target.value)

    }
}

  const openModal=()=> {
    setIsOpen(true);
  }

  const afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal=()=>{
    setIsOpen(false);
  }

  const HandlSignin=(e)=>{
    console.log(loginData);
    e.preventDefault();
}
    return (
        <div>
        <button className="btn btn-primary mt-0 model-name" onClick={openModal}>Sign In</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={closeModal} className="text-white bg-danger">
          <FontAwesomeIcon className='icon' icon={faTimesCircle} size='1x' color="#ffffff"/>
          </button>
          <h1 className="text-center">Log In</h1>
          <form className="Login-model" onSubmit={HandlSignin}>
            <input onChange={HandleInput} name="email"className="input" type="email" placeholder="Enter Your Email"/>
            <input onChange={HandleInput} name="password" className="input" type="password" placeholder="Enter Your Password"></input>
            <input onChange={HandleInput} class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label" for="flexCheckChecked"> Remember Me</label>
            <div className="d-flex justify-content-center mt-2">
            <button>Sign In</button>
            </div>
          </form>
         
          <div className="d-flex justify-content-center">
              
          <button className=" login-google-button">
          <FontAwesomeIcon className='icon' icon={faGoogle} size='1x' color="#DD5145"/>
            <span>Log in with Google</span>
        </button>
          </div>
        </Modal>
      </div>
    );
};

export default Model;