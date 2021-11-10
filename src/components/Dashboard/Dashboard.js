import React from 'react';
import DashBoradLeft from './DashBoardLeft/DashBoradLeft';
import DashBoardRight from './DashBoardRight/DashBoardRight';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <DashBoradLeft></DashBoradLeft>
            </div>
            <div className="col-md-6">
                <DashBoardRight></DashBoardRight>
            </div>
            
        </div>
    );
};

export default Dashboard;