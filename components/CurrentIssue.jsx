import Image from "next/legacy/image";
import { FaArrowRight } from "react-icons/fa6";

import { Issued, IssueBody, Line, IssueDesc, ImageLoad, Description } from "@/components/styles/CurrentIssue.styles";

const fetchExecutiveData = async () => {
  try {
    const response = await fetch(
      "https://notices.tcioe.edu.np/api/images/"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const CurrentIssue = async () => {
  
  const executiveData = await fetchExecutiveData();

  return (
    <Issued>
      <h2>Current Issue</h2>
      <Line width={"130px"} />    
        <IssueBody>
        {executiveData.map((verify) => (
          <IssueDesc key={verify.id}>
            {verify.id == 5 ? (
              <ImageLoad>
                <Image src={verify.image} width="320" height="400" />
              </ImageLoad>
            ) : (
              ""
            )}
          </IssueDesc>
          ))}
          <Description>
            <h2>Journal of</h2>
            <h2>Innovations in Engineering Education</h2>
            <p>Volume 5, Issue-1, March 2022</p>
            <a href="/all-issues">View all issues <FaArrowRight /></a>
          </Description>
        </IssueBody>     
    </Issued>
  );
};

export default CurrentIssue;
