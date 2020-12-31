<template>
  <div class="container">
    <h3>Register Books</h3>
    <form class="book-form" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Book" name="name" required v-model="name">
      <input type="text" placeholder="Students" name="students" required v-model="students">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  props : [],
  
  data: () => ({
    name : "",
    students : ""
  }),

  methods: {
    handleSubmit() {
      Meteor.call("books.create", this.name, this.students, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = "";
          this.students = "";
        }
      });
    }
  }
};
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .book-form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  form input {
    width: 70%;
    margin: 5px;
  }

  input {
    border: none;
    background: hsl(0 0% 96%);
    border-radius: .25rem;
    padding: .75rem 1rem;
  }
  
  input[type="submit"] {
    margin-top: 15px;
    background: hotpink;
    color: white;
    box-shadow: 0 .75rem .5rem -.5rem hsl(0 50% 80%);
  }
</style>