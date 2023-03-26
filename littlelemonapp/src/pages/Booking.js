import React from "react";
import { useNavigate } from "react-router-dom";
import Restaurant from "../assets/restaurant_inside.jpg"
import BookingForm from "../components/BookingForm";
import './Booking.css'


const Booking = () =>{
    const navigate = useNavigate();
    return(
    <main className="booking-page">
        <h1>Booking a Table</h1>
        <section>
            <img src={Restaurant} alt="Our indoor view" style={{borderRadius: "8px", width: "65%"}}/>
        </section>
        <section>
            <BookingForm navigate={navigate}/>
        </section>
    </main>);
}

export default Booking;