import React, { Component } from "react";
import PresentList from './PresentList';
import QuittingList from './QuittingList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class PatientLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            present: {
                error: null,
                isLoaded: false,
                list: [],
            },
            quitting: {
                error: null,
                isLoaded: false,
                list: [],
            }
        };
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/d5rja')
            .then((response) => response.json())
            .then(
                (response) => {
                    this.setState({ present: { list: response } });
                    this.setState({ present: { isLoaded: true } });
                },
                (error) => {
                    this.setState({ present: { isLoaded: true, error } })
                }
            );
            

        fetch('https://api.myjson.com/bins/d5rja')
            .then((response) => response.json())
            .then(
                (response) => {
                    this.setState({ quitting: { list: response } });
                    this.setState({ quitting: { isLoaded: true } });
                },
                (error) => {
                    this.setState({ quitting: { isLoaded: true, error } })
                }
            );

    }

    render() {
        const { present, quitting } = this.state;

        const renderLinkPresent = (present) => {
            
            if ( present.error || present.isLoaded ) {
                return <Link to="/" className="nav-link"><span className="link-label">Присутствуют(0)</span></Link>
            } else if ( present.isLoaded ) {
                return <Link to="/" className="nav-link"><span className="link-label">Присутствуют(Загрузка данных...)</span></Link>
            } else {
                return <Link to="/" className="nav-link"><span className="link-label">{`Присутствуют(${present.list.length})`}</span></Link>
            }
        }
        
        const renderLinkQuitting = (quitting) => {
            if ( quitting.error || quitting.isLoaded ) {
                return <Link to="/quitting" className="nav-link"><span className="link-label">Выбывшие(5)</span></Link>
            } else if ( quitting.isLoaded ) {
                return <Link to="/" className="nav-link"><span className="link-label">Выбывшие(Загрузка данных...)</span></Link>
            } else {
                return <Link to="/quitting" className="nav-link"><span className="link-label">{`Выбывшие(${quitting.list.length})`}</span></Link>
            }
        }

        return (
            <Router>
                <div className="main">
                    <div className="wrapper">
                        <div className="nav">
                            {renderLinkPresent(present)}
                            {renderLinkQuitting(quitting)}
                        </div>
                        <div className="lists">
                            <Switch>
                                <Route path={"/"} exact>
                                    <PresentList list={present.list} />
                                </Route>
                                <Route path={"/quitting"}>
                                    <QuittingList list={quitting.list} />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default PatientLists;