import React, { memo, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
// Local
import "./style.scss";

// Components
import Avatar from "../avatar";
import Iconconfig from "../configicon";
import SearchFilter from "./SearchFilter";

function Navbar() {
  // const sampleData = [
  //   { id: 1, first_name: "Aron", last_name: "Paisley", gender: "male" },
  //   { id: 1, first_name: "Nerissa", last_name: "Millhouse", gender: "female" },
  //   { id: 1, first_name: "Michael", last_name: "Schank", gender: "male" },
  //   { id: 1, first_name: "Velma", last_name: "Laiche", gender: "female" },
  // ];

  const [showSearchBox, setSearchBox] = useState(false);
  const onClick = () => setSearchBox(!showSearchBox);

  return (
    <nav className="monkeys-nav">
      <div className="logo-container">
        <span className="logo-partone">MONKEY'S</span>
        <span className="logo-parttwo">CLOUD</span>
      </div>
      {/*/!*<SearchFilter />*!/*/}
      <div className="searchContainer">
        {showSearchBox ? <SearchFilter /> : null}
      </div>
      <div className="navbar-icons">
        <FaSearch className="nav-icon" value="Search" onClick={onClick} />
        {/*<input type="submit" value="Search" onClick={onClick} />*/}

        <Iconconfig className="nav-icon" />
        <FaBell className="nav-icon" />
        <Avatar className="nav-avatar" />
      </div>
    </nav>
  );
}

export default memo(Navbar);
