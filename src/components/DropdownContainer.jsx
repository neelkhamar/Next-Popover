import React from "react";

import styled from "styled-components";

const DropdownContainer = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  width: "2px";
  flex-direction: column;
  background-color: "#FFF";
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
  padding: 5px;
`;

export default DropdownContainer;
