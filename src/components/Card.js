import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlaceHolder from './eventsPlaceholder.png'


export default class Event extends Component {


    render() {

        const { event, removeEvent, selectEvent } = this.props;
        const CardCover = event.picture === "None" ? PlaceHolder : event.picture;
        const CardTitle = event.name.slice(0, 30);
        const CardSubtitle = `${event.venue} - ${event.venue_city}`;
        const emptyEvent = {
            backgroundColor: '#FF0000'
        }
        const foundEvent = {
            backgroundColor: '#00FFFF'
        }
        const chosenEvent = {
            backgroundColor: '#00ff00'
        }

        let cardStyle = foundEvent;

        if (event.title === "_________"){
            cardStyle = emptyEvent
        } else if (event.chosen === true){
            cardStyle = chosenEvent
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
                        style={cardStyle}
                    />
                    <CardActions>
                        <FlatButton label='Remove Event' onClick={() => removeEvent(event)}/>
                        <FlatButton label='Choose Event' onClick={() => selectEvent(event)}/>
                    </CardActions>
                    <CardText expandable={true}>
                        <span>
                            {event.name}
                        </span>
                        <CardMedia>
                            <img className="card-img" src={CardCover}  alt="event"/>
                        </CardMedia>

                        <a href={event.event_url} target="_blank">
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
