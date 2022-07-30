import React from "react";
import { AuthContext } from "../Auth/Auth";
import "./SearchBar.css";

export interface SearchBarProps {
  show: boolean;
  fat: boolean;
}

interface SearchBarStates {
  search: string;
}

export class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarStates
> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleChange = (e: any) => {
    this.setState({ search: e.target.value });
  };
  render() {
    let input_style =
      "block text-lg rounded-l-lg pl-10 px-4 focus:outline-none w-full";
    if (this.props.fat) {
      input_style =
        "block text-2xl rounded-l-lg pl-10 px-4 focus:outline-none w-full py-8";
    }
    let button_style =
      " text-xl text-white bg-blue-500 rounded-r-lg w-full shrink px-4 max-w-[15%] hover:bg-blue-400 hover:text-slate-100";

    if (this.props.show) {
      return (
        <div className="relative shadow-sm w-[60%] flex rounded-lg text-slate-500">
          <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-auto">
            <img
              className=""
              src="https://app.ens.domains/static/media/search.2ee17ae44bdbcc5216f19e7de8ce3a40.svg"
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="Search names or addresses"
            className={input_style}
            onChange={this.handleChange}
          />
          <AuthContext.Consumer>
            {({ user, signIn, signOut }) => {
              return (
                <button
                  className={button_style}
                  onClick={() => {
                    if (!user) {
                      alert("Please login to search");
                    } else {
                      console.log(this.state.search);
                    }
                  }}
                >
                  Search
                </button>
              );
            }}
          </AuthContext.Consumer>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
