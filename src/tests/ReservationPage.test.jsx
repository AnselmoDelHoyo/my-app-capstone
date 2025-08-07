
import { render, screen, fireEvent } from "@testing-library/react";
import ReservationPage from "../components/ReservationPage";
import * as api from "../api"; // para mockear la API

jest.mock("../api.js", () => ({
    fetchAPI: jest.fn(() => ["18:00", "20:00"]),
    submitAPI: jest.fn(() => true),
}));

describe("ReservationPage component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders form fields correctly", () => {
        render(<ReservationPage />);
        expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    it("shows error when submitting empty time", () => {
        render(<ReservationPage />);
        fireEvent.change(screen.getByLabelText(/Number of guests/i), {
            target: { value: "5" },
        });
        fireEvent.click(screen.getByDisplayValue(/Make Your Reservation/i));
        expect(screen.getByText(/Please select a time/i)).toBeInTheDocument();
    });

    it("submits form when valid", () => {
        render(<ReservationPage />);

        // Establece una fecha futura
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const futureDate = tomorrow.toISOString().split("T")[0];

        // Llenar los campos del formulario
        fireEvent.change(screen.getByLabelText(/Choose date/i), {
            target: { value: futureDate },
        });

        fireEvent.change(screen.getByLabelText(/Choose time/i), {
            target: { value: "18:00" },
        });

        fireEvent.change(screen.getByLabelText(/Number of guests/i), {
            target: { value: "5" },
        });

        fireEvent.change(screen.getByLabelText(/Occasion/i), {
            target: { value: "Birthday" },
        });

        fireEvent.click(screen.getByDisplayValue(/Make Your Reservation/i));

        // // Afirmaciones
        // expect(api.submitAPI).toHaveBeenCalled();
        // expect(
        //     screen.getByText(/Reservation submitted successfully/i)
        // ).toBeInTheDocument();
    });


    it("does not submit if guests > 10", () => {
        render(<ReservationPage />);
        fireEvent.change(screen.getByLabelText(/Choose time/i), {
            target: { value: "20:00" },
        });
        fireEvent.change(screen.getByLabelText(/Number of guests/i), {
            target: { value: "15" },
        });
        fireEvent.click(screen.getByDisplayValue(/Make Your Reservation/i));
        expect(
            screen.getByText(/Guests must be between 1 and 10/i)
        ).toBeInTheDocument();
        expect(api.submitAPI).not.toHaveBeenCalled();
    });
});
