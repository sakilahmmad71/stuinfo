<template>
  <div>
    <Navbar />
    <StudentForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import StudentForm from '../components/StudentForm.vue'
export default {
  components : { Navbar, StudentForm },

  data : () => ({}),

  methods: {},
}
</script>

<style scoped></style>
