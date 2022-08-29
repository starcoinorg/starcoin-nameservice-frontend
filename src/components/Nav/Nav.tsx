import "./Nav.css";

import React from "react";
import { Link } from "react-router-dom";
import { AccountCard } from "../AccountCard/AccountCard";
import { AuthContext } from "../Auth/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export interface NavProps {}

export interface NavStates {
  on_activate_menu: boolean;
}

export class Nav extends React.Component<NavProps, NavStates> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      on_activate_menu: false,
    };
  }
  render() {
    let navs = (
      <>
        <AuthContext.Consumer>
          {({ user }) => {
            if (user) {
              return (
                <>
                  <li className=" hover:text-slate-300">
                    <Link to="/dashboard">DashBoard</Link>
                  </li>
                  <li className=" hover:text-slate-300">
                    <Link to="/">Domains</Link>
                  </li>
                </>
              );
            }
          }}
        </AuthContext.Consumer>

        <li className=" hover:text-slate-300">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-slate-300">
          <Link to="/faq">Faq</Link>
        </li>
        <li className=" hover:text-slate-300">
          <Link to="/about">About</Link>
        </li>
      </>
    );
    return (
      <nav>
        <div className="hidden lg:flex">
          <AccountCard />
        </div>
        <ul className="hidden lg:flex">{navs}</ul>
        <div className="grid grid-flow-row min-w-full lg:hidden">
          <div className=" flex justify-between items-stretch">
            <div
              className=" text-white"
              style={{
                color: this.state.on_activate_menu ? "white" : "transparent",
              }}
              onClick={() => {
                this.setState({ on_activate_menu: false });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className=" text-white">OUR ICON</div>
            <div
              className=" text-white duration-100 hover:scale-110"
              style={{
                rotate: this.state.on_activate_menu ? "90deg" : "0deg",
              }}
              onClick={() => {
                this.setState({
                  on_activate_menu: !this.state.on_activate_menu,
                });
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <div
            className=" p-4"
            style={{
              display: this.state.on_activate_menu ? "block" : "none",
            }}
          >
            <ul className="grid grid-flow-row gap-4">
              <AccountCard />

              {navs}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
