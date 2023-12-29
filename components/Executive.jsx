import { MdOutlineArrowOutward } from "react-icons/md";

import { ContainerExecutive, Information, Photo, Desc, CustomLink, CircularImage } from "./styles/Executive.styles";

const Executive = () => {
  return (
    <>
        <ContainerExecutive>
          <h3>Editor-in-Chief</h3>
          <Information>
            <Photo>
              <CircularImage
                src="https://notices.tcioe.edu.np/media/media/editorial_board/images/Rajkumar.jpg"
                alt="photo"
                width="150"
                height="150"
              />
            </Photo>
            <Desc>
              <h4>Raj Kumar Chaulagain</h4>
              <p>Assistant Campus Chief</p>
              <blockquote>Department of Automobile and Mechanical Engineering</blockquote>
              <blockquote>Thapathali Campus , Tribhuvan University, Nepal</blockquote>
            </Desc>
          </Information>
          <CustomLink href="/editorial-board">
            <span>
              View full editorial board <MdOutlineArrowOutward />
            </span>
          </CustomLink>
        </ContainerExecutive>
    </>
  );
};

export default Executive;