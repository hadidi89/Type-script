import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { ShoppingCartContextModel, useShoppingCart } from '../context/ShoppingCartContext'

const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)      
  const {cartQuantity} = useShoppingCart ()as ShoppingCartContextModel
    

  const toggleMenu = () => { 
    setShowMenu(!showMenu)
  }

  return (
    <nav className="mainmenu container">
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products" >Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
            <NavLink className="menu-link" to="/manage_product" end>users</NavLink>
        </div>
        <div className="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" quantity={0} hideOnMobile={false} />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" quantity={0} />
            <MenuIcon hideOnMobile={true} link="/wishlist" icon="fa-regular fa-heart" quantity={0} />
            <button className="menu-icons" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <MenuIcon quantity={cartQuantity} icon="fa-regular fa-bag-shopping" link={''} hideOnMobile={false} />
            </button> 

            
            <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
        
        </div> 
    </nav>
  )
}

export default MainMenuSection