import React, { useState } from "react"
import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Category from "./components/Category"
import ItemsList from "./components/ItemsList"
import { items } from "./data"

function App() {

  const [itemsData, setItemsData] = useState(items)

  //Get all categories unique
  const allCategories = ["All", ...new Set(items.map((i) => i.category))]

  //Filter by category
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  //Filter by search
  const filterBySearch = (word) => {
    if (word != "") {
      const newArr = items.filter((item) => item.title.toLowerCase().includes(word.toLowerCase()))
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterCategory={filterByCategory} allCategories={allCategories} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  )
}

export default App
