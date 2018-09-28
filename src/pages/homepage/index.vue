<template>
  <div class="message">
    3333
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello",
      items: [
        { text: "文字1", cname: "tom", addr: "usa" },
        { text: "文字2", cname: "wangwu", addr: "uk" },
        { text: "文字3", cname: "zhangsan", addr: "un" }
      ]
    };
  },
  methods: {

  }
};
</script>
<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>

