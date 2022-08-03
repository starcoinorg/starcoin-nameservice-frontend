import React from "react";
import { Link } from "react-router-dom";

interface SideNavProp {
    activate: number
}

export class SideNav extends React.Component<SideNavProp> {
    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <div className="min-h-[100vh] max-w-[20rem] bg-blue-600 hidden lg:block">
                <ul className="grid grid-flow-row gap-0 mt-20">
                    <Link to="/dashboard"><li className=" p-4 hover:text-white hover:text-xl ease-in duration-300 text-slate-400" style={{ backgroundColor: this.props.activate == 1 ? 'aqua' : 'rgba(0,0,0,0)' }}>1</li></Link>
                    <Link to="/domains"><li className=" p-4 hover:text-white hover:text-xl ease-in duration-300 text-slate-400" style={{ backgroundColor: this.props.activate == 2 ? 'aqua' : 'rgba(0,0,0,0)' }}>2</li></Link>
                    <Link to="/faq"><li className=" p-4 hover:text-white hover:text-xl ease-in duration-300 text-slate-400" style={{ backgroundColor: this.props.activate == 3 ? 'aqua' : 'rgba(0,0,0,0)' }}>3</li></Link>
                    <Link to="/about"><li className=" p-4 hover:text-white hover:text-xl ease-in duration-300 text-slate-400" style={{ backgroundColor: this.props.activate == 4 ? 'aqua' : 'rgba(0,0,0,0)' }}>4</li></Link>
                </ul>
            </div>

        )
    }
}