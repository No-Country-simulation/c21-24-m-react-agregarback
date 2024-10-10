import React from 'react';
import './Registro.css';

const Registro = () => {
  return (
    <div className="registro-container">
  <h2>Registro</h2>
  <form>
    <div className="form-group">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" required />
    </div>
    <div className="form-group">
      <label htmlFor="correo">Correo Electrónico</label>
      <input type="email" id="correo" required />
    </div>
    <div className="form-group">
      <label htmlFor="contraseña">Contraseña</label>
      <input type="password" id="contraseña" required />
    </div>
    <div className="form-group">
      <label htmlFor="telefono">Número de Teléfono</label>
      <input type="tel" id="telefono" required />
    </div>
    <button type="submit">Registrar</button>
  </form>
</div>

  );
};

export default Registro;
