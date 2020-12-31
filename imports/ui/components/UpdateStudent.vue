<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <section class="modal-body">
            <h3>Update registered student</h3>
            <form class="student-form" @submit.prevent="handleSubmit">
              <input type="text" placeholder="Name" name="name" v-model="student.name">
              <input type="email" placeholder="Email Address" name="email" required v-model="student.email">
              <input type="number" placeholder="Phone Number" name="phone" required v-model="student.phone">
              <input type="date" placeholder="Birth Date" name="birthdate" required v-model="student.birthdate">
            </form>
        </section>

        <footer class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn-dark" @click="close" >Update</button>
              <button type="button" class="btn-pink" @click="close" >Cancel</button>
            </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props : ["student"],

    data : () => ({
      name : "",
      email : "",
      phone : "",
      birthdate : ""
    }),

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 600px;
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: space-between;
  }

  .modal-body {
    color: hsl(0 0% 50%);
    position: relative;
    padding: 20px 10px;
    text-align: center;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-pink {
    padding: 10px;
    color: #ffffff;
    background: hotpink;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .btn-dark {
    padding: 10px;
    background: #000000;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

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
</style>