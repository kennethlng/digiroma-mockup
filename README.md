![cover](https://kennethlng.com/images/projects/digiroma/Digiroma%20mock-up%20orange%20bg.png)

Digiroma is a product web portal I developed at Alibaba for viewing and editing product details and visualizing data in interactive charts.

## Installation

1. Clone the repository or download the project to your desktop. 
2. Run `npm install` to install the dependencies.
3. Run `npm start` and open [http://localhost:3000](http://localhost:3000) to view the web page in the browser.

## Stack 

* React
* [Ant Design](https://ant.design)
* [axios](https://github.com/axios/axios)
* [viser.js](https://viserjs.github.io)

## Features

### Live Search

We wanted users to be able to search for products as they type and see results pop up in real-time. I used A timeout was included so that API requests were only sent after the user stopped typing for a brief duration. Otherwise, it resulted in a build-up of requests. For extra measure, axios’ Cancellation feature was used to cancel requests in the event of duplicate requests to the same endpoint.

![live search](https://i.imgur.com/E2o9BIA.gif)
