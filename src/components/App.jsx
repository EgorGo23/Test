import React, { Component } from "react";
import Info from './Info';
import PatientLists from './PatientLists';


class App extends Component {
    render() {
        return (
            <div className="content">
                <Info />
                <PatientLists />
            </div>
        );
    }
}

export default App;