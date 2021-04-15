import React, {useContext, useEffect, useRef} from 'react';
import { DealContext } from '../../context/DealProvider';
import styles from './Input.module.scss';
import {getSearchResults} from "../../services/DealsAPI.service.js"


const Input = () => {
  const {setSearchResults, searchQuery, clearState, setSearchQuery} = useContext(DealContext)
  const searchForm = useRef(null)
  const handleClick = () => {
    const form = searchForm.current
    setSearchQuery(form['searchvalue'].value);
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults(getSearchResults(searchQuery))
  }
  useEffect(() => {
    clearState()
  },[])
  return (
    <div className={styles.input}>
      <form onSubmit = {handleSubmit} innerRef={searchForm}>
        <input type="text" placeholder="search for deals here" className={styles.input__box} name='searchvalue'></input>
        <button type="submit" onClick={handleClick}>Get todays best deals</button>
      </form>
    </div>
  )
}

export default Input
