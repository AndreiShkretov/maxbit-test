import { Navigate, Route, Routes } from "react-router-dom";
import { cocktailCodes } from "shared/config/cocktailCodes";
import { CocktailPage } from "pages/CocktailPage/CocktailPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";

export const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={<Navigate to={`/${cocktailCodes[0]}`} replace />}
    />
    {cocktailCodes.map((code) => (
      <Route
        key={code}
        path={`/${code}`}
        element={<CocktailPage code={code} />}
      />
    ))}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
