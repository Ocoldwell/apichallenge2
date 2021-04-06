const API = 'https://www.cheapshark.com/api/1.0/'

export const getDeals = () => {
  return fetch(`${API}deals?sortBy=Savings&pageSize=30&onSale`)
          .then((response) => {
          return response.json();
          })
          .then((response) => {
          const dealList = response.map((gameDeal) => gameDeal);
          return dealList;
  })
}

export const getStores = () => {
  return fetch(`${API}stores`)
          .then((response) => response.json())
          .then((response) => {
            const infoStore = response.filter((store) => store.isActive);
            let stores = infoStore.map((store) => {
              store[store.storeID] = store.images;
              return store;
            });
            return stores;
          });
  }

 export const getSearchResults = (searchQuery) => {
    return fetch(
              `${API}deals?title=${searchQuery}&sortBySavings&onSale&exact`
            ).then((response) => {
              return response.json();
            })
            .then((response) => {
              const searchList = response.map((gameDeal) => gameDeal);
              return searchList;
            });
  };
