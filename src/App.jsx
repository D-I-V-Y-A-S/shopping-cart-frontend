import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import GetAllProductsComponent from './components/GetAllProductsComponent/GetAllProductsComponent'
import AddNewProductComponent from './components/AddNewProductComponent/AddNewProductComponent'
import GetCartItemsComponent from './components/GetCartItemsComponent/GetCartItemsComponent'

const App = () => {
  return (
    <Router>
            <div className="container">
              <h1>Shopping Cart App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Products</Link>
                <Link to="/cart" >Cart</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllProductsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewProductComponent/>}></Route>
                 <Route path='/cart' element={<GetCartItemsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  )
}

export default App