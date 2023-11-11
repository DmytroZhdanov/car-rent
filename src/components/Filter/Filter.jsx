import { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

import PriceControl from "components/PriceControl/PriceControl";
import DropdownIndicator from "components/DropdownIndicator/DropdownIndicator";
import {
  Button,
  Form,
  FromInput,
  FromInputDiv,
  InputWrapperDiv,
  Label,
  ToInput,
  ToInputDiv,
  WrapperDiv,
} from "./Filter.styled";

import makers from "utils/makers";

const brandOptions = [
  { value: null, label: "- - Select a car brand", selected: true },
  ...makers.map(maker => ({ value: maker, label: maker })),
];

const definePricesOptions = (min, max) => {
  let pricesOptions = [{ value: null, label: "- -" }];

  for (let i = min; i <= max; i += 10) {
    pricesOptions.push({ value: `$${i}`, label: i });
  }

  return pricesOptions;
};

export default function Filter({ setFilter, setPage }) {
  const [inputMake, setInputMake] = useState(null);
  const [inputPrice, setInputPrice] = useState(null);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");

  const handleFilterSubmit = e => {
    e.preventDefault();

    const filter = {
      make: inputMake,
      price: inputPrice,
      mileage: {
        from: inputFrom,
        to: inputTo,
      },
    };

    setPage(1);
    setFilter(filter);
  };

  return (
    <Form onSubmit={handleFilterSubmit}>
      <WrapperDiv>
        <Label htmlFor="carBrand">Car brand</Label>
        <Select
          id="carBrand"
          options={brandOptions}
          defaultValue={brandOptions[0]}
          styles={styles}
          onChange={option => setInputMake(option.value)}
          components={{ DropdownIndicator }}
        />
      </WrapperDiv>

      <WrapperDiv>
        <Label htmlFor="price">Price per 1 hour</Label>
        <Select
          id="price"
          options={definePricesOptions(30, 500)}
          defaultValue={definePricesOptions(30, 500)[0]}
          styles={styles}
          onChange={option => setInputPrice(option.value)}
          components={{ Control: PriceControl, DropdownIndicator }}
        />
      </WrapperDiv>

      <WrapperDiv>
        <Label htmlFor="from to">Car milage, km</Label>

        <InputWrapperDiv>
          <FromInputDiv>
            <FromInput
              type="number"
              id="from"
              value={inputFrom}
              onChange={({ target }) => setInputFrom(target.value)}
            />
          </FromInputDiv>

          <ToInputDiv>
            <ToInput
              type="number"
              id="to"
              value={inputTo}
              onChange={({ target }) => setInputTo(target.value)}
            />
          </ToInputDiv>
        </InputWrapperDiv>
      </WrapperDiv>

      <Button>Search</Button>
    </Form>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    display: "flex",
    flexWrap: "nowrap",
    width: state.selectProps.id === "carBrand" ? "242px" : "136px",
    height: "48px",
    padding: "14px 18px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (_, state) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "0",

    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    transition: "transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    width: "100%",
    padding: "0",
  }),
  singleValue: () => ({ color: "#121417" }),
  placeholder: () => ({}),
  input: () => ({ display: "none" }),
  menu: baseStyles => ({
    ...baseStyles,
    zIndex: "3",
    marginTop: "4px",
    padding: "14px 8px 14px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
  }),
  menuList: (_, state) => ({
    marginTop: 0,
    height: state.selectProps.id === "carBrand" ? "272px" : "188px",
    overflowY: "auto",
  }),
  option: () => ({
    color: "rgba(18, 20, 23, 0.20)",
    lineHeight: `${20 / 16}`,
    cursor: "pointer",
    padding: "4px 0",

    "&:hover": {
      color: "#121417",
    },
  }),
};
