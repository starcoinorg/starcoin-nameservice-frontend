import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Random } from "mockjs";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MockUser } from "../../data/user";
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
          <img
            className=" self-center p-2 mx-2 min-h-max rounded-lg hover:scale-125 ease-in duration-300"
            src={Random.dataImage("50x50", user.hash)}
            alt=""
          />
          <div className=" text-white lg:text-center text-sm">
            <FontAwesomeIcon
              icon={faCircleNodes}
              className="mr-1 text-blue-400"
            />
            {user.network}
          </div>
        </Link>
        <div className=" pt-[0.5rem]">
          <h2 className="text-white m-1">{displayName}</h2>
          <h2
            className="btn-thin"
            onClick={() => {
              signOut(() => {
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
          signIn((user) => {
            // console.log("mock sign in");
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
