import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from "./app";
import './index.css'
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
// createRoot.render(<App />, document.getElementById('root'));
