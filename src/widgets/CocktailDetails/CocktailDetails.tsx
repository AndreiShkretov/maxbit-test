import { useGetCocktailByNameQuery } from "shared/api/cocktailApi";
import { DrinkCard } from "entities/drink/ui/DrinkCard";
import { Drink } from "entities/drink/model/types";
import { Loader } from "shared/ui/Loader/Loader";

export const CocktailDetails = ({ code }: { code: string }) => {
  const { data, error, isLoading } = useGetCocktailByNameQuery(code);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="cocktail-details">
      {data?.drinks.map((drink: Drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};
