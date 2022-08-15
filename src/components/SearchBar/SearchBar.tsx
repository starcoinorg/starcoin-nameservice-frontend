import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/Auth";
import "./SearchBar.css";

// 搜地址的时候不加.stc之类的玩意儿默认给你跳到address

export interface SearchBarProps {
}

interface SearchBarStates {
  search: string;
}

export function SearchBar(props: SearchBarProps) {
  let [state, setState] = React.useState<SearchBarStates>({ search: "" });
  let searchFilterAddress = (s: string): boolean => {
    let re = /0[xX][0-9a-fA-F]{40,40}/
    return s.split(re).length > 1
  }
  let { user } = React.useContext(AuthContext);
  let nav = useNavigate()
  let search = () => {
    if (searchFilterAddress(state.search)) {
      console.log("redirect to address: ", state.search)
      setState({ search: state.search })
      nav("/address/" + state.search)
    } else {
      if (!user) {
        alert("Please login to search for domains");
      } else {
        console.log("redirect to name: ", state.search)
        nav("/domain/" + state.search)
      }
    }
  }

  return <div className="relative shadow-sm w-[90%] md:w-[60%] flex rounded-lg text-slate-500">
    <div className="text-lg text-slate-300 absolute inset-y-0 left-0 px-3 flex items-center pointer-events-auto">
      <FontAwesomeIcon icon={faSearch} />
    </div>
    <input
      type="text"
      placeholder="Search names or addresses"
      className="block text-lg md:text-2xl rounded-l-lg pl-10 px-4 focus:outline-none w-full py-4 md:py-8"
      onChange={(e) => setState({ ...state, search: e.target.value })}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          search();
        }
      }}
    />

    <button
      className=" text-xl text-white bg-brightblue rounded-r-lg w-full shrink px-4 max-w-[30%] md:max-w-[15%] hover:bg-blue-400 hover:text-slate-100"
      onClick={search}
    >
      Search
    </button>
  </div>
}
