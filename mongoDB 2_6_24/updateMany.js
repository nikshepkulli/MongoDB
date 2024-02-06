db.books.updateMany(
  {publishedDate: {$1t: ISODate("2017-04-27T08:00:00.000+00:00")}},
  {$set: {status: "NEW"}}
);
