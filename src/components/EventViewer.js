import React from 'react';
import Header from './Header'
import './../css/EventViewer.css'
import EventList from './EventList'
import EventInfo from './EventInfo'


class EventViewer extends React.Component {

    render() {
        return (
            <div className="EventViewer">
                <Header />
                <div className="MainBox">
                    <EventList />
                    <EventInfo />
                </div>
            </div>
        );
    }

}


export default EventViewer;
