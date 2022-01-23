import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
<<<<<<< HEAD
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <InputNumber max={30} onChange={this.handleChange} name="value" value={this.state.value} />;
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

test("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
=======
   state = {
      value: "",
   };

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   render() {
      return <InputNumber max={30} onChange={this.handleChange} name="value" value={this.state.value} />;
   }
}

const setup = () => {
   const { container } = render(<TestInput />);
   const input = container.querySelector(`input.form-control[name='value']`);

   return {
      input,
   };
};

test("Should able to change value", () => {
   const { input } = setup();

   fireEvent.change(input, { target: { value: 23 } });
   expect(input.value).toBe("23");
});

test("Should not be able to change when reach max value", () => {
   const { input } = setup();

   fireEvent.change(input, { target: { value: 33 } });
   expect(input.value).toBe("");
>>>>>>> 855b2d90c94081d9aeafb7f73823f009ce300b03
});
