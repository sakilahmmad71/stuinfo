import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Books from '../collections/Books.js';
import Students from '../collections/Students.js';

Meteor.methods({
  'books.create'(name, students) {
    check(name, String);
    check(students, String);

    let listOfStudents;
    if (students.includes(",")) {
      listOfStudents = students.split(",");
      listOfStudents.map(student => {
        const exist = Students.findOne({ name : student })
        if (exist) {
          exist.books.push(name)
        }
      })
    }

    return Books.insert({ name, students: listOfStudents ? listOfStudents : students, createdAt: new Date() });
  },

  'books.update'(id, name, students) {
    check(name, String);
    check(students, String);

    return Books.update({ _id : id }, { name, students, updatedAt: new Date() });
  },

  'books.delete'(bookId) {
    return Books.remove(bookId);
  }
});
