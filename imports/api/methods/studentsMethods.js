import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Students from '../collections/Students.js'
import Books from '../collections/Books.js'

Meteor.methods({
  'students.create'(name, email, phone, birthdate) {
    check(name, String);
    check(email, String);
    check(phone, String);
    check(birthdate, String);

    const books = []

    return Students.insert({ name, email, phone, birthdate, books, createdAt: new Date() });
  },

  'students.update'(id, name, email, phone, birthdate) {
    check(name, String);
    check(email, String);
    check(phone, String);
    check(birthdate, String);

    return Students.update({ _id : id }, { name, email, phone, birthdate });
  },

  'students.delete'(studentId) {
    return Students.remove(studentId);
  },
});
