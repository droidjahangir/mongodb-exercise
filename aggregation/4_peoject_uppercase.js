db.persons.aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: {
          $concat: [
            { $toUpper: '$name.first' },
            ' ',
            { $toUpper: '$name.last' },
          ],
        },
      },
    },
  ]).pretty();

// return full name data which is form with first name and last name.