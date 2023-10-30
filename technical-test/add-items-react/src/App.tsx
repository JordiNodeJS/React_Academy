import { useState } from 'react'
import './App.css'

type Item = {
  id: `${string}-${string}-${string}-${string}-${string}`
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
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
