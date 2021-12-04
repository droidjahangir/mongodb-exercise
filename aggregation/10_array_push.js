db.friends.aggregate([
  { $group: { _id: { age: "$age" }, allHobbies: { $push: "$hobbies" } } }
]).pretty();

// push all hobbies into same age document. 

// output: 
// {
// 	"_id" : {
// 		"age" : 29
// 	},
// 	"allHobbies" : [
// 		[
// 			"Sports",
// 			"Cooking"
// 		],
// 		[
// 			"Cooking",
// 			"Skiing"
// 		],
// 		[
// 			"Sports",
// 			"Cooking"
// 		],
// 		[
// 			"Cooking",
// 			"Skiing"
// 		]
// 	]
// }