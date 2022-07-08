import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <Hero />
      <hr />
      {isAuthenticated && (<Content />)}
    </Fragment>
  )
};

export default Home;
