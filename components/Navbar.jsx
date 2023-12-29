import logo from "@/assets/logo.svg";
import Image from "next/legacy/image";

import { Container, Flexbox, Logo, TextContainer, MiniSubtitle, Subtitle, Title, TitleHeader, UNumber, CustomLink } from "@/components/styles/Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <CustomLink href="https://tcioe.edu.np/">
        <Flexbox>
          <Logo>
            <Image src={logo} layout="fill" objectFit="contain" alt="" />
          </Logo>
          <TextContainer>
            <MiniSubtitle>Tribhuvan University</MiniSubtitle>
            <Subtitle>Institute of Engineering</Subtitle>
            <Title>Thapathali Campus</Title>
          </TextContainer>
        </Flexbox>
      </CustomLink>
      
      <TitleHeader>
      <CustomLink href="/">
        <span>Journal of</span>
        <h2>Innovations in Engineering Education</h2>
        </CustomLink>
      </TitleHeader>
      
      <UNumber>
        <p>ISSN 2594-343X</p>
      </UNumber>
    </Container>
  );
};

export default Navbar;
