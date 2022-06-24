import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export default () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
