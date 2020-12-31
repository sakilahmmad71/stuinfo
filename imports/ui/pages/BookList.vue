<template>
<div>
  <Navbar />
  <BooksTable />
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import BooksTable from '../components/BooksTable.vue'

export default {
  components : { Navbar, BooksTable }
}
</script>