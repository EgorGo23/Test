import React, { Component } from 'react';
import cn from 'classnames';

class PresentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPatient: null,
        }
    }
    

    choosePatient = (historyNumber, firstName, lastName, patrName, birthDate, diagnosis) => {
        const { updateCurrentDataInfo } = this.props;

        const age = new Date().getFullYear() - new Date(birthDate).getFullYear();

        const patientInfo = {
            firstName, 
            lastName, 
            patrName, 
            age, 
            diagnosis,
        }
        updateCurrentDataInfo(patientInfo);

        this.setState({ currentPatient: historyNumber })
    }

    render() {
        const presentState = this.props.presentState;
        
        const renderPresentTable = ({ isLoaded, error, list }) => {
            if (error) {
                return (
                    <div><h1>Попробуйте перезагрузить страницу</h1></div>
                );
            } else if (!isLoaded) {
                return (
                    <div>Загрузка...</div>
                );
            } else {
                return (
                    <table className="table-list present-table">
                        <thead>
                            <tr>
                                <th>№ ИБ</th>
                                <th>ФИО</th>
                                <th>Палата</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(({ historyNumber, firstName, lastName, patrName, birthDate, diagnosis, bedNumber }) => (
                                <tr key={historyNumber} onClick={() => this.choosePatient(historyNumber, firstName, lastName, patrName, birthDate, diagnosis)} className={cn({ 'active-patient': (this.state.currentPatient === historyNumber) ? true : false })}>
                                    <td>{historyNumber}</td>
                                    <td>{`${lastName} ${firstName} ${patrName}`}</td>
                                    <td>{bedNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        }

        return renderPresentTable(presentState);
    }
}

export default PresentList;