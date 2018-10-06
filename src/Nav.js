import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Buy from './Buy'
import Sell from './Sell'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export const Nav = () => (
  <Router>
    <div className="flex flex-row">
      <div className="w-1/4 h-screen bg-indigo-darker">
        <Link className="text-4xl font-bold text-white no-underline" to="/">
          <p className="mb-6 text-left pl-6 py-3 bg-white text-indigo-darker">
            PBR
          </p>
        </Link>
        <Link className="text-xl text-indigo-lighter hover:text-white no-underline" to="/">
          <p className="py-6 hover:bg-indigo-dark text-left pl-6">
            Dashboard
            </p>
        </Link>
        <Link className="text-xl text-indigo-lighter hover:text-white no-underline" to="/profile">
          <p className="py-6 hover:bg-indigo-dark text-left pl-6">
            Profile
            </p>
        </Link>
        <Link className="text-xl text-indigo-lighter hover:text-white no-underline" to="/buy">
          <p className="py-6 hover:bg-indigo-dark text-left pl-6">
            Buy
            </p>
        </Link>
        <Link className="text-xl text-indigo-lighter hover:text-white no-underline" to="/sell">
          <p className="py-6 hover:bg-indigo-dark text-left pl-6">
            Sell
            </p>
        </Link>
      </div>

      <div className="w-3/4 bg-indigo-darkest">
        <Route exact path="/" component={Home} />
        <Route path="/buy" component={Buy} />
        <Route path="/sell" component={Sell} />
      </div>
    </div>
  </Router>
);