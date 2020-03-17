import React, { Component } from "react";
import iconArrow from '../public/arrow.png';

class Info extends Component {
    render() {
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
                                <tr><th>ФИО</th><td></td></tr>
                                <tr><th>Возраст</th><td></td></tr>
                                <tr><th>Диагноз</th><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;