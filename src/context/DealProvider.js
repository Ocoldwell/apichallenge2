import React, { createContext, useEffect, useState } from "react";
import {
  getDeals,
  getStores,
  getSearchResults,
} from "../services/DealsAPI.service.js";
export const DealContext = createContext({});
const DealProvider = (props) => {
  //Context state
  const [deals, setDeals] = useState([]);
  const [stores, setStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //Function to clear state on mount.
  const clearState = () => {
    setSearchQuery("");
    setSearchResults([]);
  };
  const cleanStores = (stores) => {
    return stores.map(store => {
      return {
        storeID: store.storeID,
        storeName: store.storeName,
        images: store.images
      }
   })
  }

  // 1. On mount, get the stores and deals to provide to the consumers
  useEffect(() => {
    getStores().then((response) => {
      setStores(cleanStores(response));
    });
    getDeals().then((response) => {
      setDeals(response);
    });
  }, []);

  // 2. When the searchQuery changes, as a side effect, change the searchResults
  useEffect(() => {
    if (searchQuery.length === 0) {
      return;
    }
    getSearchResults(searchQuery).then((response) => {
      setSearchResults(response);
    });
  }, [searchQuery]);

  return (
    <DealContext.Provider
      value={{
        deals,
        stores,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        cleanStores,
        clearState
      }}
    >
      {props.children}
    </DealContext.Provider>
  );
};

export default DealProvider;
