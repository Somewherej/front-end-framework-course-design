<template>
<el-card class="box-card" style="margin-bottom: 12px;">
<div class="card-container">
  <div class="admin-info">
    <h3>管理员 开始你一天的工作吧！</h3>
    <div class="weather">
      <i class="el-icon-heavy-rain"></i>
      <span>今日厦门天气 阴转小雨，29℃ - 37℃</span>
    </div>
  </div>
</div>
</el-card>
<el-card>
<el-table :data="tableData" stripe style="width: 100%; ">
  <el-table-column prop="date" label="日期" width="180">
  </el-table-column>
  <el-table-column prop="name" label="姓名" width="180">
  </el-table-column>
  <el-table-column prop="address" label="IP地址">
  </el-table-column>
  <el-table-column prop="content" label="状态">
  </el-table-column>
  <el-table-column label="操作" width="200" style="display: flex;">
    <template #default>
      <el-button type="primary" plain>修改</el-button>
      <el-button type="danger" plain>删除</el-button>
    </template>
  </el-table-column>

</el-table>
<div style="text-align: center;">
  <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
</div>
</el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2021-06-01 00:00:11',
        name: '张三',
        address: '127.0.0.1',
        content: '退出登录'
      }, {
        date: '2021-06-01 00:00:10',
        name: '张三',
        address: '127.0.0.1',
        content: '登录'
      },
        {
          date: '2021-06-01 00:00:11',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:10',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
        {
          date: '2021-06-01 00:00:09',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:08',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
        {
          date: '2021-06-01 00:00:07',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:06',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
        {
          date: '2021-06-01 00:00:05',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:04',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
        {
          date: '2021-06-01 00:00:03',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:02',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
        {
          date: '2021-06-01 00:00:01',
          name: '张三',
          address: '127.0.0.1',
          content: '退出登录'
        }, {
          date: '2021-06-01 00:00:00',
          name: '张三',
          address: '127.0.0.1',
          content: '登录'
        },
      ]
    }
  }
}
</script>


