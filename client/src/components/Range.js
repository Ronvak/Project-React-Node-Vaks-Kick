import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { Form } from "react-bootstrap";

function Range() {
  const [value, setValue] = React.useState(1000);
  const [finalValue, setFinalValue] = React.useState(null);

  return (
    <Form>
      Max price: {value}$ <br></br>
      <RangeSlider
        variant="dark"
        tooltip="off"
        min={0}
        max={1000}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onAfterChange={(e) => setFinalValue(e.target.value)}
      />
    </Form>
  );
}
export default Range;
