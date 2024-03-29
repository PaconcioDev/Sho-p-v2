import "./NavBar.css";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Hamburger } from "../Hamburger/Hamburger.jsx";
import { ProductsContext } from "../../context/ProductsContext.jsx";
import { UserModal } from "../UserModal/UserModal.jsx";

function NavBar() {
  const { setSearch } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setSearch(event.target.value.toLowerCase().trim());
      navigate("products/all");
      event.target.value = "";
    }
  };

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__item-container">
          <li className="navbar__item">
            <Hamburger />
          </li>
          <li className="navbar__item navbar__item--space navbar__item--search">
            <input
              className="navbar__input"
              type="text"
              placeholder="Search..."
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </li>
        </ul>
        <ul className="navbar__item-container">
          <li className="navbar__item">
            <NavLink
              onClick={() => setSearch("")}
              className="navbar__title"
              to={"/products/all"}
            >
              Sho-P
            </NavLink>
          </li>
        </ul>
        <ul className="navbar__item-container">
          <li className="navbar__item">
            <UserModal />
          </li>
          <li className="navbar__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { NavBar };
