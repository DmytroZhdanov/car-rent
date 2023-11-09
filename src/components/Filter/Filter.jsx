import Select from "react-select";
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

// import sprite from "assets/sprite/sprite.svg";

const brandOptions = [
  { value: "", label: "- - Select a car brand", selected: true },
  { value: "buick", label: "buick" },
  { value: "volvo", label: "volvo" },
  { value: "hummer", label: "hummer" },
  { value: "subaru", label: "subaru" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "nissan", label: "nissan" },
  { value: "lincoln", label: "lincoln" },
  { value: "gmc", label: "gmc" },
  { value: "hyundai", label: "hyundai" },
  { value: "buick2", label: "buick2" },
  { value: "volvo2", label: "volvo2" },
  { value: "hummer2", label: "hummer2" },
  { value: "subaru2", label: "subaru2" },
  { value: "mitsubishi2", label: "mitsubishi2" },
  { value: "nissan2", label: "nissan2" },
  { value: "lincoln2", label: "lincoln2" },
  { value: "gmc2", label: "gmc2" },
  { value: "hyundai2", label: "hyundai2" },
];

const priceOptions = [
  { value: "", label: "- -" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
  { value: "70", label: "70" },
  { value: "80", label: "80" },
  { value: "90", label: "90" },
  { value: "100", label: "100" },
  { value: "110", label: "110" },
];

export default function Filter() {
  return (
    <Form>
      <WrapperDiv>
        <Label htmlFor="carBrand">Car brand</Label>
        <Select
          id="carBrand"
          options={brandOptions}
          styles={styles}
          placeholder="- - Select car brand"
        />
      </WrapperDiv>

      <WrapperDiv>
        <Label htmlFor="price">Price per 1 hour</Label>
        <Select id="price" options={priceOptions} styles={styles} placeholder="" />
      </WrapperDiv>

      <WrapperDiv>
        <Label htmlFor="from to">Car milage, km</Label>

        <InputWrapperDiv>
          <FromInputDiv>
            <FromInput type="number" id="from" />
          </FromInputDiv>

          <ToInputDiv>
            <ToInput type="number" id="to" />
          </ToInputDiv>
        </InputWrapperDiv>
      </WrapperDiv>

      <Button>Search</Button>
    </Form>
  );
}

const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    display: "flex",
    flexWrap: "nowrap",
    gap: "8px",
    minWidth: state.selectProps.id === "carBrand" ? "224px" : "125px",
    height: "48px",
    padding: state.selectProps.id === "carBrand" ? "14px 18px" : "14px 18px 14px 52px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#F7F7FB",

    "&::before": {
      content: state.selectProps.id === "price" ? "'To $'" : "''",
      position: "absolute",
      left: "20px",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: `${20 / 18}`,
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ padding: "0" }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    width: "100%",
    color: "#121417",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: `${20 / 18}`,
    padding: "0",
  }),
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
    fontWeight: "500",
    lineHeight: `${20 / 16}`,
    cursor: "pointer",
    padding: "4px 0",

    "&:hover": {
      color: "#121417",
    },
  }),
};
