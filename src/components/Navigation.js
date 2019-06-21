import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/"> {this.props.titulo}</a>
                </div>
            </nav>
        )
    }
}
export default Navigation;