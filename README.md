# Dynamic search frontend tutorial

I have been learning react lately, and just completed this tutorial from Fireship.io. This Readme is created to help me check my own learning, and to share my understanding of the code.

## Backend

-This project incldues a simple express.js server to serve data to the front end of the application.

-The Cors NPM package is used to allow for cross-origin HTTP requests. This is needed to make requests to the Chancejs API. Chancejs is used to generate random data for use in toy projects, testing etc. In this case we use it to generate a random list of 250 animals, each with a randomly generated name and age.

-A get request is used to take in user queries from the input field on the front-end. A Array.filter() is then used to find animals from our animal list that include the query string in the animal type.

## Frontend

-The frontend includes an App() react component that includes a simple input field and an unorderd list. The unorderd list is used to display the results after every change to the input field, which is monitored using the onChange attribute.

-In the ul map() is called on the animals array. The animal.id property is passed as a key to the Animal component. This is important in React because it makes it easier to monitor when any list items have been changed, added or removed.

-The ul contains Animal components, each of which returns information about each animal, passed into the function via props.

-The async search function queries the express server and passes the datafrom the input field as a URLSearchParam. When a response is returned it is converted into json and passed to the setAnimals function (which is defined by the useState() hook.)

-Finally the search function takes the search query and passes it to localStorage. This ensures that the most recent search result will be displayed when the page is reloaded.
