import React from "react";
import { Layout } from "widgets/Layout/Layout";
import { CocktailDetails } from "widgets/CocktailDetails/CocktailDetails";

export const CocktailPage = ({ code }: { code: string }) => (
  <Layout>
    <CocktailDetails code={code} />
  </Layout>
);
