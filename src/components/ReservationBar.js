import React, { useState } from 'react';
import { RiMapPin2Line, RiHotelLine, RiUserLine, RiCalendar2Line } from 'react-icons/ri';

function ReservationBar() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value));
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
  };

  return (
    <div className="bg-white p-4 drop-shadow-md mx-2 py-5 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-items-start items-center gap-">
        <div className="flex items-center ">
          <RiMapPin2Line className="mr-2 " /> 
          <label className='font-semibold'>Location:</label>
          <select value={location} onChange={handleLocationChange} className="p-2 border rounded ">
            <option value=""> béjaia</option>
            {/* Add your location options here */}
          </select>
        </div>
        
        <div className="flex items-center">
          <RiHotelLine className="mr-2 ml-2" /> 
          <label className='font-semibold'> Type de chambre:</label>
          <select value={roomType} onChange={handleRoomTypeChange} className="p-2 border rounded ">
            <option  value="">Standards </option>
            {/* Add your room type options here */}
          </select>
        </div>
        <div className="flex items-center">
          <RiUserLine className="mr-1 ml-2" /> 
          <label className='font-semibold'>Personnes:</label>
          <input
            type="number"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            className="p-2 border rounded-lg w-14  "
          />
        </div>
        <div className="flex items-center">
          <RiCalendar2Line className="mr-2 ml-3" /> 
          <label className='font-semibold ' >Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            className="p-2 border rounded-lg ml-2"
          />
        </div>
        <div className="flex items-center">
          <RiCalendar2Line className="mr-2 ml-2" /> 
          <label className='font-semibold'>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            className="p-2 border rounded-lg ml-2"
          />
        </div>
        <button type="submit" className="bg-beige text-white  font-bold py-2 px-6  rounded-md ml-7 tracking-wider">Réserver</button>
      </form>
    </div>
  );
}

export default ReservationBar;
