db.friends.aggregate([
  { $project: { 
    _id: 0,
    scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } }
   } }
]).pretty();

// as treated as temporary variable, thats why we use double $ sign. 

// output
// {
// 	"scores" : [
// 		{
// 			"difficulty" : 3,
// 			"score" : 75.1
// 		},
// 		{
// 			"difficulty" : 6,
// 			"score" : 61.5
// 		}
// 	]
// }
