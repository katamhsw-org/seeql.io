import React from 'react';
import styled from 'styled-components'
import ConnectLogo from '../atoms/ConnectLogo'
import github from '../assets/github.png'
import reddit from '../assets/reddit.png'

const SLogoWrapper =styled.div`
    display: flex;
    flex-direction: row;
    margin: 5% 0
`

const Footer = ()=>{
    return (
        <SLogoWrapper>
            <a href='https://github.com/oslabs-beta/seeql'> <ConnectLogo>{github}</ConnectLogo> </a>
            <a href='https://www.reddit.com/r/SQL/comments/c6adgu/pg_seeql_a_database_visualizer_to_help_you_write/'>
                <ConnectLogo>{reddit}</ConnectLogo>
            </a>
        </SLogoWrapper>
    )
}

export default Footer