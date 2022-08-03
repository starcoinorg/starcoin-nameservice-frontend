import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";
import "./SearchBar.css";

// 搜地址的时候不加.stc之类的玩意儿默认给你跳到address

export interface SearchBarProps {
  show: boolean;
  fat: boolean;
}

interface SearchBarStates {
  search: string;
  redirect: any;
}

export class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarStates
> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      search: "",
      redirect: null,
    };
  }

  handleChange = (e: any) => {
    this.setState({ search: e.target.value });
  };

  searchFilterAddress = (s: string): boolean => {
    let re = /0[xX][0-9a-fA-F]{40,40}/
    return s.split(re).length > 1
  }

  render() {
    let input_style =
      "block text-lg rounded-l-lg pl-10 px-4 focus:outline-none w-full";
    if (this.props.fat) {
      input_style =
        "block text-lg lg:text-2xl rounded-l-lg pl-10 px-4 focus:outline-none w-full py-4 lg:py-8";
    }
    let button_style =
      " text-xl text-white bg-blue-500 rounded-r-lg w-full shrink px-4 max-w-[30%] lg:max-w-[15%] hover:bg-blue-400 hover:text-slate-100";

    if (this.props.show) {
      return (
        <div className="relative shadow-sm w-[90%] lg:w-[60%] flex rounded-lg text-slate-500">
          <div className="text-lg text-slate-300 absolute inset-y-0 left-0 px-3 flex items-center pointer-events-auto">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="text"
            placeholder="Search names or addresses"
            className={input_style}
            onChange={this.handleChange}
          />
          <AuthContext.Consumer>
            {({ user }) => {
              return (
                <button
                  className={button_style}
                  onClick={() => {
                    if (this.searchFilterAddress(this.state.search)) {
                      console.log("redirect to address: ", this.state.search)
                      this.setState({ redirect: <Navigate to={"/address/"+this.state.search} /> })
                    } else {
                      if (!user) {
                        alert("Please login to search for domains");
                      } else {
                        console.log("redirect to name: ", this.state.search)
                        this.setState({ redirect: <Navigate to={"/"} /> })
                      }
                    }
                  }}
                >
                  Search
                </button>
              );
            }}
          </AuthContext.Consumer>
          {
            this.state.redirect
          }
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
