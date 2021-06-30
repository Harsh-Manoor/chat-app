import React from 'react'
import {Route, Redirect } from 'react-router';


const PublicRoute = ({childern,...routeProps}) => {
    const profile = false;

    if(profile){
        return <Redirect to="/" />
    }

    return (
        <Route {...routeProps}>
            {childern}
        </Route>
    )
}

export default PublicRoute