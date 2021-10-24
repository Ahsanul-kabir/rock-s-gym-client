import React, { useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../resources/images/logos/logo.png'

const Navbar = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"><img style={{ height: '50px' }} src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link mr-4" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/serviceKnow">Health Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/order/:`${name}`">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/login" ><button className="btn main-btn">{loggedInUser.name || 'Login'}</button></Link>
                        </li>
                        {/* <li>
                            <button className="btn main-btn ml-1" onClick={() => {
                                localStorage.clear()
                                history.push('/home')
                            }}>LogOut</button>
                        </li> */}
                        {/* <NavDropdown>

                        </NavDropdown> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;