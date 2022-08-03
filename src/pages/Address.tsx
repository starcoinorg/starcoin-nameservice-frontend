import React from "react";
import { Route, UNSAFE_RouteContext } from "react-router-dom";

export class Address extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="home">
                <h1>Address</h1>
                <UNSAFE_RouteContext.Consumer>
                    {(route) => {
                        return (
                            <>
                                {route.matches[0].params.hash}
                            </>
                        )
                    }}
                </UNSAFE_RouteContext.Consumer>
            </div>
        )
    }
}