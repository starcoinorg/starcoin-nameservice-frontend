import { Domain } from "./Domain";

export interface User {
    hash: string;
    primary_name?: Domain;
    network: string;
    holdings: Domain[];
}