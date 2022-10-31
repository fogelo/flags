import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Container} from "./Container";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import { Link } from "react-router-dom";


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--ui-base-color);
`

//Чтобы позиционировать дочерние элементы внутри себя. Отвечает в общем за положение элементов
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  color: var(--text-color);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
  cursor: pointer;
`
const Title = styled(Link).attrs({
    to: "/",
})`
  color: var(--text-color);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
  text-transform: capitalize;
`

const Header = () => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? <IoMoon/> : <IoMoonOutline/>}
                        <span>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;
