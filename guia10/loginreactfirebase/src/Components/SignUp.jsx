import React, { useState } from "react";
import { Link } from "@reach/router";
import { auth, generateUserDocument } from "../firebase";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event) => {

    event.preventDefault(); // POST , GET , PHP, JAVA , ASP, ETC

    setError("");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {
      setError('Error , Por favor intentar de nuevo : ' + error);
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
        </ul>
      </nav>
      <div className="mt-8">
        <h1 className="text-3xl mb-2 text-center font-bold">Crear Cuenta</h1>
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <form className="">
            
            <label htmlFor="displayName" className="block">
              Nombre:
          </label>
          <div className="form-group">            
              <input type="text" className="form-control"
                name="displayName"
                placeholder="Ingresar Nombre"
                onChange={(event) => onChangeHandler(event)} />
            </div>         

            <label htmlFor="userEmail" className="block">
              Correo:
          </label>
          <div className="form-group">            
              <input type="email" className="form-control"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Ingresar Correo"
                onChange={(event) => onChangeHandler(event)} />
            </div>      

            <label htmlFor="userPassword" className="block">
              Contraseña :
          </label>
          <div className="form-group">            
              <input type="password" className="form-control"
                name="userPassword"
                id="userEmail"
                value={password}
                placeholder="Ingresar Contraseña"
                onChange={(event) => onChangeHandler(event)} />
            </div>  
                       
            <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" 
              onClick={event => {
                createUserWithEmailAndPasswordHandler(event);
              }}
            ><i class="fa fa-save"></i>  Guardar
          </button>
          </form>
          <p className="text-center my-3">
            {" "}
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Regresar Login
          </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
