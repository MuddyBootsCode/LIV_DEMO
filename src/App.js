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
        const index = this.state.events.findIndex(item => item.event_url === event.event_url );
        this.setState(prevState => {
            const updatedEvents = [...prevState.events]
            const event = updatedEvents[index]
            event.chosen = !event.chosen;
            updatedEvents[index] = event
            return {events: updatedEvents}
        })
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
