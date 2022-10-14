import React from "react";
import Select, { components } from "react-select";
import SVG from "react-inlinesvg";

const Filter = ({ id, options, selected, onChange, label, placeholder }) => {
  const customStyles = {
    placeholder: (provided, state) => ({
      ...provided,
      color: "#666",
      textTransform: "uppercase",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #5536fd",
      borderRadius: "0",
      background: "transparent",
      padding: "0.8rem 0.5rem 0.5rem",
      maxHeight: "55px",

      "&:hover": {
        borderColor: "#5536fd",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <SVG
          className="indicator"
          src="/modules/custom/motional_greenhouse/app/build/images/icons/chevron.svg"
          title="Search"
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className={`filters__${id}`}>
      <label id={`${id}-label`} htmlFor={`${id}-select`}>
        {label}
      </label>
      <Select
        id={`${id}-select`}
        styles={customStyles}
        aria-labelledby={`${id}-label`}
        name="office"
        options={options}
        isClearable
        isSearchable={false}
        onChange={onChange}
        placeholder={placeholder}
        components={{ DropdownIndicator }}
        value={options?.filter(
          (option) => option?.value?.toString() === selected?.toString()
        )}
      />
    </div>
  );
};

export default Filter;
