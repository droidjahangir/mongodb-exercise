db.persons.aggregate([
  {
    $bucket: {
      groupBy: '$dob.age',
      boundaries: [18, 30, 50, 80],
      output: {
        numPersons: { $sum: 1 },
        averageAge: { $avg: "$dob.age" }
      }
    }
  }
]).pretty();

// bucket used for statistical analysis. 

// output: 
// { "_id" : 18, "numPersons" : 868, "averageAge" : 25.101382488479263 }
// { "_id" : 30, "numPersons" : 1828, "averageAge" : 39.4917943107221 }
// { "_id" : 50, "numPersons" : 2304, "averageAge" : 61.46440972222222 }


