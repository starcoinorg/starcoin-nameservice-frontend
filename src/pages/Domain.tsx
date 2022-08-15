import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../components/Auth/Auth";
import { BuyExtendFeeCalculate } from "../components/BuyExtendFeeCalculate/BuyExtendFeeCalculate";
import { Nav } from "../components/Nav/Nav";
import { Domain, MockDomain, timeConverter } from "../data/Domain";

interface DomainContextType {
    domain: Domain,
    update: (domain: Domain) => void
    submit_changes: () => void
}
const DomainContext = React.createContext<DomainContextType>(null!);

function DomainProvider(props: any) {
    let [domain, setDomain] = React.useState<Domain>(props.domain);
    return <DomainContext.Provider value={{
        domain: domain,
        update: (domain: Domain) => {
            setDomain(domain);
        },
        submit_changes: () => {
            console.log("set domain changes")
        }
    }}>
        {props.children}
    </DomainContext.Provider>
}

export function Domain() {
    let { name } = useParams();


    return (
        <DomainProvider domain={MockDomain()}>
            <div className="home">
                <Nav />
                <div className="m-4 p-8  rounded-lg backdrop-blur-md bg-white bg-opacity-20  flex justify-between">
                    <div className="text-2xl text-white hover:text-blue-500" onClick={() => { navigator.clipboard.writeText(name); alert("copied to clipboard") }}>{name} <FontAwesomeIcon icon={faFile} /> </div>
                    <div className="grid grid-flow-col gap-2">
                        <a className="btn-thin text-md ">Register</a>
                        <a className="btn-thin text-md ">Subdomains</a>
                    </div>
                </div>
                <DomainDetails />
            </div>
        </DomainProvider>
    )
}

function DomainDetails() {
    let { name } = useParams();
    let loc = useLocation();
    let nav = useNavigate();
    let { user } = React.useContext(AuthContext);
    let { domain, update } = React.useContext(DomainContext);
    let inner = null;
    let [display_edit_registrant, setDisplayEditRegistrant] = React.useState(false);
    let [display_extend_expiration, setDisplayExtendExpiration] = React.useState(false);

    let owned = false;
    if (loc.pathname.endsWith("/subs")) {

    } else if (loc.pathname.endsWith("/register")) {

    }
    else {
        // mock redirect
        if (!name.startsWith("buy")) {
            {
                inner =
                    <>
                        <ul className="grid grid-flow-row">
                            <li>
                                <div className="flex justify-between">
                                    <div className="grid grid-flow-col gap-4">
                                        <div className="min-w-[20em]">PARENT</div>
                                        <div>{domain.parent}</div>
                                    </div>
                                    <div> </div>
                                </div>
                            </li>
                            <li className="grid grid-flow-row">
                                <div className="flex justify-between">
                                    <div className="grid grid-flow-col gap-4">
                                        <div className="min-w-[20em]">REGISTRANT</div>
                                        <div className="hover:text-blue-500" onClick={() => { navigator.clipboard.writeText(domain.registrant_hash); alert("copied to clipboard") }}>{domain.registrant_hash} <FontAwesomeIcon icon={faFile} /></div>
                                    </div>
                                    <div>
                                        <button className="btn-thin" onClick={() => {
                                            console.log("set registrant");
                                            setDisplayEditRegistrant(!display_edit_registrant);
                                        }}>set</button>
                                    </div>
                                </div>
                                <div className="grid grid-flow-row gpa-1 justify-center items-center m-8 " style={{ display: name.startsWith("own") && display_edit_registrant ? "grid" : "none" }}>
                                    <input className="bg-white rounded-lg p-1 text-black min-w-[40em] m-4" placeholder="please input a valid address"></input>
                                    <div className="flex justify-between m-4">
                                        <button className="btn-thin" onClick={() => { setDisplayEditRegistrant(false) }}>Ok</button>
                                        <button className="btn-thin" onClick={() => { setDisplayEditRegistrant(false) }}>Cancel</button>
                                    </div>
                                </div>
                            </li>
                            <li className="grid grid-flow-row">
                                <div className="flex justify-between">
                                    <div className="grid grid-flow-col gap-4">
                                        <div className="min-w-[20em]">EXPIRATION DATE</div>
                                        <div>{timeConverter(+domain.expiration_date)}</div>
                                    </div>
                                    <div>
                                        <button className="btn-thin" onClick={() => {
                                            console.log("set expiration");
                                            setDisplayExtendExpiration(!display_extend_expiration);
                                        }}>extend</button>
                                    </div>
                                </div>
                                <div className=" items-center"  style={{ display: name.startsWith("own") && display_extend_expiration ? "" : "none" }}>
                                    <BuyExtendFeeCalculate />
                                </div>
                            </li>
                        </ul>
                    </>
            }
        } else {
            nav(loc.pathname + "/register")
        }
    }
    return <div className="m-4 p-4 rounded-lg backdrop-blur-md bg-white bg-opacity-20 ">
        {inner}
    </div>
}