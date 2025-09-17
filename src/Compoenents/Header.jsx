import React, { useContext } from "react";
import NavBar from "./NavBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";
const Header = () => {
 
  const { productList } = useContext(CartContext);

  return (
    <>
      <div className="header-container">
        <div className="header-logoBar flexBox">
          <div className="logo">
            <Link to={'/'}>
               <img className="image" src="./image/amazonlog.png" alt="Amazon logo" />
            </Link>
          </div>
          <div className="header-addSelector flexBox">
            <div>
              <LocationOnIcon />
            </div>
            <div className="menu-items" style={{ margin: "0" }}>
              <span>Deliver</span>
              <p className="bold">South Africa</p>
            </div>
          </div>
        </div>
        <div className="header-searchBar">
          <div className="headerSearchBar flexBox">
            <select id="header-category">
              <option defaultValue="all">
                All Categories
              </option>
              <option value="appliances">Appliances</option>
              <option value="phones and computers">Phones and Computers</option>
              <option value="decor">Decor</option>
            </select>
            <input
              className="searchBar"
              type="text"
              placeholder="Search Amazon"
            />
            <button className="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="header-menuBar flexBox">
          <div className="menu-items flexBox">
           
              <div className="flag flexBox">  
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" />
                <p className="bold">En</p>
              </div>
            
              <div className="downArrow">
                <ArrowDropDownIcon />
              </div>
           
          </div>
          <div className="menu-items">
            <Link to={'/login'}>
              <span>
                Hello,
                <span>Sign in</span>
              
            </span>
            <p className="bold">Account & List</p></Link>
          </div>
          <div className="menu-items">
            <span>Returns</span>
            <p className="bold">& Orders</p>
          </div>
          <Link to={"/CartPage"}>
          <div className="menu-items flexBox">
            <div className="bold">
              <AddShoppingCartIcon />
              <span>{productList.length}</span>
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
