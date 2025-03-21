import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <h1><i> <Link to="/" className='text-decoration-none text-black'> Sandhya</Link> </i></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><b><i>Home</i></b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About"><b><i>About</i></b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Skills"><b><i>Skills</i></b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Resume"><b><i>Resume</i></b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Projects"><b><i>Portfolio</i></b></Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav
