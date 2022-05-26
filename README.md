![cover](https://kennethlng.com/images/projects/digiroma/Digiroma%20mock-up%20orange%20bg.png)

Digiroma is a product analytics web portal I developed at Alibaba for viewing and editing product details and visualizing data in interactive charts. The app is used internally, so this is just a mockup of what I worked on as I'm not able to share much about its use case. 

## Installation

1. Clone the repository or download the project to your desktop. 
2. Run `npm install` to install the dependencies.
3. Run `npm start` and open [http://localhost:3000](http://localhost:3000) to view the web page in the browser.

## Stack 

<p>
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> 
    <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
    <img alt="Nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
    <img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
    <img alt="Viserjs" />
    <img alt="Ant Design" />
</p>

## Features

### Live Search

We wanted users to be able to search for products as they type and see results pop up in real-time. I used a timeout to make sure API requests were only sent after the user stopped typing for a brief duration, which otherwise would've resulted in a build-up of requests. For extra measure, axios’ Cancellation feature was used to cancel requests in the event of duplicate requests to the same endpoint.

![live search](https://i.imgur.com/E2o9BIA.gif)

### Role-Based Access Control

Because the product web portal was to be used both internally by our team and externally by our clients, I needed to add restrictions to pages or components on a page. The `Authorization` component checks the component's action (e.g. `read-product-data`) and verifies it against the signed-in user’s permissions. If the user has permission to perform the action based on his or her role, the `Authorization` component renders the `isAuthorized` prop. Otherwise, the `isNotAuthorized` prop is rendered.

```javascript
import React from 'react'; 

const check = (action, permission) => {
    if (action === permission) return true; 

    return false; 
}

const Authorization = props => {
    const { action, permission } = this.props; 

    return check(action, permission) ? props.isAuthorized() : props.isNotAuthorized(); 
}

Authorization.defaultProps = {
    isAuthorized: () => null,
    isNotAuthorized: () => null
}

export default Authorization; 
```

I also added the `ProtectedRoute` from [ReactTraining](https://reacttraining.com/react-router/web/example/auth-workflow) to redirect users to the login page if they weren’t signed in or didn’t have the proper access.

### Data Visualization

[Viser.js]() was used for data visualization. They have a huge library of ready-to-use components for React. It was just a matter of properly mapping over the data.

![data visualization](https://i.imgur.com/s7ypvAs.gif)

## Contact

If you have any issues or questions, message me on [Twitter](https://twitter.com/kennethlng) or email me hello@kennethlng.com.
