import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Register from "./Register";

test("Register sahifasi barcha inputlarni ko‘rsatadi", () => {
  render(<Register />);

  expect(
    screen.getByPlaceholderText(/familiyasi/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/ismi/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/email manzil/i)
  ).toBeInTheDocument();

  expect(
    screen.getByPlaceholderText(/parol/i)
  ).toBeInTheDocument();

  // Tugma (UI dagi real matn)
  expect(
    screen.getByRole("button", { name: /register/i })
  ).toBeInTheDocument();
});
