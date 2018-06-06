import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.scss";
import HeaderAdministracion from './HeaderAdministracion.js'

export default class Administracion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidenav: false
        };
    }
    toggleSidenav = () => {
        this.setState({ showSidenav: !this.state.showSidenav });

    }

    render() {
        return (
            <div className="Administracion">
                <HeaderAdministracion />
                <h1>Administracion</h1>

            </div>
        );
    }
}
