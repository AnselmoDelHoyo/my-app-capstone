import React, { useState } from 'react'
import "../styles/HomePage.css"

export default function HomePage() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <section>
            <header>
                <div class="logo">🍋 LITTLE LEMON</div>
                
                <div class="hamburger" id="hamburger" onClick={toggleMenu}>
                    <img src='.\icons_assets\🦆 icon _hamburger menu_.svg' alt="burguer-menu" />
                </div>

                <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Reservations</a>
                    <a href="#">Order Online</a>
                    <a href="#">Login</a>
                </nav>
            </header>

            <section class="hero">
                <div class="hero-text">
                    <h1><span>Little Lemon</span><br />Chicago</h1>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div class="hero-image">
                    <img src="./icons_assets/restauranfood.jpg" alt="Bruschetta" />
                </div>
            </section>

            <section class="specials">
                <div class="specials-header">
                    <h2>This week's specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div class="cards">
                    <div class="card">
                        <img src="./icons_assets/greek salad.jpg" alt="Greek Salad" />
                        <div class="card-content">
                            <h3>Greek salad <span>$12.99</span></h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a href="#">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>

                    <div class="card">
                        <img src="./icons_assets/bruchetta.svg" alt="Bruschetta" />
                        <div class="card-content">
                            <h3>Bruschetta <span>$5.99</span></h3>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <a href="#">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>

                    <div class="card">
                        <img src="./icons_assets/lemon dessert.jpg" alt="Lemon Dessert" />
                        <div class="card-content">
                            <h3>Lemon Dessert <span>$5.00</span></h3>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a href="#">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
