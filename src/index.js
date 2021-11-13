import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Importing React router
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from "./Components/theme";


ReactDOM.render(
<ThemeProvider theme={theme}>
<Router>
<App />
</Router>
</ThemeProvider>
, document.getElementById("root"));
