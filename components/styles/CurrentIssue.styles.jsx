"use client"

import styled from "styled-components";

export const Issued = styled.div`
  padding: 1.3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 90rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const IssueBody = styled.div`
  background-color: #F1F1F1;
  display: flex;
  gap: 1.6rem;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    gap: 0.5rem;
  }

  @media (max-width: 900px) {
    display: block;
    text-align: center;
    padding-top: 1rem;
  }
`;

export const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
  margin: 5px 0;
`;

export const IssueDesc = styled.div`

`;

export const ImageLoad = styled.div``;

export const Description = styled.div`
  align-self: center;

  p {
    color: #616373;
    font-size: 1.3rem;
    padding: 0.3rem 0 0.5rem 0;
  }

  a {
    text-decoration: none;
    font-size: 1.1rem;

    svg {
      vertical-align: middle; 
    }
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }
`;