import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Review from "../Home/Reviews/Review";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
// import AddServices from "./../AddServices/AddServices";
// import Review from "./../Review/Review";
// import MyBookings from "./../MyBookings/MyBookings";
// import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// import ManageServices from "./../ManageServices/ManageServices";
// import useFirebase from "./../../Hook/useFirebase";
import './DashBoard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();
    //   const [isAdmi, setIsAdmin] = useState(false);

    //   useEffect(() => {
    //     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data[0]?.role === "admin") {
    //           setIsAdmin(true);
    //         } else {
    //           setIsAdmin(false);
    //         }
    //       });
    //   }, [user?.email]);
    //   console.log(isAdmi);
    return (
        <div className="margin-t">
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard text-center">
                            <h3>Dashboard</h3>
                            <div className="text-justify">

                                <Link to={`${url}/myOrders`}>
                                    <p className="dashboard-menu">My Orders</p>
                                </Link>

                                <Link to={`${url}/pay`}>
                                    <p className="dashboard-menu">Pay</p>
                                </Link>
                                <Link to={`${url}/review`}>
                                    <p className="dashboard-menu">Review</p>
                                </Link>
                                <Link to={`${url}/pay`}>
                                    <p className="dashboard-menu">Logout</p>
                                </Link>
                            </div>
                            <div className="admin-dashboard">
                                <li className="dashboard-menu mt-5">Log Out</li>

                                {/* {isAdmi && (
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )} */}
                                <Link to={`${url}/makeAdmin`}>
                                    <li className="dashboard-menu">Make Admin</li>
                                </Link>
                                <Link to={`${url}/manageServices`}>
                                    <li className="dashboard-menu">Manage Service</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            {/* <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route> */}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
