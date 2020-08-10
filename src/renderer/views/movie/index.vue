<template>
  <div class="movie-panel">
    <el-input placeholder="请输入内容" v-model="name" class="input-with-select">
      <template slot="prepend">搜全网</template>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <el-table
      :data="tableData"
      style="width:100%"
    >
      <el-table-column
        prop="name"
        label="资源列表"
      ></el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template>
          <el-button type="text" size="small">播放</el-button>
          <el-button type="text" size="small" @click="openApp">下载</el-button>
       </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
const { shell,clipboard } = require('electron')
export default {
  data() {
    return {
      name:"",
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    openApp(){
      const url = this.name
      clipboard.writeText(url)
      this.$message({
          showClose: true,
          type: 'success',
          message: '复制成功！'
        });
      // var path = "C:\\Users\\wb.wuweidi\\Desktop"
      // shell.openItem(path);
      // console.log(111)
    }
  }
}
</script>

<style lang="scss" scoped>
  .movie-panel{
    width:100%
  }
</style>