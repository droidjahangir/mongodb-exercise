// find Maximum score from list of object. 
db.friends.aggregate([
  { $unwind: "$examScores" },
  { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
  { $sort: { score: -1 } },
  { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
  { $sort: { maxScore: -1 } }
]).pretty();


// output
// {
// 	"_id" : ObjectId("61aabba1928e4fe499d75b60"),
// 	"name" : "Max",
// 	"maxScore" : 88.5
// }
// {
// 	"_id" : ObjectId("61aabba1928e4fe499d75b62"),
// 	"name" : "Maria",
// 	"maxScore" : 75.1
// }
// {
// 	"_id" : ObjectId("61aabb1f928e4fe499d75b5e"),
// 	"name" : "Manu",
// 	"maxScore" : 74.3
// }



// "examScores" : [
//   {
//     "difficulty" : 4,
//     "score" : 57.9
//   },
//   {
//     "difficulty" : 6,
//     "score" : 62.1
//   },
//   {
//     "difficulty" : 3,
//     "score" : 88.5
//   }
// ]
