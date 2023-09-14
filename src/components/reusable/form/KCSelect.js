import React from "react";
import Select from "react-select";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import styles from "./styles/KCSelectStyles";

function KCSelect(props) {
  const theme = useTheme();

  const customStyles = {
    dropdownIndicator: (styles) => ({
      ...styles,
    }),
    container: (styles) => ({
      ...styles,
      width: props.width ?? "100%",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Roboto",
      ":hover": {
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: "Roboto",
    }),
    control: (base, state) => ({
      ...base,
      color: props.color ?? "",
      backgroundColor: props.backgroundColor ?? "#F8F8F8",
      height: props.height ?? "52px",
      borderRadius: props.radius ?? "10px",
      padding: "0 20px",
      // Overwrittes the different states of border
      borderColor: props.borderColor,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
    }),
    placeholder: (base) => ({
      ...base,
      fontWeight: 400,
      fontFamily: "Roboto",
      p: "14px 14px 14px 5px",
    }),
    menu: (style) => ({
      ...style,
    }),
  };

  return (
    <div style={styles.container}>
      {props.label && (
        <Typography mb={theme.spacing(1)}>{props.label}</Typography>
      )}
      <Select
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        options={props.options ?? []}
        isMulti={props.isMulti}
        styles={customStyles}
        isClearable={true}
        isSearchable={true}
        isDisabled={props.isDisabled}
      ></Select>
    </div>
  );
}

export default KCSelect;
