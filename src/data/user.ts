import { Random } from "mockjs";
import { Domain, mockAddress, MockDomain } from "./Domain";

export interface User {
    hash: string;
    primary_name?: Domain;
    network: string;
    holdings: Domain[];
}

export function MockUser(): User {
    let holdings = [];
    for (let i = 0; i < Random.natural(1, 5); i++) {
        holdings.push(MockDomain());
    }
    let user = {
        hash: mockAddress(),
        primary_name: Random.boolean() ?  holdings[0] : null,
        network: "main",
        holdings: holdings,
    }
    return user;
}