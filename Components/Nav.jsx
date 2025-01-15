import React from 'react'
// import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <h1><i> <a href="/" className='text-decoration-none text-black'> Sandhya</a> </i></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><b><i>Home</i></b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About"><b><i>About</i></b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Skills"><b><i>Skills</i></b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Resume"><b><i>Resume</i></b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Portfolio"><b><i>Portfolio</i></b></a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav
