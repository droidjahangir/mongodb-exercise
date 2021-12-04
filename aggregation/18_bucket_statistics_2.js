db.persons.aggregate([
  {
    $bucketAuto: {
      groupBy: '$dob.age',
      buckets: 5,
      output: {
        numPersons: { $sum: 1 },
        averageAge: { $avg: "$dob.age" }
      }
    }
  }
]).pretty();

// auto splliting 5 bucket. 

// output:
// {
// 	"_id" : {
// 		"min" : 21,
// 		"max" : 32
// 	},
// 	"numPersons" : 1042,
// 	"averageAge" : 25.99616122840691
// }
