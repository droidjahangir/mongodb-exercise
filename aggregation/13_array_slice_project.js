db.friends.aggregate([
  { $project: { _id: 0, examScore: { $slice: ["$examScores", 1] } } }
]).pretty();

// { $project: { _id: 0, examScore: { $slice: ["$examScores", -2] } } }  // for last two value
// { $project: { _id: 0, examScore: { $slice: ["$examScores", 2, 1] } } }  // start from element 2 then give me 1 element
 

// output:
// { "examScore" : [ { "difficulty" : 4, "score" : 57.9 } ] }
// { "examScore" : [ { "difficulty" : 7, "score" : 52.1 } ] }
