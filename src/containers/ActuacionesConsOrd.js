import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./ActuacionesConsOrd.scss";

export default class ActuacionesConsOrd extends Component {
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
            <div className="ActuacionesConsOrd">
                <h1>Actuaciones de Conservacion Ordinaria</h1>

            </div>
        );
    }
}