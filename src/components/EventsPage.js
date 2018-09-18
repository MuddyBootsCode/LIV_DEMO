import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'


export default class StoreFront extends Component {
    static propTypes = {
        events: PropTypes.array.isRequired,
        removeEvent: PropTypes.func.isRequired
    }


    render () {

        const { events, removeEvent } = this.props

        return (

            <div className="list-events">
                <div className="list-events-title">
                    <h1>LIV Events</h1>
                </div>
                <div className="list-events-content">
                    {
                        events.map((event) =>{
                            return (
                                <Card key={event.event_url} event={event} removeEvent={removeEvent}/>
                                    )
                        })
                    }
                </div>
            </div>

        )

    }
}
