import React, { Component } from "react";
import Info from './Info';
import PatientLists from './PatientLists';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDataInfo: {
                firstName: '',
                lastName: '',
                patrName: '',
                age: '',
                diagnosis: '',
            }
        }
    }
    
    updateCurrentDataInfo = ({ firstName: newFirstName, lastName: newLastName, patrName: newPatrName, age: newAge, diagnosis: newDiagnosis }) => {
        this.setState({
            currentDataInfo: {
                firstName: newFirstName,
                lastName: newLastName,
                patrName: newPatrName,
                age: newAge,
                diagnosis: newDiagnosis,
            }
        })
    }

    render() {

        return (
            <div className="content">
                <Info data={this.state.currentDataInfo} />
                <PatientLists updateCurrentDataInfo={this.updateCurrentDataInfo} />
            </div>
        );
    }
}

export default App;