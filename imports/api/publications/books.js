import { Meteor } from 'meteor/meteor';
import Books from '../collections/Books.js';

Meteor.publish('books', function () {
  return Books.find();
});
