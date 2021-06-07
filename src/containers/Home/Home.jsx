import React, {useContext, useEffect} from 'react';
import CardList from "../CardList/";
import {DealContext} from "../../context/DealProvider.js"


const Home = () => {
  const { clearState } = useContext(DealContext);
  useEffect(() =>{
    clearState()
  },[])

  return (
    <div>
      <CardList />
    </div>
  )
}

export default Home
