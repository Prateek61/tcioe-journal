"use client";

import styled from "styled-components";

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
  }

  blockquote {
    font-size: 14px;
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
  }

  @media (max-width: 770px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

const SingleArticleComponent = ({ article }) => {
  return (
    <></>
  );
};