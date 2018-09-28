<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 使用 click-counter 组件 -->
    <click-counter initNum="50" @clicknum="handleClickNum" :items="items">
      <!-- 填坑用... -->
      <input type="checkbox" /> 禁用
    </click-counter>
  </div>
</template>
<script>
import ClickCounter from "@/components/click-counter";
export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },
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
    clickHandle() {
      this.msg = "Clicked!!!!!!";
    },
    handleClickNum(data) {
      console.log(`>>>>>${data.num}`);
    }
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

