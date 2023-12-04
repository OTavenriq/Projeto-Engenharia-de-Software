import React, { useState } from 'react';
import axios from 'axios';
import '../../style/login.css' // Importa o CSS
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação

    try {
      const response = await axios.post(
        'http://localhost:3000/login',
        JSON.stringify({ login, password }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
        navigate("/home");
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Login ou senha incorretos, por favor, verifique!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Bem Vindo ao 2V</h2>
        <p>Faça seu login abaixo</p>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
