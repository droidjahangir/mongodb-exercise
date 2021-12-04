db.persons.aggregate([
  { $match: { gender: "male" } },
  { $project: { _id: 0, gender: 1, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
  { $sort: { birthdate: 1 } },
  { $skip: 10 },
  { $limit: 10 }
]).pretty();

// sort, skip and limit order matter because if we assign skip after limit then mongodb get 10 item then skip 10 item, result will be 0. 
// if we place sort after limit then mongodb sort only 10 item rather than all item. 

// Output : 
// {
// 	"gender" : "male",
// 	"name" : "pierre boyer",
// 	"birthdate" : ISODate("1945-01-01T22:35:55Z")
// }
// {
// 	"gender" : "male",
// 	"name" : "emile noel",
// 	"birthdate" : ISODate("1945-01-10T03:05:21Z")
// }
// {
// 	"gender" : "male",
// 	"name" : "torgeir apeland",
// 	"birthdate" : ISODate("1945-01-13T17:04:33Z")
// }
