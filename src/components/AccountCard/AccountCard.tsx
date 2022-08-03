import React from "react";
import { Link, UNSAFE_LocationContext, UNSAFE_NavigationContext } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

export class AccountCard extends React.Component {
    render() {
        return (
            <UNSAFE_NavigationContext.Consumer>
                {(nav) => {
                    return (
                        <UNSAFE_LocationContext.Consumer>
                            {(loc) => {
                                return (
                                    <AuthContext.Consumer>
                                        {({ user, signIn, signOut }) => {
                                            if (user) {
                                                let displayName = user.hash;
                                                if (user.primary_name){
                                                    displayName = user.primary_name.name+"."+user.primary_name.parent;
                                                }
                                                if (displayName.length > 12){
                                                    displayName = displayName.substring(0, 12)+"...";
                                                }
                                                return (
                                                    <div className=" grid grid-flow-col">
                                                        <Link to="/dashboard">
                                                            <img className=" self-center p-2 mx-2 min-h-max rounded-lg hover:scale-125 ease-in duration-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA7ElEQVRYR2NsePjpPwMamDX3HLoQw9ayEAwxSgS8u9ZgaE9LNsIQYxx1II5gHg1BStIfSC9FIYjNcmwZB1uiprZerJmE2pZQ4rlRB4JiYzQEceVYf2ElojLzxrf3iFKHTRHRaRCb5lEHAkNlNARBSWM0DY7mYjyF0GgmoVsmwVafkl09ADUS21QjOopHHYgjOkZDEFc6pXoapCRDUKKX6CimxBJK9I46kJLQA+kd/CEoVXcAY3SL2BxGaeig68dWGTCOOpCEYB4NQRICC6tSrCFI7AgrtTMOscMhRA8BjzoQRyN2NARxZRxi0yAAz8MWIWRCxYIAAAAASUVORK5CYII=" alt="" />
                                                        </Link>
                                                        <div>
                                                            <h2 className="text-white m-1">
                                                                { displayName }
                                                            </h2>
                                                            <h2
                                                                className="btn-thin"
                                                                onClick={() => {
                                                                    signOut(() => {
                                                                        console.log("mock sign out");
                                                                        nav.navigator.replace("/");
                                                                    });
                                                                }}
                                                            >
                                                                Logout
                                                            </h2>
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <h2
                                                        className="btn"
                                                        onClick={() => {
                                                            signIn({hash: "0x0000000000000000000000000000000000000000", network: "main", holdings: []}, () => {
                                                                console.log("mock sign in");
                                                                let from: any = loc.location.pathname || "/";
                                                                nav.navigator.replace(from);
                                                            });
                                                        }}
                                                    >
                                                        Login
                                                    </h2>
                                                );
                                            }
                                        }}
                                    </AuthContext.Consumer>
                                );
                            }}
                        </UNSAFE_LocationContext.Consumer>
                    );
                }}
            </UNSAFE_NavigationContext.Consumer>
        )
    }
}