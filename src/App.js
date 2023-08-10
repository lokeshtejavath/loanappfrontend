
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import LoginPage from './Login';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
