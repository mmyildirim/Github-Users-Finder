import './App.css';
import { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { useState } from 'react';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon='fab fa-github mr-2' title="Github Users Finder" />
            <div className='container'>
              <Alert />
              <Routes>
                <Route exact path='/' element={
                  <>
                    <Search />
                    <Users />
                  </>
                } />
                <Route
                  exact
                  path='/about'
                  element={<About />}
                />
                <Route
                  exact
                  path='/user/:username'
                  element={
                    <User
                    // getUsersRepos={getUserRepos}
                    // repos={repos}
                    />}
                ></Route>
              </Routes>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
