import React, { Component } from "react";
import iconArrow from '../public/arrow.png';

class Info extends Component {
    render() {
        return (
            <div className="info main">
                <div className="wrapper-info">
                    <div className="label-info">
                        <span>Информация о пациенте</span>
                        <img src={iconArrow} className="icon"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;