import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./Pages/Context";
import Createaccount from "./Pages/Createaccount";
import Deposit from "./Pages/Deposit";
import Home from "./Pages/Home";
import Withdraw from "./Pages/Withdraw";
import Navebar from "./Pages/Navbar";
import Alldata from "./Pages/Alldata";
import Login from "./Pages/Login";
function App() {
  return (
    <HashRouter>
      <Navebar />

      <UserContext.Provider
        value={{
          users: [
            {
              username: "Agneesh",
              email: "agneesh@gmail.com",
              age: 21,
              gender: "Male",
              balance: 0,
              password:9900
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/Createaccount" element={<Createaccount />} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
