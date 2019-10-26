import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div>
    <Link to="/">Inicio</Link>
    <Link to="/page-2">page 1</Link>
    <Link to="/acerca/">page 2</Link>
  </div>
)

export default Navbar