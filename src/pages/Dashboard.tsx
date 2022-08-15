import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Auth/Auth";
import { DomainList } from "../components/DomainList/DomainList";
import { Nav } from "../components/Nav/Nav";
import { Notification } from "../components/Notification/Notification";
import { SetPrimaryDomain } from "../components/SetPrimaryDomain/SetPrimaryDomain";
import { SideNav } from "../components/SideNav/SideNav";

export function DashBoard() {
    let loc = useLocation();
    let { user } = React.useContext(AuthContext); 

    console.log(loc.pathname)
    let value = 1;
    let content = null
    switch (loc.pathname) {
        case "/dashboard":
            value = 1;
            if (user) {
                content =
                    <>
                        <div className=" mx-4">

                            <Notification link_to="/" title="some info" text="lorem ipsum sit dolor amet!" />
                            <SetPrimaryDomain />

                        </div>
                        <DomainList enable_checkbox={false} onClick={() => { }} domains={user.holdings} />
                    </>
            } else {
                alert("Please login first!")
                return (
                    <Navigate to="/" />
                )
            }
            break;
        case "/domains":
            value = 2;
            break;
        case "/faq":
            value = 3;
            break;
        case "/about":
            value = 4;
        default:
            break;
    }
    return (
        <div className="home">
            <Nav />
            <div className="flex justify-between my-4">
                <SideNav activate={value}></SideNav>
                <div className="min-w-[100%] lg:min-w-[80%]">
                    {content}
                </div>
            </div>
        </div>
    )

}
