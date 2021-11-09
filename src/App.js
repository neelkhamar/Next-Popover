import React, { useState } from "react";
import { usePopper } from "react-popper";

import DropdownContainer from "./components/DropdownContainer";
import DropdownItem from "./components/DropdownItem";

function Dropdown(props) {
  const [visible, setVisibility] = useState(false);

  const [referenceRef, setReferenceRef] = useState(null);
  const [popperRef, setPopperRef] = useState(null);

  const { styles, attributes } = usePopper(referenceRef, popperRef, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 10]
        }
      }
    ]
  });

  function handleDropdownClick(event) {
    setVisibility(!visible);
  }

  return (
    <React.Fragment>
      <button ref={setReferenceRef} onClick={handleDropdownClick}>
        Click Me
      </button>
      <div ref={setPopperRef} style={styles.popper} {...attributes.popper}>
        <DropdownContainer style={styles.offset} visible={visible}>
          <DropdownItem>Element</DropdownItem>
          <DropdownItem>Element</DropdownItem>
          <DropdownItem>Element</DropdownItem>
        </DropdownContainer>
      </div>
    </React.Fragment>
  );
}

export default Dropdown;
