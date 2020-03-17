import React, { Component } from 'react';

class QuittingList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        return (
            <table className="table-list quitting-table">
                <thead>
                    <tr>
                        <th>№ ИБ</th>
                        <th>ФИО</th>
                        <th>Причина выбытия</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default QuittingList;