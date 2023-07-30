function App() {
  return (
    <form>
      {/* nombre  */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" />
      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" />
      {/* contraseña */}
      <label htmlFor="password">Contraseña</label>
      <input type="password" name="password" id="password" />
      {/* fecha de nacimiento */}
      <label htmlFor="fecha">Fecha de nacimiento</label>
      <input type="date" name="fecha" id="fecha" />
      {/* boton */}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
