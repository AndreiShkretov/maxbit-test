type DrinkIngredients = {
  [T in number as `strIngredient${T}`]?: string | null;
};

type DrinkMeasures = {
  [T in number as `strMeasure${T}`]?: string | null;
};

export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  strDrinkThumb: string | null;
  strTags?: string | null;
  strIBA?: string | null;
  strVideo?: string | null;
  strImageSource?: string | null;
  strImageAttribution?: string | null;
  strCreativeCommonsConfirmed?: string | null;
  dateModified?: string | null;
} & DrinkIngredients &
  DrinkMeasures;
