import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlaceHolder from './eventsPlaceholder.png'


export default class Event extends Component {

    render() {

        const { event } = this.props
        const CardCover = event.picture === "None" ? PlaceHolder : event.picture
        const CardTitle = event.name.slice(0, 30)
        const CardSubtitle = `${event.venue} - ${event.venue_city}`
        const emptyEvent = {
            backgroundColor: '#FF0000'
        }
        const foundEvent = {
            backgroundColor: '#00FFFF'
        }

        return (
            <div className="card-container">
            <MuiThemeProvider>
                <Card className="event">
                    <CardHeader
                        title={CardTitle}
                        subtitle={CardSubtitle}
                        actAsExpander = {true}
                        showExpandableButton = {true}
                        className="card-header"
                        style={CardTitle === "_________" ? emptyEvent : foundEvent}
                    />
                    <CardActions>
                        <FlatButton label='Action1'/>
                        <FlatButton label='Action2'/>
                    </CardActions>
                    <CardText expandable={true}>
                        <span>
                            {event.name}
                        </span>
                        <CardMedia>
                            <img src={CardCover} style={{ height:200, width: 250}} alt="event"/>
                        </CardMedia>

                        <a href={event.event_url}>
                            Event Url
                        </a>
                        <span>
                            Description: {event.description}
                        </span>
                        <span>
                            Time: {event.time}
                        </span>

                    </CardText>

                </Card>
            </MuiThemeProvider>
            </div>
        )
    }

}
