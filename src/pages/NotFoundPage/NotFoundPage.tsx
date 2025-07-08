import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Коктейль не найден</p>
      <button className="not-found__button" onClick={goHome}>
        На главную
      </button>
    </div>
  );
};
