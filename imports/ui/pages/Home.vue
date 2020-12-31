<template>
<div>
  <Navbar />
  <WelcomeMessage title="Hello, Gain Solutions!" />
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import WelcomeMessage from '../components/WelcomeMessage.vue'

export default {
  components : { Navbar, WelcomeMessage }
}
</script>