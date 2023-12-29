"use client"

import styled from "styled-components"
import Link from "next/link";
import Image from "next/legacy/image"

export const ContainerExecutive = styled.div`
  background: #4b50b8;
  height: 18rem;
  color: white;
  padding: 0 2rem;

  h3 {
    padding: 1.5rem 3rem;
    white-space: nowrap;
  }

  span {
    float: right;
    margin-right: 5rem;
    color: white;
  }

  span:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: grid;

    span {
      padding-bottom: 2rem;
      text-align: right;
    }
  }

  @media (max-width: 500px) {
    height: 28rem;
    padding: 0 rem;
    text-align: center;

    h3 {
      padding: 1.5rem 2rem;
      text-align: center;
    }

    span {
      text-align: right;
      padding-bottom: 0rem;
    }
  }
`;

export const Information = styled.div`
  padding: 0.5rem 5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 500px) {
    display: block;
    margin-top: -3rem;
    padding: 0.5rem 0rem;
  }
`;

export const Photo = styled.div`
  width: 10rem;
  height: 10rem; 
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 500px) {
    margin-top: 2rem;
    transform: translate(50%, 1%);
  }
`;

export const CircularImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Desc = styled.div`
  h4 {
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    white-space: nowrap;
  }
  p {
    font-style: italic;
    white-space: nowrap;
  }

  blockquote {
    padding: 2px 0;
  }

  @media (max-width: 500px) {
    h4 {
      padding-top: 1rem;
    }
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;

  @media (max-width: 500px) {
    span {
      text-align: center;
    }
  }
`;