import React, { useContext} from 'react';
import Input from '../Input';
import CardList from '../../containers/CardList';
import { DealContext } from '../../context/DealProvider';


const SearchDeals = () => {
  const {searchQuery} = useContext(DealContext)
  return (
    <React.Fragment >
      <Input />
      {(searchQuery.length > 0) ? <CardList /> : null}
    </React.Fragment>
  )
}

export default SearchDeals
