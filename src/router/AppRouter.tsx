import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import store from "../store/index";
import { StoreProvider } from "easy-peasy";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <div className="container">
            <Header />
            <StoreProvider store={store}>
              <Switch>
                <Route component={AddBook} path="/" exact={true} />
                <Route component={EditBook} path="/edit/:id" />
                <Route component={() => <Redirect to="/" />} />
              </Switch>
            </StoreProvider>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
