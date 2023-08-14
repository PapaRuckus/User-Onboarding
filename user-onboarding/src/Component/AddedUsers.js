import React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const Box = styled.div`
  /* color: red;
 border: 2px solid black;
 width: 400px;
 margin: auto;
 margin-top: 2px; */
`;

export default function AddedUsers(props) {
  const { people } = props;
  return (
    <>
      <h2>Add the users here</h2>
      <Box>
        {people.map((user, idx) => (
          <div key={idx} className="user-card">
            <span>{user.fname}</span>&nbsp;
            <span>{user.lname},</span>&nbsp;
            <span>{user.email}</span>&nbsp;
          </div>
        ))}
      </Box>
    </>
  );
}
