db.transformPersons.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-18.4, -42.8]
      },
      maxDistance: 1000000,
      query: { age: { $gt: 30 } },
      distanceField: "distance"
    }
  }
]).pretty();

// firstly we need to create index. 
// db.transformPersons.createIndex({location: "2dsphere"});



// output: 
// {
// 	"_id" : ObjectId("61aadec930e2a2b341137f9c"),
// 	"location" : {
// 		"type" : "Point",
// 		"coordinates" : [
// 			-7.5113,
// 			-43.1898
// 		]
// 	},
// 	"email" : "zoe.hall@example.com",
// 	"birthdate" : ISODate("1945-06-30T22:42:58Z"),
// 	"age" : 73,
// 	"fullName" : "Zoe Hall",
// 	"distance" : 886994.5551556123
// }
// {
// 	"_id" : ObjectId("61aadec930e2a2b341138319"),
// 	"location" : {
// 		"type" : "Point",
// 		"coordinates" : [
// 			-16.5148,
// 			-34.6911
// 		]
// 	},
// 	"email" : "justin.moulin@example.com",
// 	"birthdate" : ISODate("1961-06-01T15:51:52Z"),
// 	"age" : 57,
// 	"fullName" : "Justin Moulin",
// 	"distance" : 917320.3765606781
// }