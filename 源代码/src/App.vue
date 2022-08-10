<style scoped>
.router-link-active {
  text-decoration: none;
  color: blue;
}
a{
  text-decoration: none;
  color: black;
}
</style>

<template>
  <el-container width="400px">

    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"


    >
      <el-menu-item index="0">
        <span><h3>菜单</h3></span>
      </el-menu-item>


      <el-menu-item index="1">
        <el-icon><Operation /></el-icon>
        <span> <router-link to="/"> 概要</router-link>   </span>
      </el-menu-item>


      <el-sub-menu index="2">
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>数据分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"><el-icon><DataLine /></el-icon>
            <router-link to="/graph">
              图表
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-2"><el-icon><Grid /></el-icon>
            <router-link to="/table">
              表格
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>







      <el-menu-item index="3">
        <el-icon><Setting /></el-icon>
        <span><router-link to="/admin">设置</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><InfoFilled /></el-icon>
        <span><router-link to="/about">关于</router-link></span>
      </el-menu-item>
    </el-menu>



    <el-container>
      <el-header>


        <el-row>
          <el-col :span="4">
            <div class="mt-4">
              <el-input
                  v-model="input3"
                  placeholder="Please input"
                  class="input-with-select"
              >
                <template #append>
                  <el-button><el-icon><Search /></el-icon></el-button>
                </template>
              </el-input>
            </div>


          </el-col>
          <el-col :span="16"><div>

          </div>
          </el-col>
          <el-col :span="4">
            <div class="mt-4"
                style=" font-size: 2px; text-align:center; padding:0px;">
              <el-dropdown>
                <el-button>
                  <el-icon><Setting/></el-icon>  郭志斌2011001105
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>让我康康</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

            </div>
          </el-col>
        </el-row>
      </el-header>


      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>

</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


