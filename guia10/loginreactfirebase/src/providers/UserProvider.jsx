import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";

// Context se usa principalmente cuando algunos datos tienen que ser accesibles
// por muchos componentes en diferentes niveles de anidamiento. 
// Aplícalo con moderación porque hace que la reutilización de 
// componentes sea más difícil.


// Context nos permite pasar un valor a lo profundo del árbol de componentes
// sin pasarlo explícitamente a través de cada componente.
// Crear un Context para el user actual (con "null" como valor predeterminado).
export const UserContext = createContext({ user: null });

class UserProvider extends Component {

  state = {user: null};

  /* 
  Esto activaba al triggered  cuando los usuarios iniciaban sesión, 
  cerraban sesión o cuando el token de identificación del usuario 
  cambiaba en situaciones como la caducidad del token o el cambio de 
  contraseña. el triggered solo se activa al iniciar o cerrar sesión.
  */
  componentDidMount = async () => {
    console.log(" UserProvider componentDidMount : ");
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      console.log(" Usuario triggered componentDidMount : " + user);   
      this.setState({ user });      
      console.log("++++++++++++++++++++++++++++++++++");    
    });
  };

  setUserContext = (usertmp) => {  
    this.setState({ usertmp });    
  };

  render() {
    const { user } = this.state;
    console.log(" render -> Usuario UserProvider : " + user);
    return (
      // Usa un Provider para pasar el user actual al árbol de abajo.
      // Cualquier componente puede leerlo, sin importar qué tan profundo se encuentre.
      // En este ejemplo, estamos pasando "user" como valor actual.
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
