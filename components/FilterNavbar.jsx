"use client";

import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { VscBlank } from "react-icons/vsc";
import Link from "next/link";
import { useState, useEffect } from "react";


const ContainerFull = styled.div`
border-bottom-color: black;
display: flex;
margin-top: 1rem;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
`;

const ContainerLess = styled.div`
position: sticky;
top: 12.3rem;
z-index: 1;
display: none;

@media (max-width: 1000px) {
  display: block;
  background: white;
  width: 91%;
  transform: translate(5%, 0);
}

@media (max-width: 400px) {
  top: 14.1rem;
}
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  min-width: 160px;
  border-radius: 4px;
  padding: 0.5rem;
  color: black;
`;

const DropdownOption = styled.div`
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
    color: green;
  }
`;

const Buttons = styled(DropdownContainer)`
width: 100%;
white-space: nowrap;
padding: 1rem 7rem;
display: flex;
transition: 0.5s ease-in-out;
border-right: 1px solid gray;
justify-content: center;


&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    ${DropdownContent} {
      display: block;
      margin-top: 2rem;
      margin-left: -2rem;
    }
}

@media (max-width: 1500px) {
  padding: 1rem 6rem;
}

@media (max-width: 1320px) {
  padding: 1rem 5rem;
}

@media (max-width: 1170px) {
  padding: 1rem 3rem;
}

@media (max-width: 1000px) {
  display: none;
}
`;

const ButtonShow = styled(DropdownContainer)`
display: flex;
align-items: center;
padding: 1rem 5.29rem;
transition: 0.5s ease-in-out;

&:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    ${DropdownContent} {
      display: block;
    }
}

@media (max-width: 1000px) {
  display: block;
  text-align: center;
}
`;

const Icons = styled.div`
margin-top: 1px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const VolumeLink = styled(CustomLink)`
  display: flex;
  width: 100%;
`;

const ShowMenu = styled.div`
font-size: 1.5rem;
color: white;
padding: 0 1rem;
font-weight: bold;
z-index: 2;

@media (max-width: 1000px) {
  position: fixed;
  top: 2rem;
  right: 0;
}
`;

const FilterNavbar = ({ allArticles }) => {
  const [volumes, setVolumes] = useState([]);
  const [issues, setIssues] = useState({});
  const [showMenu, setShowMenu] = useState([]);

  const toggleShowMenu = (index) => {
    const newShowMenu = [...showMenu];
    newShowMenu[index] = !newShowMenu[index];
    setShowMenu(newShowMenu);
  }

  useEffect(() => {
    if (Array.isArray(allArticles)) {
      const volumesSet = new Set();
      const issuesMap = {};

      allArticles.forEach((article) => {
        volumesSet.add(article.volume);

        if (!issuesMap[article.volume]) {
          issuesMap[article.volume] = new Set();
        }
        issuesMap[article.volume].add(article.number);
      });

      setVolumes(Array.from(volumesSet));
      setIssues(issuesMap);

      // sort the volumes in descending order
      setVolumes(Array.from(volumesSet).sort((a, b) => b - a));

      // sort the issues in ascending order
      Object.keys(issuesMap).forEach((volume) => {
        issuesMap[volume] = Array.from(issuesMap[volume]).sort((a, b) => a - b);
      });

      // initialize the showMenu state to false for each volume
      setShowMenu(Array.from(volumesSet).map(() => false));
    }
  }, [allArticles]);

  return ( 
    <>
      <ContainerFull>
        {volumes.map((volume) => (
          <VolumeLink key={volume} href={`/all-issues/${volume}`}>
            <Buttons>
              Volume {volume}
              <DropdownContent>
                {issues[volume].map((issue) => (
                  <CustomLink key={issue} href={`/all-issues/${volume}/${issue}`}>
                    <DropdownOption>
                      Issue {issue}
                    </DropdownOption>
                  </CustomLink>
                ))}
              </DropdownContent>
            </Buttons>
          </VolumeLink>
        ))}
      </ContainerFull>
      <ContainerLess>
        <ShowMenu onClick={toggleShowMenu}>
          {showMenu.every((menu) => menu) ? <ImCross /> : <FiMenu />}
        </ShowMenu>
        {volumes.map((volume, index) => (
          <ButtonShow key={volume}>
            <CustomLink href={`/all-issues/${volume}`}>
              Volume {volume}
            </CustomLink>
            <DropdownContent style={{ display: showMenu[index] ? "block" : "none" }}>
              {issues[volume].map((issue) => (
                <DropdownOption key={issue}>
                  <CustomLink href={`/all-issues/${volume}/${issue}`}>
                    Issue {issue}
                  </CustomLink>
                </DropdownOption>
              ))}
            </DropdownContent>
          </ButtonShow>
        ))}
      </ContainerLess>
    </>
  );
};

export default FilterNavbar;
