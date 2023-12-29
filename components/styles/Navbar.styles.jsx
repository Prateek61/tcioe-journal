"use client"

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  background: #444aca;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  margin-bottom: -2rem;
  z-index: 1;

  @media (max-width: 1000px) {
      display: grid;
      margin-bottom: 0rem;
    }
`;

export const Flexbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
    padding: 1rem;
`;

export const Logo = styled.div`
  width: 70px;
  height: 85px;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiniSubtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #f7f4f4;
`;

export const Subtitle = styled("h2")`
  font-size: 16px;
  font-weight: 400;
  color: #f7f4f4;
`;

export const Title = styled("h1")`
  font-size: 16px;
  font-weight: 700;
  color: #f7f4f4;

  @media (max-width: 760px) {
    font-weight: 500;
  }
`;

export const TitleHeader = styled.div`
  text-align: center;
  padding-top: 2.2rem;
  color: #f7f4f4;

  span {
    border: 2px solid transparent;
    padding: 0.3rem 0.3rem;
    background: #f97a00;
    border-radius: 0.2rem;
    font-weight: bold;
    color: white;
  }

  h2 {
    padding-top: 0.8rem;
    color: white;
  }

  @media (max-width: 1000px) {
    margin-top: -2rem;
    margin-bottom: 1rem;
  }
`;

export const UNumber = styled.div`
  padding: 3rem 0;
  font-weight: bold;
  color: #f7f4f4;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;