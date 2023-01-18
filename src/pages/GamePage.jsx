import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'

export const GamePage = () => {
  return (
    <Page>
        <Card />
    </Page>
  )
}


const Page = styled.div`
box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  padding: 0;
  /* background: #c94b4b; 
  background: -webkit-linear-gradient(
    to right,
    #4b134f,
    #c94b4b
  ); 
  background: linear-gradient(
    to right,
    #4b134f,
    #c94b4b
  );  */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`
