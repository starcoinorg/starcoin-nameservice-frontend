import React from "react";
import { useParams } from "react-router-dom";

export function Address() {
    let { hash } = useParams();
    return (
        <div className="home">
            <h1>Address</h1>
            {hash}
        </div>
    )
}
