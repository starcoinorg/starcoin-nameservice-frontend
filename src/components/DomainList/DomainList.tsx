import React from "react";
import { Domain, timeConverter } from "../../data/Domain";

export interface DomainListProps {
    enable_checkbox: boolean;
    onClick: (domain: Domain) => void;
    domains: Domain[],
}

export interface DomainListStates {
    selected_domains: Domain[],
    domains: Domain[],
}

export class DomainList extends React.Component<DomainListProps, DomainListStates> {
    constructor(props: DomainListProps) {
        super(props);
        this.state = {
            selected_domains: [],
            domains: props.domains,
        };
    }

    render() {
        let domains = this.state.domains.sort((a, b) => { return a.name.localeCompare(b.name) });
        let rows = []
        for (let domain of domains) {
            rows.push(
                <li className="p-4 flex justify-between border-b-slate-400 hover:bg-slate-200 rounded-md">
                    <span className=" text-xl text-blue-500">{domain.name + "." + domain.parent}</span>
                    <span>{"Expires at: " + timeConverter(+domain.expiration_date)}</span>
                </li>
            )
        }
        return (<ul className="grid grid-flow-row gap-8 p-4 m-4 bg-white text-slate-500 rounded-lg">
            {rows}
        </ul>)
    }
}