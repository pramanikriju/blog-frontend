import React from "react";
import Card from "./card";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <SimpleGrid minChildWidth="220px" gap="4" spacingX="40px" spacingY="20px">
        {articles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Articles;
