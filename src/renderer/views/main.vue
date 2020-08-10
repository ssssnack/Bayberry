<template>
    <div >
        <el-container class="container">
             <keep-alive>
                <router-view></router-view>
              </keep-alive>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container{
    padding: 20px 50px;
  }
</style>