export interface Domain {
    name: string;
    parent: string;
    registrant_hash?: string;
    // v1 没有
    controller_hash?: string;
    // sec timestemp
    expiration_date: string;
    address_hash: string;
    records: DomainRecord[];

    subs: SubDomain[];
}

export function mockDomains() : Domain[] {
    return [
        {
            name: "example1",
            parent: "stc",
            expiration_date: "1660905074",
            address_hash: "0x0000000000000000000000000000000000000000",
            records: [],
            subs: []
        },
        {
            name: "example2",
            parent: "stc",
            expiration_date: "1660905074",
            address_hash: "0x0000000000000000000000000000000000000000",
            records: [],
            subs: []
        },
        {
            name: "example3",
            parent: "stc",
            expiration_date: "1660905074",
            address_hash: "0x0000000000000000000000000000000000000000",
            records: [],
            subs: []
        },
        {
            name: "example4",
            parent: "stc",
            expiration_date: "1660905074",
            address_hash: "0x0000000000000000000000000000000000000000",
            records: [],
            subs: []
        },
        {
            name: "example5",
            parent: "stc",
            expiration_date: "1660905074",
            address_hash: "0x0000000000000000000000000000000000000000",
            records: [],
            subs: []
        },
    ]
}

export interface SubDomain {
    prefix: string;
    address_hash: string;
    record: DomainRecord
}

export interface DomainRecord {
    contents: string;
    text_record: TextRecordField[];
}

export interface TextRecordField {
    id: number;
    text: string;
}
