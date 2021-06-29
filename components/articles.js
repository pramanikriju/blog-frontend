import React from "react";
import Card from "./card";
import { SimpleGrid } from "@chakra-ui/react";

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <SimpleGrid columns={[1, 3, 3]} gap="4" spacingX="40px" spacingY="20px">
        {articles.map((article, i) => {
          return (
            <Card
              height="100%"
              article={article}
              key={`article__left__${article.slug}`}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Articles;
