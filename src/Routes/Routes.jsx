import Home from "../Pages/Home/Home.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import Login from "../Pages/Login/Login.jsx";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Navbar from "../Components/Navbar/Navbar"
import {Route,Switch} from "react-router-dom";
import Explore from "../Pages/Explore/Explore.jsx";
import Profile from "../Pages/Profile/Profile.jsx";
import Tweet from "../Pages/Tweet/Tweet.jsx";

const Routes = () => {
    return(
        <div>
            <Navbar/>
           <Switch>
              <Route exact path={'/'}>
                  <Home/>
              </Route>
              <Route exact path={'/explore'}>
                  <Explore/>
              </Route>
              <Route exact path={'/profile'}>
                  <Profile/>
              </Route>
              <Route exact path={'/signup'}>
                  <Signup/>
              </Route>
               <Route exact path={'/login'}>
                  <Login/>
              </Route>
              <Route>
                  <Tweet/>
              </Route>
              <Route>
                  <PageNotFound/>
              </Route>
           </Switch>
        </div>
    )
}

export default Routes;