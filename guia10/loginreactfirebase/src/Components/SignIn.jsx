import React, { useState } from "react";
import { Link } from "@reach/router";
import { signInWithGoogle } from "../firebase";
import { auth } from "../firebase";

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const signInWithEmailAndPasswordHandler = (event) => {

    event.preventDefault(); //DOM -> POST , GET -> PHP , JAVA , ASP , ETC
   
    console.log(" SignIn - signInWithEmailAndPasswordHandler ");
    const user= auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error, por favor revisar credenciales -> " + error);
        console.error("Error signing in with password and email ", error);
      });
      console.log(" SignIn - signInWithEmailAndPassword ");  
      console.log(" const user :  " + user);      
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };


  return (
    <div className="">
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
        </ul>
      </nav>
      <div className="mt-8">
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form>
            {error !== null && (
              <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <div className="form-group">
              <label>Correo Electronico</label>
              <input type="email" className="form-control"
                name="userEmail"
                placeholder="Ingresar email"
                onChange={(event) => onChangeHandler(event)} />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" className="form-control"
                name="userPassword"
                placeholder="Ingresar password"
                onChange={(event) => onChangeHandler(event)} />
            </div>

            <button type="submit" className="btn btn-primary btn-block"
              onClick={(event) => { signInWithEmailAndPasswordHandler(event) }}
            ><i className="fa fa-lock"></i>  Ingresar</button>
            <p className="text-center my-3">
              {" "}
              <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                No tiene cuenta ?
          </Link>{" "}
              <br />{" "}
              <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                Olvido la contraseña ?
          </Link>
            </p>
          </form>
          <button className="btn btn-info btn-block"
            onClick={() => { signInWithGoogle(); }}
          ><i className="fa fa-google"></i>  Ingresar con Google
          </button>   
        </div>   
      </div>
    </div>

  );
};

export default SignIn;
