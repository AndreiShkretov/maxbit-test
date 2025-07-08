import React from "react";
import { Drink } from "../model/types";
import "./DrinkCard.scss";

export const DrinkCard = ({ drink }: { drink: Drink }) => (
  <div className="drink-card">
    <div className="drink-card__content">
      <div className="drink-card__info">
        <h2>{drink.strDrink}</h2>
        <p>
          {drink.strCategory} | {drink.strAlcoholic}
        </p>
        <p>
          <strong>Glass:</strong> {drink.strGlass}
        </p>
        <p>
          <strong>Instructions:</strong> {drink.strInstructions}
        </p>
        <ul>
          {[...Array(15)].map((_, i) => {
            const ing = drink[`strIngredient${i + 1}`];
            const measure = drink[`strMeasure${i + 1}`];
            return ing ? (
              <li key={i}>
                {measure} {ing}
              </li>
            ) : null;
          })}
        </ul>
      </div>
      <div className="drink-card__image-wrapper">
        {drink.strDrinkThumb && (
          <img
            className="drink-card__image"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            loading="lazy"
          />
        )}
      </div>
    </div>
  </div>
);
