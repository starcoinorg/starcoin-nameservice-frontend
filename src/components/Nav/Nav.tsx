import "./Nav.css";

import React, { useLayoutEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  Link,
  Router,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Auth/Auth";

export interface NavProps {}

export interface NavStates {
  scrollPosition: number;
}

export class Nav extends React.Component<NavProps, NavStates> {
  render() {
    return (
      <nav className="sticky top-0 bg-transparent z-50">
        <UNSAFE_NavigationContext.Consumer>
          {(nav) => {
            return (
              <UNSAFE_LocationContext.Consumer>
                {(loc) => {
                  return (
                    <AuthContext.Consumer>
                      {({ user, signIn, signOut }) => {
                        if (user) {
                          return (
                            <div>
                              <h2 className="text-white m-1">
                                login as: {user}
                              </h2>
                              <h2
                                className="btn"
                                onClick={() => {
                                  signOut(() => {
                                    console.log("mock sign out");
                                    let state: any = loc.location.state;
                                    let from = state?.from?.pathname || "/";
                                    nav.navigator.replace(from);
                                  });
                                }}
                              >
                                Logout
                              </h2>
                            </div>
                          );
                        } else {
                          return (
                            <h2
                              className="btn"
                              onClick={() => {
                                signIn("0x00000000", () => {
                                  console.log("mock sign in");
                                  let state: any = loc.location.state;
                                  let from = state?.from?.pathname || "/";
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

        <SearchBar show={false} fat={false} />
        <ul>
          <li className=" hover:text-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-slate-300">
            <Link to="/">Favourite</Link>
          </li>
          <li className=" hover:text-slate-300">
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
