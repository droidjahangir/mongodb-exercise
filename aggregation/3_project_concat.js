db.persons.aggregate([
  { $project: { _id: 0, gender: 1, fullName: { $concat: [ "$name.first", " ", "$name.last" ] } } }
]).pretty();

// return full name data