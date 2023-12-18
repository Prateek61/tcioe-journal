"use client";

import React, { useState, useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { ArticleBody, ArticlePosition, ArticleLists, Line, IndividualCard, PDFLink } from "@/components/ArticleCardStyles";

const Page = ({ params }) => {
  const [articles, setArticles] = useState([]);
  const { volume, issue } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all articles
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const allArticles = await response.json();

        // Check if volume and issue exist in parameters
        if (volume && issue) {
          // Filter articles by both volume and issue
          const filteredArticles = allArticles.filter(
            (article) => article.volume.toString() === volume && article.number === parseInt(issue)
          );
          setArticles(filteredArticles);
        } else if (volume) {
          // Filter articles by volume only
          const filteredArticles = allArticles.filter(
            (article) => article.volume.toString() === volume
          );
          setArticles(filteredArticles);
        } else {
          // Set all articles if no filters are applied
          setArticles(allArticles);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [volume, issue]);

  return (
    <>
      <ArticleBody>
        <h2>Volume {volume}</h2>
        {issue && <h3>Issue {issue}</h3>}
        <Line width={"70px"} />
        <ArticlePosition>
          {articles?.map((article) => (
            <ArticleLists key={article.id}>
              <IndividualCard>
                <p>
                  <a href={`/articles/${article.id}`}>{article.title}</a>
                </p>
                <span>{`${article.authors[0].given_name} ${article.authors[0].family_name}`}</span>
                <blockquote>{article.date_published}</blockquote>
                <PDFLink
                  href={`https://nepjol.info/index.php/jiee/article/view/${article.url_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegFilePdf /> View PDF
                </PDFLink>
              </IndividualCard>
            </ArticleLists>
          ))}
        </ArticlePosition>
      </ArticleBody>
    </>
  );
};

export default Page;
