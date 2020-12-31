<template>
  <div class="container">
    <h3>Register a student</h3>
    <form class="student-form" @submit.prevent="handleSubmit">
      <input type="text" placeholder="Name" name="name" required v-model="name">
      <input type="email" placeholder="Email Address" name="email" required v-model="email">
      <input type="number" placeholder="Phone Number" name="phone" required v-model="phone">
      <input type="date" placeholder="Birth Date" name="birthdate" required v-model="birthdate">
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
    email : "",
    phone : "",
    birthdate : "",
  }),

  methods: {
    handleSubmit() {
      Meteor.call("students.create", this.name, this.email, this.phone, this.birthdate, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = "";
          this.email = "";
          this.phone = "";
          this.birthdate = "";
        }
      });
    }
  },

  meteor: {},
};
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .student-form {
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