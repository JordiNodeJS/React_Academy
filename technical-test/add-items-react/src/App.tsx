import { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

type Item = {
  id: ItemId
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    text: 'Item 1 🍔'
  },
  {
    id: crypto.randomUUID(),
    text: 'Item 2 🫥'
  },
  {
    id: crypto.randomUUID(),
    text: 'Item 3 🌩️'
  }
]

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('inputItem')
    if (!(input instanceof HTMLInputElement) || input === null) return

    const newItem = { id: crypto.randomUUID(), text: input.value }

    setItems(prevItem => [...prevItem, newItem])

    input.value = ''
  }

  const handleDelete = (id: ItemId) => () =>
    setItems(prevItem => prevItem.filter(prevItem => prevItem.id !== id))

  return (
    <main>
      <aside>
        <h1>CRUD</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a añadir
            <input
              name="inputItem"
              type="text"
              placeholder="Item..."
              required
            />
          </label>
          <button type="submit">Añadir</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.length === 0 ? (
            <li>No hay elementos</li>
          ) : (
            items.map(item => (
              <li key={item.id}>
                {item.text}
                <button onClick={handleDelete(item.id)}>Eliminar</button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  )
}

export default App
