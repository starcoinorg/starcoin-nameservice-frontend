import React from "react";
import { useParams } from "react-router-dom";
import { MockUser } from "../data/user";

export function Address() {
  let { hash } = useParams();
  let user = MockUser();
  user.hash = hash;

  return (
    <div className="home">
      <h1>Address</h1>
      {hash}
    </div>
  );
}
