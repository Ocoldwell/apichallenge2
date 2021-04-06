import React, { useContext} from 'react';
import Input from '../Input';
import CardList from '../../containers/CardList';
import { DealContext } from '../../context/DealProvider';
const SearchDeals = () => {
  const {searchQuery} = useContext(DealContext)
  return (
    <div>
      <Input />
    {(searchQuery.length > 0) ? <CardList /> : null}
    </div>
  )
}

export default SearchDeals
