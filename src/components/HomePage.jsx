import React, { useState } from 'react';
import '../styles/HomePage.css';
import { Link } from 'react-router'; // ← CORREGIDO

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <section>
            <header>
                <div className="logo">🍋 LITTLE LEMON</div>

                <button
                    className="hamburger"
                    id="hamburger"
                    onClick={toggleMenu}
                    aria-label="burguer-menu"
                >
                    <img
                        src="./icons_assets/hamburguer.svg"
                        alt="burguer-menu"
                    />
                </button>

                <nav className={`nav-links ${menuOpen ? 'show' : ''}`} role="navigation">
                    <Link to="/" role="link">Home</Link>
                    <Link to="/reservations" role="link">Reservations</Link>
                    <a href="/about" role="link">About</a>
                    <a href="/blog" role="link">Menu</a>
                    <a href="/order-online" role="link">Order Online</a>
                    <a href="/login" role="link">Login</a>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-text">
                    <h1>
                        <span>Little Lemon</span>
                        <br />
                        Chicago
                    </h1>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src="./icons_assets/restauranfood.jpg" alt="Bruschetta" />
                </div>
            </section>

            <section className="specials">
                <div className="specials-header">
                    <h2>This week's specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="./icons_assets/greek salad.jpg" alt="Greek Salad" />
                        <div className="card-content">
                            <h3>
                                Greek salad <span>$12.99</span>
                            </h3>
                            <p>
                                The famous greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with
                                crunchy garlic and rosemary croutons.
                            </p>
                            <a href="/order">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="./icons_assets/bruchetta.svg" alt="Bruschetta" />
                        <div className="card-content">
                            <h3>
                                Bruschetta <span>$5.99</span>
                            </h3>
                            <p>
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and
                                olive oil.
                            </p>
                            <a href="/order">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src="./icons_assets/lemon dessert.jpg" alt="Lemon Dessert" />
                        <div className="card-content">
                            <h3>
                                Lemon Dessert <span>$5.00</span>
                            </h3>
                            <p>
                                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as
                                authentic as can be imagined.
                            </p>
                            <a href="/order">Order a delivery 🚴‍♂️</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
