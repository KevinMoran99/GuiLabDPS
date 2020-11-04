import React, { useState } from "react";
import { auth } from "../firebase";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
        </ul>
      </nav>
      <div className="mt-8">
        <h1 className="text-xl text-center font-bold mb-3">
          Cambiar contraseña
      </h1>
        <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form action="">
            {emailHasBeenSent && (
              <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                Por favor revisar su correo electronico
              </div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <label htmlFor="userEmail" className="w-full block">
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
            <button
              className="w-full bg-blue-400 text-white py-3"
              onClick={event => {
                sendResetEmail(event);
              }}
            ><i class="fa fa-save"></i> Guardar
          </button>
          </form>

          <Link
            to="/"
            className="my-2 text-blue-700 hover:text-blue-800 text-center block"
          >
            &larr; Regresar
        </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
