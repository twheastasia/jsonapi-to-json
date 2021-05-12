<template>
  <h2 class="title">
    JSON API => 普通JSON
  </h2>
  <div class="card-title">
    <div class="left">
      <el-input
        v-model="input"
        type="textarea"
        :autosize="autosize"
      />
    </div>
    <div class="center">
      <el-button type="primary" @click="onChangeBtnClick(input)">转化</el-button>
      <br>
      <el-button type="danger" style="margin-top: 10px;" @click="onResetBtnClick">重置</el-button>
    </div>
    <div class="right">
      <el-input
        v-model="output"
        type="textarea"
        :autosize="autosize"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'
import { parse } from 'jsonapi-util';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const input = ref('');
    const output = ref('');
    const autosize = ref({ minRows: 20, maxRows: 20 });

    function transformJsonApi(inputJson: string) {
      try {
        const jsonData = JSON.parse(inputJson);
        output.value = JSON.stringify(parse(jsonData));
      } catch (error) {
        ElMessage.error('请检查输入！');
        output.value = ''
      }
    }

    return {
      input,
      output,
      autosize,
      onChangeBtnClick: transformJsonApi
    }
  },
  methods: {
    onResetBtnClick() {
      this.input = '';
      this.output = '';
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  width: 300px;
  margin: 20px auto;
  background-color: #218BFB;
  color: aliceblue;
  border-radius: 5px;
}
.card-title {
  display: table;
  width: 100%;
}
.right {
  text-align: right;
  display: table-cell;
  width: 45%;
}
.left {
  text-align: left;
  display: table-cell;
  width: 45%;
}
.center {
  text-align: center;
  display: table-cell;
  width: 10%;
  vertical-align: middle;
}
</style>
