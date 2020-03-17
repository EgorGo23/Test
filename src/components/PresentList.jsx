import React, { Component } from 'react';

class PresentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;

        const renderBodyTable = (props) => {
            if (list) {
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
                            {list.map(({ historyNumber, firstName, lastName, patrName, birthDate, diagnosis, bednumber }) => (
                                <tr key={historyNumber}>
                                    <td>{historyNumber}</td>
                                    <td>{`${firstName} ${lastName}`}</td>
                                    <td>{bednumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            } else { 
                return (
                    <div className="load">
                        ...Загрузка
                    </div>
                )
            }
        }

        return renderBodyTable(list);
    }
}

export default PresentList;