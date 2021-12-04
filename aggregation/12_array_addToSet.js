db.friends.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: { age: "$age" }, allHobbies: { $addToSet: "$hobbies" } } }
]).pretty();

// Avoide Duplicate value. 

// output
// {
// 	"_id" : {
// 		"age" : 29
// 	},
// 	"allHobbies" : [
// 		"Cooking",
// 		"Skiing",
// 		"Sports"
// 	]
// }
