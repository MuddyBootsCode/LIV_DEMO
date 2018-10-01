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
        eventsAPI.getAll()
            .then((events) => {
            this.setState({ events })
            })
            .catch(err => console.log(err))
    }

    removeEvent = (event) => {
        this.setState(state => ({
        events: state.events.filter(state => state !== event)
    }));
    };

    selectEvent = (event) => {
        const { events } = this.state
        const index = this.state.events.findIndex(item => item.name === event.name );
        this.setState(state => ({
            state, events: [
                ...events.slice(0, index),
                {...events[index], chosen: true},
                ...events.slice(index + 1)
            ]
        }))
    };


    render() {
    return (
      <div className="App">

        <Route exact path="/" render = {() => (
            <EventsPage events={this.state.events} removeEvent = {this.removeEvent} selectEvent = {this.selectEvent} />
        )}/>

      </div>
    );
  }
}

export default App;
