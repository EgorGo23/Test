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
                isLoaded: false,
                error: null,
                list: [],
            },
            quitting: {
                isLoaded: false,
                error: null,
                list: [],
            }
        };
    }

    componentDidMount() {
        const urls  = [
            'https://api.myjson.com/bins/v37na',
            'https://api.myjson.com/bins/wa2uu',
        ];

        let requests = urls.map((url) => fetch(url));
        
        Promise.all([
            fetch('https://api.myjson.com/bins/v37na')
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            present: {
                                isLoaded: true,
                                list: result,
                            }
                        })
                    },

                    (error) => {
                        this.setState({
                            present: {
                                isLoaded: true,
                                error,
                            }
                        })
                    }
                ),
            fetch('https://api.myjson.com/bins/wa2uu')
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            quitting: {
                                isLoaded: true,
                                list: result,
                            }
                        })
                    },
    
                    (error) => {
                        this.setState({
                            quitting: {
                                isLoaded: true,
                                error,
                            }
                        })
                    }
                )
        ])



        // fetch('https://api.myjson.com/bins/v37na')
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 present: {
        //                     isLoaded: true,
        //                     list: result,
        //                 }
        //             })
        //         },

        //         (error) => {
        //             this.setState({
        //                 present: {
        //                     isLoaded: true,
        //                     error,
        //                 }
        //             })
        //         }
        //     )

        // fetch('https://api.myjson.com/bins/wa2uu')
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 quitting: {
        //                     isLoaded: true,
        //                     list: result,
        //                 }
        //             })
        //         },

        //         (error) => {
        //             this.setState({
        //                 quitting: {
        //                     isLoaded: true,
        //                     error,
        //                 }
        //             })
        //         }
        //     )
    }

    render() {
        const { present, quitting } = this.state;

        const renderLinkPresent = (present) => {
            if(present.error) {
                return <Link to="/" className="nav-link"><span className="link-label">Присутствуют()</span></Link>
            } else if (!present.isLoaded) {
                return <Link to="/" className="nav-link"><span className="link-label">Присутствуют(...Загрузка)</span></Link>
            } else {
                return <Link to="/" className="nav-link"><span className="link-label">{`Присутствуют(${present.list.length})`}</span></Link>
            }
        }
        
        const renderLinkQuitting = (quitting) => {
            if(quitting.error) {
                return <Link to="/quitting" className="nav-link"><span className="link-label">Выбывшие()</span></Link>
            } else if (!quitting.isLoaded) {
                return <Link to="/quitting" className="nav-link"><span className="link-label">Выбывшие(...Загрузка)</span></Link>
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
                                    <PresentList presentState={present} />
                                </Route>
                                <Route path={"/quitting"}>
                                    <QuittingList quittingState={quitting} />
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