<template>
  <h1 class="line-1 anim-typewriter">{{ title }}</h1>
</template>

<script>
export default {
  props : ["title"],

  data : () => ({}),

  methods : {}
}
</script>

<style scoped>
.line-1{
    margin-top: 50px !important;
    font-family : Arial, Helvetica, sans-serif;
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
    color: hsl(0, 0%, 50%);
    font-weight: 300;
}

  .anim-typewriter{
    animation: typewriter 4s steps(44) 1s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
</style>