import React from 'react';
import styled from 'styled-components'
import Header from './molecules/Header'
import Main from './molecules/Main'
import Footer from './molecules/Footer'
import SidePanel from './atoms/sidepanel'
import dataScreenShot from './assets/Visualize.png'
import loginScreenShot from './assets/login.png'


const SAppWrapper = styled.div`
 font-family: 'Poiret One', cursive;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  background: #f1f1f1 
`
const SLeftWrapper =styled.div`
  display: flex;
  flex-direction: column;
  width: 45%  
  `

const SRightWrapper =styled.div`
    width: 55%
    display: flex;
    background: #fafafa
    flex-direction: column;
    align-items: center;
    justify-content: center;
    object-fit: contain;
 
 `
 

function App() {
  return (
    <SAppWrapper className="App">
      <SLeftWrapper className='leftDiv'> 
        <SidePanel>{loginScreenShot}</SidePanel>
        <SidePanel>{dataScreenShot}</SidePanel>
      </SLeftWrapper>
      <SRightWrapper className = 'rightDiv'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </SRightWrapper>

    </SAppWrapper>
  );
}

export default App;
