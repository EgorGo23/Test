import React, { Component } from "react";
import Info from './Info';
import PatientLists from './PatientLists';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Info />
                <PatientLists />
            </div>
        );
    }
}

export default App;