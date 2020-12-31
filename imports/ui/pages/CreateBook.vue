<template>
  <div>
    <Navbar />
    <BookForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import BookForm from '../components/BookForm.vue'

export default {
  components : { Navbar, BookForm },

  data : () => ({}),

  methods: {},
}
</script>

<style scoped></style>