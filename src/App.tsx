import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage, Layout, DoctorsPage } from "./pages";

const App: React.FC = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path={["/", "/main"]} render={() => <MainPage />} />
                <Route exact path={"/doctors"} render={() => <DoctorsPage />} />
            </Switch>
        </Layout>
    );
};

export default App;
