import { useState } from "react";
import { BotonGoogle } from "../../components/botones/BotonGoogle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const registrarUsuario = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div>
      <h1>Soy la page Login</h1>
      <form action="" onSubmit={registrarUsuario}>
        <div>
          <label htmlFor="">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button>Crear usuario</button>
      </form>
      <BotonGoogle />
    </div>
  );
};
