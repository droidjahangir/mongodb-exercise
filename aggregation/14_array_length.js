db.friends.aggregate([
  { $project: { _id: 0, numScore: { $size: "$examScores" } } }
]).pretty();

// $size return lenght of an array

// output:
// { "numScore" : 3 }
// { "numScore" : 3 }
// { "numScore" : 3 }



