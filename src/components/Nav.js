import { Link } from "react-router-dom";

const Routs = [
  {
    route: '/',
    name: 'Hooks'
  },
  {
    route: '/lazy',
    name: 'Lazy Load'
  },
  {
    route: '/example',
    name: 'Axios'
  },
  {
    route: '/events',
    name: 'Events'
  },
  {
    route: '/redux',
    name: 'Redux'
  },
  {
    route: '/reduxhooks',
    name: 'Redux Hooks'
  },
  {
    route: '/redux2',
    name: 'Redux 2'
  },
  {
    route: '/questions/test',
    name: 'Question'
  },
  {
    route: '/events2',
    name: 'Events 2'
  }
]

const Nav = () => {

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/" className="navbar-brand">React Learning</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {
            Routs.map((e, i) => {
              return <li className="navbar-item" key={i}>
                <Link to={e.route} exact="true" className="nav-link">{e.name}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav;