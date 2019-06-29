import React from 'react'
import Logo from '../atoms/Logo'
import styled from 'styled-components'
import SeeqlLogo from '../assets/seeqllogo.png'


const SLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 5% 0 0 0
    width:25%;
`

const Header =()=>{
    return(
        <SLogoWrapper>
            <Logo>{SeeqlLogo}</Logo>
        </SLogoWrapper>
    )
}
export default Header