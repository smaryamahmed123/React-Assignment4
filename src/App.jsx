import { useState } from 'react'
import './App.css'
import DrawerAppBar from './Components/Header'

import Footer from './Components/Footer'
import {BasicButtons1, BasicButtons2, BasicButtons3} from './Components/Buttons'
// import BasicCard from './Components/Cards'
import { Card1,OutlinedCard, SimplePaper, Variants, BasicCard, Paper1, Card2} from './Components/Cards'
import Js from './assets/Js.svg'
import Figma from './assets/Figma.png';
import Ts from './assets/Ts.svg'
import ControlledAccordions from './Components/According'


const Image = {
  JS: Js,
  TS: Ts,
  FIGMA: Figma
}



function App() {

  return (
    <>
    
      <DrawerAppBar />
      <Paper1 />
     <Card1 />
     <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
     <SimplePaper />
     <Variants />
     </div>
     <div style={{textAlign:'center'}}>
      <p>
        <strong>PROFESSIONAL KIT</strong>
      </p>
      <h1>For Designer</h1>
      <BasicButtons3  btnText="Figma Workspace" />
     </div>
     <div style={{textAlign:'center'}}>
      <p>
        <strong>PRICING PLANS</strong>
      </p>
        <h1>The Right Plan</h1>
        <h1>For Your Business</h1>
        <p>Choose the perfect plan for your needs. Always flexible to grow</p>
     </div>
     <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
     <BasicCard cardName='STANDARD' price='$59' Image={Js} />
     <BasicCard cardName='PLUS' price='$99'  Image={Ts} />
     <BasicCard cardName='EXTENDED' price='$249 '  Image={Figma}  />
     </div>
     <div style={{margin: '100px 20px 100px 20px', }}>
     <ControlledAccordions />
     </div>
     <OutlinedCard />
     <Card2 />
     <Footer />
    </>
  )
}

export default App
