import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MenuList } from "./MenuList";
import { cocktailCodes } from "shared/config/cocktailCodes";

const renderWithRouter = (ui: React.ReactElement) =>
  render(ui, { wrapper: BrowserRouter });

describe("MenuList", () => {
  it("renders a list of cocktail links", () => {
    renderWithRouter(<MenuList />);

    cocktailCodes.forEach((code) => {
      const name = code.charAt(0).toUpperCase() + code.slice(1);
      expect(screen.getByText(name)).toBeInTheDocument();

      const link = screen.getByText(name).closest("a");
      expect(link).toHaveAttribute("href", `/${code}`);
    });
  });
});
