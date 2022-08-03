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
