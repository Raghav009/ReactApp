import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/" className="navbar-brand">React Learning</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Hooks</Link>
          </li>
          <li className="navbar-item">
            <Link to="/lazy" className="nav-link">Lazy Load</Link>
          </li>
          <li className="navbar-item">
            <Link to="/example" className="nav-link"> Axios </Link>
          </li>
          <li className="navbar-item">
            <Link to="/events" exact="true" className="nav-link">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/redux" exact="true" className="nav-link">Redux</Link>
          </li>
          <li className="navbar-item">
            <Link to="/reduxhooks" exact="true" className="nav-link">Redux Hooks</Link>
          </li>
          <li className="navbar-item">
            <Link to="/redux2" exact="true" className="nav-link">Redux 2</Link>
          </li>
          <li className="navbar-item">
            <Link to="/questions" exact="true" className="nav-link">Question</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;