import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Login from "./Login";

test("Login sahifasi input va tugmalarni ko‘rsatadi", () => {
  render(<Login />);

  // Login input
  expect(
    screen.getByPlaceholderText(/loginni kiriting/i)
  ).toBeInTheDocument();

  // Parol input
  expect(
    screen.getByPlaceholderText(/parolni kiriting/i)
  ).toBeInTheDocument();

  // Kirish tugmasi
  expect(
    screen.getByRole("button", { name: /kirish/i })
  ).toBeInTheDocument();
});
