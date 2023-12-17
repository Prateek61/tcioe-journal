"use client";

import Navbar from '@/components/Navbar'
import SubNavbar from '@/components/SubNavbar'
import Footer from '@/components/Footer'

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

const ArticleBody = styled.div`
  padding: 1.3rem;
  /* Add more styles for ArticleBody if needed */
`;

const ArticlePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* Add more styles for ArticlePosition if needed */

  @media (max-width: 1115px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    padding: 2rem auto;
  }
`;

const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

const ArticleLists = styled.div`
  /* Add styles for ArticleLists if needed */
`;

const IndividualCard = styled.div`
  padding: 1rem;
  text-align: justify;

  p {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;

    a {
      color: black;
    }
  }

  span {
    font-size: 0.9rem;
    color: #565555;
    /* Add more styles for span if needed */
  }

  blockquote {
    font-size: 14px;
    padding: 0.5rem 0;
    /* Add more styles for blockquote if needed */
  }

  a {
    text-decoration: none;
    /* Add more styles for a if needed */
  }

  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
    /* Add more styles for hover if needed */
  }

  @media (max-width: 770px) {
    text-align: center;
    padding: 1rem 0;
    /* Add more styles for responsive design if needed */
  }
`;

const PDFLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  color: #000;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #f97a00;
  }
`;

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
      <Navbar />
      <SubNavbar />
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

      <Footer />
    </>
  );
};

export default VolumePage;
