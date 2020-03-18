import React, { Component } from 'react';

class QuittingList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const quittingState = this.props.quittingState;
        
        const renderQuittingTable = ({ isLoaded, error, list }) => {
            if (error) {
                return (
                    <div></div>
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
                                <th>Причина выбытия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(({ historyNumber, firstName, lastName, cause }) => (
                                <tr key={historyNumber}>
                                    <td>{historyNumber}</td>
                                    <td>{`${firstName} ${lastName}`}</td>
                                    <td>{cause}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        }
        return renderQuittingTable(quittingState);
    }
}

export default QuittingList;