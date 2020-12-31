<template>
<div>
  <Navbar />
  <StudentTable />
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import StudentTable from '../components/StudentTable.vue'

export default {
  components : { Navbar, StudentTable }
}
</script>