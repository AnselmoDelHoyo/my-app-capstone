import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../api";
import "../styles/ReservationPage.css";

export default function ReservationPage() {
    const today = new Date().toISOString().split("T")[0];

    const [date, setDate] = useState(today);
    const [times, setTimes] = useState(["No options"]);
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const availableTimes = fetchAPI(date) || [];
        setTimes(availableTimes);
        setTime(""); // reset time when date changes
    }, [date]);

    const validate = () => {
        const newErrors = {};
        const selectedDate = new Date(date);
        const todayDate = new Date();
        todayDate.setHours(0,0,0,0); // Ignorar horas

        if (!date || selectedDate < todayDate) {
            newErrors.date = "Please choose a valid future date.";
        }

        if (!time) {
            newErrors.time = "Please select a time.";
        }

        if (guests < 1 || guests > 10) {
            newErrors.guests = "Guests must be between 1 and 10.";
        }

        if (!occasion) {
            newErrors.occasion = "Please select an occasion.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (validate()) {
            const formData = { date, time, guests, occasion };
            const success = submitAPI(formData);

            if (success) {
                setSuccessMessage("🎉 Reservation submitted successfully!");
                setDate(today);
                setGuests(1);
                setOccasion("Birthday");
                setTime("");
            } else {
                alert("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="reservation-container">
            <section className="reservation-section">
                <h2>Reserve a Table</h2>
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    {errors.date && <span className="error">{errors.date}</span>}

                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="">-- Select a time --</option>
                        {(times || []).map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                    {errors.time && <span className="error">{errors.time}</span>}

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        min="1"
                        max="10"
                    />
                    {errors.guests && <span className="error">{errors.guests}</span>}

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {errors.occasion && <span className="error">{errors.occasion}</span>}

                    <input type="submit" value="Make Your Reservation" />
                </form>

                {successMessage && <p className="success">{successMessage}</p>}
            </section>
        </div>
    );
}
