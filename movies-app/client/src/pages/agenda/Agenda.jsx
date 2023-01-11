// https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/about-big-calendar--page
// https://codesandbox.io/s/l9jwl0kj6m?file=/index.js:405-428
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Container from 'react-bootstrap/esm/Container';
import styles from './agenda.module.css'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [
    {
        id : 0,
        title : "Teste",
        allDay : true,
        start : '2022-10-05T03:00:00.000Z',
        end : '2022-10-06T03:00:00.000Z',
    },
    {
        id : 0,
        title : "Evento longo!",
        allDay : true,
        start : '2022-10-06T03:00:00.000Z',
        end : '2022-10-07T09:00:00.000Z',
    }
]

const MyCalendar = (props) => (

    <prontuiario-agenda>
        <Container fluid>
            <div className={styles.overall} style={{ height: 800 }}>
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        </Container>
    </prontuiario-agenda>
)

export default MyCalendar;