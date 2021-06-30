import React from 'react'
import {Route, Redirect } from 'react-router';


const PrivateRoute = ({childern,...routeProps}) => {
    const profile = false;

    if(!profile){
        return <Redirect to="/signin" />
    }

    return (
        <Route {...routeProps}>
            {childern}
        </Route>
    )
}

export default PrivateRoute