import React from "react";
import Select from "react-select"
import styled from "styled-components";

//В работе со styled components мы можем оборачивать стилями не только базовые html элементы. Мы так же можем брать готовый компонент.
// Это делается вот так (оборачиваем готовый компонент Select из библиотеки react-select):

const CustomSelect = styled(Select).attrs({
    styles: {
        //control - стили для панели с выбранным элементов
        control: (provided) => ({
            ...provided,
            backgroundColor: "var(--ui-base-color)",
            color: "var(--text-color)",
            padding: "0.25rem",
            border: "none",
            boxShadow: "var(--shadow)",
            height: "50px"
        }),
        //option - стили для опций
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "var(--bg-color)" : "var(--text-color)",
            backgroundColor: state.isSelected ? "var(--bg-color)" : "var(--ui-base-color)"
        })
    }
})`

  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--text-color) !important;
  }

  div[id] {
    background-color: var(--ui-base-color);
  }
`


export default CustomSelect;
