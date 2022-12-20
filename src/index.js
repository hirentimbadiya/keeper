import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />);


// add it above the dependancies in package.json
// "homepage": "https://hirentimbadiya.github.io/keeper/",

// add it in scrips in package.json
// "predeploy" : "npm run build",
// "deploy" : "gh-pages -d build"