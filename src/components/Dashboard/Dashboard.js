import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import Review from "../Home/Reviews/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddReview from "./AddReview/AddReview";
import './DashBoard.css'
import EmptyDashBoard from "./EmptyDashBoard";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();
    return (
        <div className="margin-t">
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard text-center">
                            <h3>Dashboard</h3>
                            <div className="text-justify link-container">

                               {
                                   !admin && <> <NavLink to={`${url}/myOrders`}>
                                   <li className="dashboard-menu">My Orders</li>
                               </NavLink>

                               <NavLink to={`${url}/pay`}>
                                   <li className="dashboard-menu">Pay</li>
                               </NavLink>
                               <NavLink to={`${url}/review`}>
                                   <li className="dashboard-menu">Review</li>
                               </NavLink>
                               </>
                               }
                                
                            </div>
                            <div className="admin-dashboard mt-3">
                                {
                                    admin && <>
                                        <Link to={`${url}/makeAdmin`}>
                                            <li className="dashboard-menu">Make Admin</li>
                                        </Link>
                                        <Link to={`${url}/manageAllProducts`}>
                                            <li className="dashboard-menu">Manage All Products</li>
                                        </Link>
                                        <Link to={`${url}/addNewProduct`}>
                                            <li className="dashboard-menu">Add New Product</li>
                                        </Link>

                                    </>

                                }
                                <Link to={`${url}/logOut`}>
                                    <li onClick={logOut} className="dashboard-menu">Logout</li>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <EmptyDashBoard></EmptyDashBoard>
                            </Route>

                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <AddReview></AddReview>
                            </Route>

                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/manageAllProducts`}>
                                <ManageAllProducts></ManageAllProducts>
                            </Route>
                            <Route exact path={`${path}/addNewProduct`}>
                             <AddNewProduct></AddNewProduct>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
