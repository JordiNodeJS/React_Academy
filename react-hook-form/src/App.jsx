import { useForm } from 'react-hook-form'
import SignupForm from './SignupForm'

function App() {
  const {
    register,
    handleSubmit,
    handleChange
    // watch,
    // formState: { errors }
  } = useForm()
  const onSubmit = handleSubmit(data => console.log(data))
  return (
    <>
      <SignupForm />
      <hr />
      <form onSubmit={onSubmit}>
        {/* nombre  */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          id="nombre"
          {...register('nombre', {
            required: 'Este campo es requerido',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracteres'
            }
          })}
        />
        {/* correo */}
        <label htmlFor="correo">Correo</label>
        <input type="email" name="correo" id="correo" {...register('correo')} />
        {/* contraseña */}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register('password')}
        />
        {/* fecha de nacimiento */}
        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input type="date" name="fecha" id="fecha" {...register('fecha')} />
        {/* país */}
        <label htmlFor="pais">País</label>
        <select name="pais" id="pais" {...register('pais')}>
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
            {...register('terminos')}
          />
          Acepto los términos y condiciones.
        </label>

        {/* radio */}
        <div className="genre">
          <label htmlFor="sexo">Sexo</label>
          <input type="radio" name="sexo" value="m" />
          <label htmlFor="sexo">Masculino</label>
          <input type="radio" name="sexo" value="f" />
          <label htmlFor="sexo">Femenino</label>
        </div>
        {/* boton  */}
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
