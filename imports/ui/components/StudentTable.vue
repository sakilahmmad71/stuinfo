<template>
  <div class="students-table">
    <h3>Registered students</h3>
      <table class="container">
        <thead>
          <tr>
            <th><h1>Name</h1></th>
            <th><h1>Email</h1></th>
            <th><h1>Phone</h1></th>
            <th><h1>Date of Birth</h1></th>
            <!-- <th><h1>Books</h1></th> -->
            <th><h1>Actions</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" v-bind:key="student._id">
            <td>{{student.name}}</td>
            <td>{{student.email}}</td>
            <td>{{student.phone}}</td>
            <td>{{student.birthdate}}</td>
            <td>
              <div class="buttons">
                <button type="button" class="btn-dark"  @click="showModal">Edit</button>
                <UpdateStudent v-show="isModalVisible" @close="closeModal()" v-bind:student="student" />
                <button class="btn-pink" @click="handleDelete(student._id)">Delete</button>
              </div>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import Students from '../../api/collections/Students'
import UpdateStudent from '../components/UpdateStudent.vue'

export default {
  components : { UpdateStudent },

  props : [],
  
  data: () => ({
    isModalVisible: false,
  }),

  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    handleDelete(id) {
      Meteor.call("students.delete", id)
    }
  },

  meteor: {
    $subscribe: {
      'students': [],
    },
    students () {
      return Students.find({})
    },
  },
};
</script>

<style scoped>
.students-table {
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