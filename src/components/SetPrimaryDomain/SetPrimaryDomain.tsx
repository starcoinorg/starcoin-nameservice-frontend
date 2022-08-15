import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Domain } from "../../data/Domain";
import { AuthContext } from "../Auth/Auth";

interface SetState {
    onClickSet: boolean,
    selected: Domain
}

export function SetPrimaryDomain() {
    let { user, update } = React.useContext(AuthContext);
    let [state, setState] = React.useState<SetState>({ onClickSet: false, selected: user.holdings[0] });

    let left = null;
    if (!user.primary_name) {
        left = <div>No primary domain set</div>;
    } else {
        left = <div> {"Primary domain set to: " + user.primary_name.name + "." + user.primary_name.parent} </div>;
    }
    let right = null;
    if (!state) {
        right = <div>
            <button onClick={() => {
                setState({ onClickSet: true, selected: state.selected });
            }}>Edit</button>
        </div>
    } else {
        let options = []
        for (let i = 0; i < user.holdings.length; i++) {
            options.push(<option key={i} value={i}>{user.holdings[i].name + "." + user.holdings[i].parent}</option>);
        }
        right = <div>
            <select className="m-1 bg-white text-black p-1 rounded-lg" onChange={(e) => {
                setState({ onClickSet: true, selected: user.holdings[+e.target.value] });
            }}>
                {options}
            </select>
            <button className="btn-thin" onClick={() => {
                setTimeout(() => { user.primary_name = state.selected; update(user); }, 1000);
            }}>Set</button>
        </div>
    }
    return <div className="flex justify-between text-slate-200 bg-slate-500 my-2 rounded-lg p-4">
        {left}
        {right}
    </div>
}