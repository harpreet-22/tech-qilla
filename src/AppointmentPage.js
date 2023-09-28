import React, {useState} from 'react';
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import image1 from './images/Screenshot 2023-09-28 112617.png'
import { Link } from 'react-router-dom';

//let ValuePiece = Date | null;

const AppointmentPage = () => {

  const [value, setValue] = useState(new Date());
  const history = useHistory();

  const handleClose = () => {
    history.push('/');
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const halfLength = Math.ceil(timeSlots.length / 2);
  const column1 = timeSlots.slice(0, halfLength);
  const column2 = timeSlots.slice(halfLength);

  const handleTimeSlotClick = () => {
    console.log('time slot');
  }

  return (
    <div className="appointment-page">
      <div className="close-button" onClick={handleClose}>
        &#10006;
      </div>
      <img className="appointment-logo" src={image1} alt={image1}/>
      <h3>Book an Appointment with TechQilla.</h3>
      <div className='appointment-content'>
        <div className="appointment-calendar">
          <Calendar onChange={setValue} value={value}/>
        </div>
        <div className='appointment-time'>
        <h4>Select a Time:</h4>
          <div className="time-columns">
            <div className="time-column">  
            <ul className='appointment-time-items'>
              {column1.map((slot) => (
                <li key={slot} onClick={() => handleTimeSlotClick(slot)}>
                  {slot}
                </li>
              ))}
            </ul>
            </div>
            <div className="time-column">
            <ul className='appointment-time-items'>
              {column2.map((slot) => (
                <li key={slot} onClick={() => handleTimeSlotClick(slot)}>
                  {slot}
                </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
      </div>
      <Link className="appointment-page-next" to="">Next</Link>
    </div>
  );
};

export default AppointmentPage;