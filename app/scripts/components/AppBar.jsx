import React from 'react';
import { Link } from 'react-router';


export default class AppBar extends React.Component {

    render() {
        const { path } = this.props;

        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Palindrome</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className={path === 'home' || path === undefined  ? 'active' : ''}>
                            <Link to="home">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
