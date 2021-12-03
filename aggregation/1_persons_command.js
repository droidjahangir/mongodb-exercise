db.persons.aggregate([
  {
    $match: { 
      gender: 'female'
     }
  }
]).pretty();

// return only female data