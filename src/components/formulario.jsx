import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formulario);
  };

  return (
    <div className='formulario'>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formulario.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          value={formulario.confirmPassword}
          onChange={handleChange}
          required
        />
      </div >
      <button type="submit" className='boton'>Enviar</button>
    </form>
    </div>
  );
}

export default Formulario;

