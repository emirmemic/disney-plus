import React from "react";
import {auth} from ".//firebase"
import "./App.css";
import Header from ".//components/Header";
import Home from ".//components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserEmail } from "./features/user/userSlice";

function App() {

  const userEmail = useSelector(selectUserEmail)
  function ProtectedRoute({ component: Component, ...restOfProps }) {
    let email = useSelector(selectUserEmail)
  
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          email ? <Component {...props} /> : <Redirect to="/disney-plus/login" />
        }
      />
    );
  }
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
         
         <Route path="/disney-plus/login" component={Login}/>
         <ProtectedRoute path="/disney-plus/detail/:id" component={Detail} />
         <ProtectedRoute path="/disney-plus/" component={Home} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
