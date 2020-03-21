import React, { Component } from "react";
import iconArrow from '../public/arrow.png';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const { firstName, lastName, patrName, age, diagnosis } = data;

        return (
            <div className="main">
                <div className="wrapper">
                    <div className="label-info">
                        <span>Информация о пациенте</span>
                        <img src={iconArrow} className="icon"></img>
                    </div>

                    <div className="patient-info">
                        <table className="table-info">
                            <tbody>
                                <tr><th>ФИО</th><td>{`${lastName} ${firstName} ${patrName}`}</td></tr>
                                <tr><th>Возраст</th><td>{ age }</td></tr>
                                <tr><th>Диагноз</th><td>{ diagnosis }</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;