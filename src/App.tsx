import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, Layout, DoctorsPage, AuthPage } from './pages';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <AuthPage />} />
            <Route
                exact
                path={'/main'}
                render={() => (
                    <Layout>
                        <MainPage />
                    </Layout>
                )}
            />
            <Route
                exact
                path={'/doctors'}
                render={() => (
                    <Layout>
                        <DoctorsPage />
                    </Layout>
                )}
            />
        </Switch>
    );
};

export default App;
