import { Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
    const { state, dispatch } = props;
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar navbarPage={state.navbarPage} />

            <div className="app-wrapper-content">
                <Route
                    path="/profile"
                    render={() => <Profile store={props.store} />}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs
                            dialogsPage={state.dialogsPage}
                            dispatch={dispatch}
                        />
                    )}
                />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;
