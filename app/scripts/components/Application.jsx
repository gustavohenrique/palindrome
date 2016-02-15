import React, { PropTypes } from 'react';
import AppBar from './AppBar.jsx';


export default class Application extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <AppBar path={this.props.children.props.route.path} />
                <div className="tab-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.node.isRequired
};