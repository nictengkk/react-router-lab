import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  const id = 44;
  return (
    <div>
      <Link to="/">Home Page </Link>
      <Link to="/tacos">Tacos Feed with no query string </Link>
      <Link to="/tacos?hello=world&name=Nic">Tacos Feed with query String</Link>
      <Link to="/twitter">Twitter Feed </Link>
      <Link to={`/tacos/${id}`}>Taco Detail </Link>
    </div>
  );
}

export default NavLink;
