"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

import { ArticleBody, ArticlePosition, ArticleLists, Line, IndividualCard, PDFLink } from "@/components/ArticleCardStyles";

const VolumePage = () => {
  const [articlesByVolume, setArticlesByVolume] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://notices.tcioe.edu.np/api/journal/articles/"
        );
        const data = await response.json();

        const articlesGroupedByVolume = {};
        data.forEach((article) => {
          const { volume } = article;
          if (!articlesGroupedByVolume[volume]) {
            articlesGroupedByVolume[volume] = [];
          }
          articlesGroupedByVolume[volume].push(article);
        });

        setArticlesByVolume(articlesGroupedByVolume);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ArticleBody>
        {Object.keys(articlesByVolume).map((volume) => (
          <div key={volume}>
            <h2>Volume {volume}</h2>
            <Line width={"70px"} />
            <ArticlePosition>
              {articlesByVolume[volume].map((article) => (
                <ArticleLists key={article.id}>
                  <IndividualCard>
                    <p>
                      <a href={`/articles/${article.id}`}>{article.title}</a>
                    </p>
                    {article.authors.map((author, index) => (
                      // if index is greater than 0, add a comma before the author name
                      index > 0 ? <span key={index}>, {`${author.given_name} ${author.family_name}`}</span> :
                      <span key={index}>{`${author.given_name} ${author.family_name}`}</span>
                    ))}
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
          </div>
        ))}
      </ArticleBody>
    </>
  );
};

export default VolumePage;