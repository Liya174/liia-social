import { Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavbarContainer />

            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;
