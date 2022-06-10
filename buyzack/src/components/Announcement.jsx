import styled from "@emotion/styled";
import React from "react";

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over &#x20B9;250</Container>
  );
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
