import { Random } from "mockjs";

export interface Domain {
  name: string;
  parent: string;
  registrant_hash?: string;
  // v1 没有
  controller_hash?: string;
  // sec timestemp
  expiration_date: string;
  address_hash: string;
  record: DomainRecord;

  subs: SubDomain[];
}

export function MockDomain(): Domain {
  let subs = [];
  for (let i = 0; i < Random.natural(0, 5); i++) {
    subs.push(mockSubDomain());
  }
  let domain = {
    name: mockName(),
    parent: "stc",
    registrant_hash: mockAddress(),
    // sec timestemp
    expiration_date: mockExpire(),
    address_hash: mockAddress(),
    record: mockDomainRecord(),
    subs: subs,
  };
  return domain;
}

export interface SubDomain {
  prefix: string;
  address_hash: string;
  record: DomainRecord;
}

export interface DomainRecord {
  contents: string;
  text_record: TextRecordField[];
}

export interface TextRecordField {
  id: number;
  text: string;
}

// -----------

export function mockAddress(): string {
  let address = "0x" + Random.string("0123456789ABCDEF", 40);
  return address;
}

export function mockName(): string {
  let name =
    Random.first().toLowerCase() +
    Random.string("abcdefghijklmnopqrstuvwxyz" + "123456789", 0, 10);
  return name;
}

function mockExpire(): string {
  let expire = "" + Random.natural(1670000000, 1700000000);
  return expire;
}

function mockSubDomain(): SubDomain {
  let sub = {
    prefix: mockName(),
    address_hash: mockAddress(),
    record: mockDomainRecord(),
  };
  return sub;
}

function mockDomainRecord(): DomainRecord {
  let record = {
    contents: mockName(),
    text_record: [
      { id: 0, text: "record 0" },
      { id: 1, text: "record 1" },
      { id: 2, text: "record 2" },
      { id: 3, text: "record 3" },
      { id: 4, text: "record 4" },
      { id: 5, text: "record 5" },
      { id: 6, text: "record 6" },
      { id: 7, text: "record 7" },
      { id: 8, text: "record 8" },
      { id: 9, text: "record 9" },
    ],
  };
  return record;
}

export function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
