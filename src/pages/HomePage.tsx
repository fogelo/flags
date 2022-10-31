import React, {FC, useEffect, useState} from "react";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const HomePage: FC<any> = ({countries, setCountries}) => {
    console.log(countries)
    const [filteredCountries, setFilteredCountries] = useState<any>([])
    console.log(filteredCountries)
    const navigate = useNavigate()

    const handleSearch = (search: any, region: any) => {
        let data = [...countries]
        console.log(countries)
        if (region) {
            data = data.filter(c => c.region.includes(region))
        }
        if (search) {
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    useEffect(() => {
        // if (!countries.length) {
            axios.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region").then(({data}) => {
                setCountries(data)
            })
        // }
    }, [])

    return (
        <div>
            <Controls onSearch={handleSearch}/>
            <List>
                {
                    filteredCountries.map((c: any, i: any) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name.common,
                            info: [
                                {
                                    title: "Population",
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: c.region.toLocaleString()
                                },
                                {
                                    title: "Capital",
                                    description: c.capital.toLocaleString()
                                },
                            ]
                        }
                        return (
                            <Card key={i} {...countryInfo} onClick={() => navigate(`/country/${countryInfo.name}`)}/>
                        )
                    })
                }
            </List>
        </div>
    );
};

export default HomePage;
