import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar({title = "Default Title", aboutText = "Default About Text", mode, changeModeFunction}) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" onChange={changeModeFunction}/>
                <label className="form-check-label mx-3" htmlFor="checkNativeSwitch" style={{color: mode === 'light' ? 'black':'white'}}>
                    {mode === "light"? "Enable Dark Mode" : "Enable Light Mode"}
                </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string.isRequired
};

// Navbar.defaultProps = {    Now Outdated
//   title: 'Default Title',
//   aboutText: 'Default About Text'
// };

