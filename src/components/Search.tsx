import React, {FC} from "react";
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";


const InputContainer = styled.label`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;

  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country"
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--bg-color);
  color: var(--text-color);
`;


const Search: FC<any> = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch/>
            <Input value={search} onChange={e => setSearch(e.currentTarget.value)}/>
        </InputContainer>
    );
};

export default Search;
