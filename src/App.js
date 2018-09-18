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
            this.setState({ events })
        })
    }

    removeEvent = (event) => {
        this.setState(state => ({
        events: state.events.filter(state => state !== event)
    }));
        console.log(this.state.events)
    };


  render() {
    return (
      <div className="App">

        <Route exact path="/" render = {() => (
            <EventsPage events={this.state.events} removeEvent = {this.removeEvent}/>
        )}/>

      </div>
    );
  }
}

export default App;
