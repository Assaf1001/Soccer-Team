import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/layout/Header";
import TeamsPage from "./pages/TeamsPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./styles/css/styles.css";
import TeamsContextProvider from "./context/TeamsContext";

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <TeamsContextProvider>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/teams" />
          </Route>

          <Route path="/teams" component={TeamsPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </TeamsContextProvider>
    </BrowserRouter>
  </>
);

export default App;
