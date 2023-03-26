import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// test to see whether booking form renders correctly
test("Renders the reservation form", () => {
  render(<BookingForm/>);
  const submit = screen.getByText("Make Reservation");
  expect(submit).toBeInTheDocument();
})

test("Updates date correctly", () =>{
  render(<BookingForm/>);
  const dateSelect = screen.getByLabelText(/Pick a date/);
  fireEvent.change(dateSelect, {target: {value: "2023-03-26"}});
})