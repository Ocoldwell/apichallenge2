import React, {useContext, useEffect} from 'react';
import Header from "../../components/Header";
import CardList from "../CardList/";
import {DealContext} from "../../context/DealProvider.js"


const Home = () => {
  const { clearState } = useContext(DealContext);
  useEffect(() =>{
    clearState()
  },[])

  return (
    <div>
      <Header />
      <CardList />
    </div>
  )
}

export default Home
