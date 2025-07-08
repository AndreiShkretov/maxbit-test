import React from "react";
import { render, screen } from "@testing-library/react";
import { DrinkCard } from "./DrinkCard";
import { Drink } from "entities/drink/model/types";

const mockDrink: Drink = {
  idDrink: "123",
  strDrink: "Mojito",
  strCategory: "Cocktail",
  strAlcoholic: "Alcoholic",
  strGlass: "Highball glass",
  strInstructions: "Mix and serve.",
  strDrinkThumb: "https://example.com/mojito.jpg",
  strIngredient1: "Rum",
  strMeasure1: "50ml",
  strIngredient2: "Mint",
  strMeasure2: "10 leaves",
};

describe("DrinkCard", () => {
  it("renders cocktail details", () => {
    render(<DrinkCard drink={mockDrink} />);

    expect(screen.getByText("Mojito")).toBeInTheDocument();
    expect(screen.getByText(/Cocktail/)).toBeInTheDocument();
    expect(screen.getByAltText("Mojito")).toBeInTheDocument();
    expect(screen.getByText(/Instructions:/)).toBeInTheDocument();
    expect(screen.getByText(/50ml Rum/)).toBeInTheDocument();
  });
});
