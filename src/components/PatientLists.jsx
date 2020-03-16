import React, { Component } from "react";
import DropoutList from './DropoutList';
import AttendList from './AttendList';

class PatientLists extends Component {
    render() {
        return (
            <div className="patientLists main">
                <div className="wrapper-patientLists">
                    {/* <AttendList />
                    <DropoutList /> */}
                </div>
            </div>
        );
    }
}

export default PatientLists;