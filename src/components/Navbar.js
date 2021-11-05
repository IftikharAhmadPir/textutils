import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio1">Light</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Dark</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                        <label className="btn btn-outline-primary" htmlFor="btnradio3">Green</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps =
{
    title: "Set title here",
    home: "Set home here",
    about: "Set about here",
}