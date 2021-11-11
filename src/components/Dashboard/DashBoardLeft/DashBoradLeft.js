import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboardleft.css'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import MyOrders from '../../MyOrders/MyOrders';


const DashBoradLeft = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="dashboard-left">
      <div>
        <Link to="/dashBoard">DashBoard</Link>
        <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>
      </div>
    </div>
  );
};

export default DashBoradLeft;