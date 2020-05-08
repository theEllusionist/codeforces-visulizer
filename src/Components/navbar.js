import React from "react";
import {Link} from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class Navbar extends React.Component{
     componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {

        return(
            <div>

                <nav>
                    <div className="nav-wrapper grey darken-1">
                        <span href="#!" className="brand-logo center">CFViz</span>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/problem">Problems Solved</Link></li>
                            <li><Link to='/compare_problems'>Compare Problems</Link></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/problem">Problems Solved</Link></li>
                    <li><Link to='/compare_problems'>Compare Problems</Link></li>
                </ul>

            </div>

        )
    }

};
export default Navbar