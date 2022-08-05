import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Auth/Auth";
import { DomainList } from "../components/DomainList/DomainList";
import { Nav } from "../components/Nav/Nav";
import { Notification } from "../components/Notification/Notification";
import { SideNav } from "../components/SideNav/SideNav";
import { mockDomains } from "../data/Domain";

export function DashBoard() {
    let loc = useLocation();
    let {user} = React.useContext(AuthContext);
    if (user) {
        console.log(loc.pathname)
        let value = 1;
        switch (loc.pathname) {
            case "/dashboard":
                value = 1;
                break;
            default:
                break;
        }
        return (
            <div className="home">
                <Nav />
                <div className="flex justify-between my-4">
                    <SideNav activate={value}></SideNav>
                    <div className="min-w-[100%] lg:min-w-[80%]">
                        <div className=" mx-4">

                        <Notification link_to="/" title="some info" text="lorem ipsum sit dolor amet!"/>

                        </div>
                        <DomainList enable_checkbox={false} onClick={()=>{}} domains={mockDomains()}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Navigate to="/" />
        )
    }
}
