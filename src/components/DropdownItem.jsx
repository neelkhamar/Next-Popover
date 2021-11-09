import React from "react";

import styled from "styled-components";

const DropdownItem = styled.div`
  justify-content: flex-start;
  height: 40px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;

  &:hover {
    background-color: #00ffff;
  }
  &:active {
    font-weight: 700;
    color: #00ffff;
  }
`;

export default DropdownItem;
