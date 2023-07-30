import { useFormik } from 'formik'

function App() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: 'Miguela',
      correo: 'miquela@gmail.com',
      password: '222',
      fecha: '1923-03-20',
      pais: 'bo',
      terminos: true,
      sexo: 'f'
    },
    onSubmit: values => {
      console.log(values)
    },
    validate: values => {
      const errors = {}
      if (!values.nombre) {
        errors.nombre = 'El nombre es obligatorio'
      } else if (values.nombre.length < 3) {
        errors.nombre = 'El nombre debe tener al menos 3 caracteres'
      }
      if (!values.correo) {
        errors.correo = 'El correo es obligatorio'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
      ) {
        errors.correo = 'El correo no es válido'
      }
      if (!values.password) {
        errors.password = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      }
      if (!values.fecha) {
        errors.fecha = 'La fecha es obligatoria'
      }
      if (!values.pais) {
        errors.pais = 'El país es obligatorio'
      }
      if (!values.terminos) {
        errors.terminos = 'Debe aceptar los términos y condiciones'
      }
      if (!values.sexo) {
        errors.sexo = 'El sexo es obligatorio'
      }
      if (!values.comentarios) {
        errors.comentarios = 'El comentario es obligatorio'
      }
      return errors
    }
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* nombre  */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          onChange={handleChange}
          value={values.nombre}
        />
        <p>{values.nombre && 'El nombre es válido'}</p>
        <p>{errors.nombre && errors.nombre}</p>
        {/* correo */}
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          name="correo"
          id="correo"
          onChange={handleChange}
          value={values.correo}
        />
        {/* contraseña */}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        {/* fecha de nacimiento */}
        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          onChange={handleChange}
          value={values.fecha}
        />
        {/* país */}
        <label htmlFor="pais">País</label>
        <select
          name="pais"
          id="pais"
          onChange={handleChange}
          value={values.pais}
        >
          <option value="mx">México</option>
          <option value="us">Estados Unidos</option>
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="co">Colombia</option>
          <option value="cl">Chile</option>
          <option value="ec">Ecuador</option>
          <option value="uy">Uruguay</option>
          <option value="ve">Venezuela</option>
          <option value="py">Paraguay</option>
          <option value="bo">Bolivia</option>
        </select>
        {/* términos */}

        <label htmlFor="terminos">
          <input
            type="checkbox"
            name="terminos"
            id="terminos"
            onChange={handleChange}
            checked={values.terminos}
          />
          Acepto los términos y condiciones.
        </label>

        {/* radio */}
        <div className="genre">
          <label htmlFor="sexo">Sexo</label>
          <input
            type="radio"
            name="sexo"
            value="m"
            onChange={handleChange}
            checked={values.sexo === 'm'}
          />
          <label htmlFor="sexo">Masculino</label>
          <input
            type="radio"
            name="sexo"
            value="f"
            onChange={handleChange}
            checked={values.sexo === 'f'}
          />
          <label htmlFor="sexo">Femenino</label>
        </div>
        {/* boton  */}
        <button type="submit" disabled={Object.keys(values).length === 0}>
          Enviar
        </button>
      </form>
    </>
  )
}

export default App
