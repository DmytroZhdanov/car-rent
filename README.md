[![Netlify Status](https://api.netlify.com/api/v1/badges/c87712ec-832c-4970-a53f-0fd1690450d3/deploy-status)](https://app.netlify.com/sites/car-rent-zhdanov/deploys)

# Car Rent 🚙

Website where you can find a car to rent.

## Table of content

- [Routing](#routing)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Redux State](#redux-state)
- [Troubleshooting and FAQs](#troubleshooting-and-FAQs)

## Routing

The app uses React Router for navigation. The available routes are:

- `/` - Home Page

<img width="1470" alt="Знімок екрана 2023-11-16 о 15 58 02" src="https://github.com/DmytroZhdanov/car-rent/assets/119117057/f998342e-89ba-4adf-8717-3a8492df5a28">

- `/catalog` - Catalog Page

There is a filter on Catalog page for specifying your preferences.

You can add or remove the advert to/from favorite list which displayed on Favorite page.

By clicking on "Learn more" button you can discover more information about current advert and
contact the agent to rent a car.

<img width="1470" alt="Знімок екрана 2023-11-16 о 15 59 05" src="https://github.com/DmytroZhdanov/car-rent/assets/119117057/8c50a2ab-ef5c-441a-a790-e01913cd0b4a">

- `/favorite` - Favorite Page

Your favorite list is saved when you reload the page for convenient usage.

<img width="1470" alt="Знімок екрана 2023-11-16 о 15 59 41" src="https://github.com/DmytroZhdanov/car-rent/assets/119117057/b48a5915-fa67-42cb-a4bf-f54e3749991a">

If a user tries to access a non-existent route, they will be redirected to the home page.

## Features

Implemented responsiveness and mobile menu for better UI.

Implemented localization with possibility to choose language between English and Ukrainian.  
On first loading language detector tries to detect the browser language and automatically use that
language if such translation provided.  
Selected language is saved when you reload the page for convenient usage.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DmytroZhdanov/car-rent.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser (Note: the port may be
   changed if 5173 port is occupied by another website).
6. To stop your local server enter in CLI: `control` + `C` for Mac or `CNTRL` + `C` for Windows.


Or if you want to use Docker, follow these steps (Note: You must have installed Docker app on your
computer):

1. Open CLI and enter the command:
   ```bash
   docker run -d --rm -p 5173:[port] --name car-rent dmytrozhdanov/car-rent
   ```
3. Open [http://localhost:[port]](http://localhost:[port]) in your browser.
4. To stop your local server enter in CLI:
   ```bash
   docker stop car-rent
   ```
   It will automatically delete the container.
  
   Replace `[port]` with desired port. You may replace it with the same `5173` port if it's not
   occupied currently by another website.

## Technologies Used

- React
- TypeScript
- Redux
- RTK Query
- React Router
- Axios (for API requests)
- Mockapi.io (for mock backend)
- Docker

## API

The application uses a mock API created with [Mockapi.io](https://mockapi.io/). The `adverts`
resource contains information about car listings.

## Redux State

The Redux store manages the state of the application, including user favorites and filters.

## Troubleshooting and FAQs

<dmytro.zhdanov97@gmail.com>
