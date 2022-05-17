import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from "@components/App.jsx";
import App from '@components/App';
import "@styles/globals.scss";

const container = ReactDOM.createRoot(document.getElementById('app'));
container.render(<App />);