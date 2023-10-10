const data = `{
  "info": {
    "totalrecordsperquery": 10,
    "totalrecords": 224111,
    "pages": 22412,
    "page": 1,
    "next": "",
    "prev": "",
    "responsetime": "5 ms"
  },
  "records": [],
  "aggregations": {}
}`;


let a = `{"try": null}`;
let json1 = '{}';
let json2 = '{"myCount": null}';
let json3 = '{"myCount": 0}';
let json4 = '{"myString": ""}';
let json5 = '{"myString": "null"}';
let json6 = '{"myArray": "undefined"}';

console.log(JSON.parse(a)); // {myArray: []}
console.log(JSON.parse(json1)); // {}
console.log(JSON.parse(json2)); // {myCount: null}
console.log(JSON.parse(json3)); // {myCount: 0}
console.log(JSON.parse(json4)); // {myString: ""}
console.log(JSON.parse(json5)); // {myString: "null"}
console.log(JSON.parse(json6)); // {myArray: []}

const dog = {
  breed: 'lab',
  color: 'black',
  isAlive: true,
  isMiserable: 'true',
  tops: null,
  nums: []
};