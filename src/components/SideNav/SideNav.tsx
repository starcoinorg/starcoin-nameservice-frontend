import React from "react";
import { Link } from "react-router-dom";

interface SideNavProp {
  activate: number;
}

export class SideNav extends React.Component<SideNavProp> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="min-h-[100vh] max-w-[20rem] min-w-[20%] hidden lg:block">
        <ul className="grid grid-flow-row gap-0 mt-20">
          <Link to="/dashboard">
            <li
              className=" rounded-lg m-2 p-4  hover:text-xl ease-in duration-100 text-white"
              style={{
                backgroundColor:
                  this.props.activate == 1 ? "#03f47b" : "#005dff",
                color: this.props.activate == 1 ? "black" : "white",
              }}
            >
              Dashboard
            </li>
          </Link>
          <Link to="/domains">
            <li
              className=" rounded-lg m-2 p-4  hover:text-xl ease-in duration-100 text-white"
              style={{
                backgroundColor:
                  this.props.activate == 2 ? "#03f47b" : "#005dff",
                color: this.props.activate == 2 ? "black" : "white",
              }}
            >
              Domains
            </li>
          </Link>
          <Link to="/faq">
            <li
              className=" rounded-lg m-2 p-4  hover:text-xl ease-in duration-100 text-white"
              style={{
                backgroundColor:
                  this.props.activate == 3 ? "#03f47b" : "#005dff",
                color: this.props.activate == 3 ? "black" : "white",
              }}
            >
              Faq
            </li>
          </Link>
          <Link to="/about">
            <li
              className=" rounded-lg m-2 p-4  hover:text-xl ease-in duration-100 text-white"
              style={{
                backgroundColor:
                  this.props.activate == 4 ? "#03f47b" : "#005dff",
                color: this.props.activate == 4 ? "black" : "white",
              }}
            >
              About Us
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}
