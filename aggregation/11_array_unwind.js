db.friends.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: { age: "$age" }, allHobbies: { $push: "$hobbies" } } }
]).pretty();


// db.friends.aggregate([
//   { $unwind: "$hobbies" }
// ]).pretty();
// 
//  Group marges multiple document into one, on the other hand unwind takes one document and spllites multiple document. 
// unwind insert duplicate value but for avoide this we need to use $addToSet method

// output
// "allHobbies" : [
//   "Sports",
//   "Cooking",
//   "Cooking",
//   "Skiing",
//   "Sports",
//   "Cooking",
//   "Cooking",
//   "Skiing"
// ]


// output
// {
// 	"_id" : ObjectId("61aabba1928e4fe499d75b61"),
// 	"name" : "Manu",
// 	"hobbies" : "Eating",
// 	"age" : 30,
// 	"examScores" : [
// 		{
// 			"difficulty" : 7,
// 			"score" : 52.1
// 		},
// 		{
// 			"difficulty" : 2,
// 			"score" : 74.3
// 		},
// 		{
// 			"difficulty" : 5,
// 			"score" : 53.1
// 		}
// 	]
// }
