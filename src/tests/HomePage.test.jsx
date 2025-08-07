// src/tests/HomePage.test.jsx

import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router'; // Usa react-router-dom en lugar de react-router
import HomePage from '../components/HomePage';

// Función para renderizar HomePage con el router
const renderHomePage = () =>
    render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
    );

describe('HomePage', () => {
    it('renders the logo correctly', () => {
        renderHomePage();
        expect(screen.getByText(/🍋 LITTLE LEMON/i)).toBeInTheDocument();
    });

    it('renders the hero section with heading and paragraph', () => {
        renderHomePage();
        expect(screen.getByRole('heading', { name: /Little Lemon/i })).toBeInTheDocument();
        expect(
            screen.getByText(/We are a family owned Mediterranean restaurant/i)
        ).toBeInTheDocument();
    });

    it('renders the specials section with 3 cards', () => {
        renderHomePage();
        const cards = screen.getAllByRole('img');
        expect(cards.length).toBeGreaterThanOrEqual(3); // Assumes cards have <img>
    });

    it('toggles the mobile menu when hamburger is clicked', () => {
        renderHomePage();
        const hamburger = screen.getByRole('button', { name: /burguer-menu/i });
        expect(hamburger).toBeInTheDocument();

        const nav = screen.getByRole('navigation');
        expect(nav).not.toHaveClass('show'); // menu should be closed initially

        fireEvent.click(hamburger);
        expect(nav).toHaveClass('show');

        fireEvent.click(hamburger);
        expect(nav).not.toHaveClass('show');
    });

    it('contains navigation links', () => {
        renderHomePage();
        expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Reservations/i })).toBeInTheDocument();
    });

    it('renders the "Reserve a Table" button in the hero section', () => {
        renderHomePage();
        expect(screen.getByRole('button', { name: /Reserve a Table/i })).toBeInTheDocument();
    });
});
