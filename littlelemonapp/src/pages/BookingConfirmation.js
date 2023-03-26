import React from "react";

const BookingConfirmation = ({
    name, date, time, guests, occasion = false, table = false, request = false,
}) => {
    return(
    <main>
        <section style={{display: "flex", "flex-direction": "column", gap: "0.5rem"}}>
            <h1>Thank you for booking, {name}!</h1>
            <p>We confirmed that your reservation for {date} at {time} for {guests} {" "}
                {guests === 1 ? "guest": "guests"}.
            </p>
            {occasion && (
            <p>
                We noticed that you want to celebrate {" "}
                {occasion === "birthday" ? "a": "an"} {occasion}. Thank you for your trust in us,
                we will handle your request with high priority!{" "}
            </p>
            )}
            {table && (<p>
                Since you expressed the wish to sit at {table} we will accommodate your request.
            </p>)}
            {request && (<p>
                Our team will consider your message. We will honor your request via sending you an email.
            </p>)}
        </section>
    </main>
    );
}

export default BookingConfirmation;