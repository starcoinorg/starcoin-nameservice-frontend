import React from "react";
import { Navigate, UNSAFE_LocationContext, UNSAFE_NavigationContext } from "react-router-dom";
import { AuthContext } from "../components/Auth/Auth";
import { Nav } from "../components/Nav/Nav";
import { SideNav } from "../components/SideNav/SideNav";


export class DashBoard extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="home">
                <UNSAFE_LocationContext.Consumer>
                    {(loc) => {
                        return (
                            <AuthContext.Consumer>
                                {({ user }) => {
                                    if (user) {
                                        console.log(loc.location.pathname)
                                        let value = 1;
                                        switch (loc.location.pathname) {
                                            case "/dashboard":
                                                value = 1;
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                        return (
                                            <>
                                                <Nav />
                                                <div className="grid grid-flow-col">
                                                    <SideNav activate={value}></SideNav>
                                                    <div></div>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <Navigate to="/" />
                                        )
                                    }
                                }
                                }
                            </AuthContext.Consumer>
                        )
                    }}
                </UNSAFE_LocationContext.Consumer>
            </div>
        )
    }
}