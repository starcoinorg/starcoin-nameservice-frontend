import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

export function AccountCard() {
    let nav = useNavigate();
    let loc = useLocation();
    let { user, signIn, signOut } = React.useContext(AuthContext);
    if (user) {
        let displayName = user.hash;
        if (user.primary_name) {
            displayName = user.primary_name.name + "." + user.primary_name.parent;
        }
        if (displayName.length > 12) {
            displayName = displayName.substring(0, 12) + "...";
        }
        return (
            <div className=" grid grid-flow-col">
                <Link to="/dashboard">
                    <img className=" self-center p-2 mx-2 min-h-max rounded-lg hover:scale-125 ease-in duration-300" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAA7ElEQVRYR2NsePjpPwMamDX3HLoQw9ayEAwxSgS8u9ZgaE9LNsIQYxx1II5gHg1BStIfSC9FIYjNcmwZB1uiprZerJmE2pZQ4rlRB4JiYzQEceVYf2ElojLzxrf3iFKHTRHRaRCb5lEHAkNlNARBSWM0DY7mYjyF0GgmoVsmwVafkl09ADUS21QjOopHHYgjOkZDEFc6pXoapCRDUKKX6CimxBJK9I46kJLQA+kd/CEoVXcAY3SL2BxGaeig68dWGTCOOpCEYB4NQRICC6tSrCFI7AgrtTMOscMhRA8BjzoQRyN2NARxZRxi0yAAz8MWIWRCxYIAAAAASUVORK5CYII=" alt="" />
                </Link>
                <div>
                    <h2 className="text-white m-1">
                        {displayName}
                    </h2>
                    <h2
                        className="btn-thin"
                        onClick={() => {
                            signOut(() => {
                                console.log("mock sign out");
                                nav("/");
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
                    signIn({ hash: "0x0000000000000000000000000000000000000000", network: "main", holdings: [] }, () => {
                        console.log("mock sign in");
                        let from: any = loc.pathname || "/";
                        nav(from);
                    });
                }}
            >
                Login
            </h2>
        );
    }
}
