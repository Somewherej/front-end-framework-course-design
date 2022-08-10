<template>
  <div>
    <el-card>
      <el-descriptions class="margin-top" title="简介" :column="2" border>
        <template>
          <el-button type="primary" size="small">操作</el-button>
        </template>

        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-user"></i>
            名称
          </template>
           Somewhere
        </el-descriptions-item>


        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-odometer"></i>
            年龄
          </template>
           21
        </el-descriptions-item>

        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-male"></i>
            <i class="el-icon-female"></i>
            性别
          </template>
          <el-tag size="small"> 男</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-message"></i>
            邮箱Email
          </template>
          1159045179@qq.com
        </el-descriptions-item>
        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-mobile-phone"></i>
            手机号码
          </template>
          1159045179
        </el-descriptions-item>
        <el-descriptions-item>
          <template v-slot:label>
            <i class="el-icon-location-outline"></i>
            地区
          </template>
           漳州
        </el-descriptions-item>



      </el-descriptions>
    </el-card>
  </div>
</template>

