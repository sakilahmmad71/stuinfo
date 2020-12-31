// TODO: => Need to map every link as reusable component like Link.
<template>
  <ul>
    <li className="nav-item">
      <router-link className="nav-link" to="/">Home</router-link>
    </li>
    <li className="nav-item">
      <router-link className="nav-link" to="/students">Students</router-link>
    </li>
    <li className="nav-item">
      <router-link className="nav-link" to="/books">Books</router-link>
    </li>
    <li className="nav-item">
      <router-link className="nav-link" to="/register-student">Signup Students</router-link>
    </li>
    <li className="nav-item">
      <router-link className="nav-link" to="/register-book">Assign Books</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props : [],
  
  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
  }
  ul li {
    font-family : Arial, Helvetica, sans-serif;
    margin-right: 20px;
  }
  ul li a {
    position: relative;
    display: block;
    padding: 4px 0;
    font-family: Lato, sans-serif;
    color: hotpink;
    text-decoration: none;
    text-transform: capitalize;
    transition: 0.5s;
  }

  ul li a::after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: lightpink;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  ul li a:hover {
    color: hsl(0 0% 50%);
  }

  ul li a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
</style>