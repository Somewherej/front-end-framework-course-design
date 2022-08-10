<template>
  <el-row :gutter="12">
    <el-col :span="18">
      <el-card>
        <h4>用户登录状态</h4>
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="时间"
              width="280">
          </el-table-column>
          <el-table-column
              prop="name"
              label="用户"
              width="200">
          </el-table-column>
          <el-table-column
              prop="address"
              label="id地址">
          </el-table-column>
          <el-table-column
              prop="content"
              label="状态"
              width="200">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

const handleClick = () => {  // eslint-disable-line no-unused-vars
  alert('button click')
}

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