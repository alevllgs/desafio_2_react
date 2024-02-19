import React, { useState } from 'react';
import Formulario from './formulario';
import Alert from './alert';
import SocialButton from './social_button';

function Registros() {
  const [alerta, setAlerta] = useState({
    mostrar: false,
    tipo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (formularioData) => {
    if (!formularioData.nombre) {
      setAlerta({ mostrar: true, tipo: 'error', mensaje: 'Por favor ingrese su nombre.' });
      return;
    }
    if (formularioData.password !== formularioData.confirmPassword) {
      setAlerta({ mostrar: true, tipo: 'error', mensaje: 'Las contraseñas no coinciden.' });
      return;
    }
    if (formularioData.password.length < 6) {
      setAlerta({ mostrar: true, tipo: 'error', mensaje: 'La contraseña debe tener al menos 6 caracteres.' });
      return;
    }
    setAlerta({ mostrar: true, tipo: 'success', mensaje: 'Registro completo.' });
  };

  return (
    <div className='cajaIconos'>
        <div>
            <h1>Crea una cuenta</h1>
        </div>
      <div className='alerta'>
        {alerta.mostrar && <Alert type={alerta.tipo} message={alerta.mensaje} />}
        </div>
        <div className='iconos'>
        <SocialButton icon="linkedin" />
        <SocialButton icon="github" />
        <SocialButton icon="google" />
      </div>
      <div>
        <h5>O usa tu email para registrarte</h5>
      </div>
      <div className='formulario'><Formulario  onSubmit={handleSubmit} /></div>
      
    </div>
  );
}

export default Registros;
