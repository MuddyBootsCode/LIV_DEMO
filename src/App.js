import React, { Component } from 'react';
import './App.css';
import * as eventsAPI from './api.js'
import { Route } from 'react-router-dom'
import EventsPage from './components/EventsPage'


class App extends Component {

  state = {
    events: []
  }


    componentDidMount() {
        eventsAPI.getAll().then((events) => {
            console.log(events)
            this.setState({ events })
        })
    }


  render() {
    return (
      <div className="App">

        <Route exact path="/" render = {() => (
            <EventsPage events={this.state.events}/>
        )}/>

      </div>
    );
  }
}

export default App;
