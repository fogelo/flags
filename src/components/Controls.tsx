import React, {FC, useEffect, useState} from "react";
import Search from "./Search";
import CustomSelect from "./CustomSelect";
import styled from "styled-components";

const options = [
    {value: "Africa", label: "Africa"},
    {value: "Asia", label: "Asia"},
    {value: "America", label: "America"},
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Controls: FC<any> = ({onSearch}) => {

    const [search, setSearch] = useState<any>("")
    const [region, setRegion] = useState<any>("")

    useEffect(() => {
        console.log(region)
        const regionValue = region.value || ""
        onSearch(search, regionValue)
    }, [region, search])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder={"Filter by Region"}
                          isClearable
                          isSearchable={false}
                          value={region}
                // @ts-ignore
                          onChange={setRegion}
            />
        </Wrapper>
    );
};

export default Controls;
