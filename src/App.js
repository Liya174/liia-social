import React from "react";
import { compose } from "redux";
import store from "./redux/redux-store";
import {
    initializeApp,
    gotGlobalError,
    deleteGlobalError,
} from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import {
    HashRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";

import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";

import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import Preloader from "./Components/common/Preloader/Preloader";
import Error from "./Components/Error/Error";

const ProfileContainer = React.lazy(() =>
    import("./Components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
    import("./Components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
    import("./Components/Users/UsersContainer")
);

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", (e) =>
            this.props.gotGlobalError(e.reason)
        );
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", (e) =>
            gotGlobalError(e.promise)
        );
    }

    render() {
        if (!this.props.initialized) return <Preloader />;

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />

                <div className="app-wrapper-content">
                    {this.props.globalError && (
                        <Error
                            errorMessage={this.props.globalError}
                            deleteGlobalError={this.props.deleteGlobalError}
                        />
                    )}
                    <React.Suspense fallback={<Preloader />}>
                        <Switch>
                            <Route
                                path="/profile/:userId?"
                                render={() => <ProfileContainer />}
                            />
                            <Route
                                path="/dialogs"
                                render={() => <DialogsContainer />}
                            />
                            <Route path="/news" render={() => <News />} />
                            <Route path="/music" render={() => <Music />} />
                            <Route
                                path="/users"
                                render={() => <UsersContainer />}
                            />
                            <Route
                                path="/settings"
                                render={() => <Settings />}
                            />
                            <Route path="/login" render={() => <Login />} />
                            <Redirect exact from="/" to="/profile" />
                            <Route
                                path="*"
                                render={() => <div>404 NOT FOUND</div>}
                            />
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    globalError: state.app.globalError,
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp,
        gotGlobalError,
        deleteGlobalError,
    })
)(App);

const SamiraiJSApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
};

export default SamiraiJSApp;
