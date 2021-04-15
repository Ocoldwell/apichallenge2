# Cheapshark API Project

This project was made using React as a challenge to test my ability to use and display data from APIs.
I used the Cheapshark API, to create a web application that gets the cheapest video-game deals from the web.
I've a home-page that shows the top 30 best deals of the day, displaying the store it is from and providing links to the deal.
I also have a page that allows you to search for specific results from the same API.
As an extension I added firebase auth, with a mind to extend the project further by making a forum/messaging board to talk about games.

## Getting Started

Either clone the repository and run in a local server or go to the page [here]()

## Motivation

I made this for a weekly challenge on the Nology.io web development course.
It was also good practice in component/container design patterns, with services that provide data and context passing that data.
This was good practice in using REST APIs, using the data they provide to produce responsive web apps. I wanted to extend this further by incorporating routing and auth,
at the moment it is has a google login setup with private routing to be worked on. I plan to incorporate firestore for a message board to talk about games as practice.

## Build Status

The website is functionally complete and the API is queried and shows information. 
Styling needs work and additional features discussed above to be implemented:

- Firestore + Messaging Board with unique users.
- Styling tweaks as very basic at the moment.
- Private routing to be implemented.
- Add filtering options to search.

## Built with

- React
- Reactstrap
- SASS

## Features

The main functionality of querying the API which is stored into state and is called on mount of pages using useEffect.

```React

const getDeals = () => {
  return fetch(`${API}deals?sortBy=Savings&pageSize=30&onSale`)
          .then((response) => {
          return response.json();
          })
          .then((response) => {
          const dealList = response.map((gameDeal) => gameDeal);
          return dealList;
  })
}

```

## How to Use

Run

## Contributions

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

The code in this project is licensed under MIT license.
