import React, { Component } from 'react';

class PresentList extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler = () => {
        console.log('hi')
    }

    render() {
        const presentState = this.props.presentState;
        
        const renderPresentTable = ({ isLoaded, error, list }) => {
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
                                <th>Палата</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(({ historyNumber, firstName, lastName, bedNumber }) => (
                                <tr key={historyNumber} onClick={this.clickHandler}>
                                    <td>{historyNumber}</td>
                                    <td>{`${firstName} ${lastName}`}</td>
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