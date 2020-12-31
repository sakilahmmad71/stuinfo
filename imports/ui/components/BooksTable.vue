<template>
  <div class="books-table">
    <h3>Registered Books</h3>
    <table class="container">
      <thead>
        <tr>
          <th><h1>Name</h1></th>
          <th><h1>Students</h1></th>
          <th><h1>Actions</h1></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="book in books" v-bind:key="book._id">
          <td>{{book.name}}</td>
          <td>{{book.students.toString()}}</td>
          <td>
              <div class="buttons">
                <button type="button" class="btn-pink"  @click="showModal">Edit</button>
                <UpdateBook v-show="isModalVisible" @close="closeModal()" v-bind:book="book" />
                <button class="btn-dark" @click="handleDelete(book._id)">Delete</button>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Books from '../../api/collections/Books'
import UpdateBook from '../components/UpdateBook.vue'

export default {
  components : { UpdateBook },

  props : [],
  
  data: () => ({
    isModalVisible : false
  }),

  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    handleDelete(id) {
      Meteor.call('books.delete', id)
    }
  },

  meteor: {
    $subscribe: {
      'books': [],
    },
    books () {
      return Books.find({})
    },
  },
};
</script>

<style scoped>
.books-table {
  padding-top: 2px;
}

h1 {
  text-align: center;
}

h2 {
  font-size:1em; 
  font-weight: 300;
  text-align: center;
  display: block;
  line-height:1em;
  padding-bottom: 2em;
  color: #ffffff;
}

h3 {
    text-align: center;
  }

h2 a {
  color: #ffffff;
  text-decoration: none;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #ffffff;
}

.container td {
	  font-weight: normal;
	  font-size: 1em;
}

.container {
  width: 70%;
  text-align: left;
  overflow: hidden;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td, .container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left:2%;  
}

.container tr:nth-child(odd) {
	  background-color: #f9fcfb;
}

.container tr:nth-child(even) {
	  background-color: #f3f9fb;
}

.container tr:hover {
	  background-color: #f5feff;
}

.container th {
	background-color: #1F2739;
}

.container td:first-child { 
  color: #2f3542;
  font-weight: bold;
}

.container td:hover {
  color: hotpink;
}

.btn-pink {
    padding: 5px;
    color: #ffffff;
    background: hotpink;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .btn-dark {
    padding: 5px;
    background: #000000;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

@media (max-width: 800px) {}
</style>

