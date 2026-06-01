import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id)) {
        return prevCart
      }
      return [...prevCart, product]
    })
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <Cart items={cart} />
    </div>
  )
}

export default App
