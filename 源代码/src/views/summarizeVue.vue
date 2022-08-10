
<style>

.el-calendar-table .el-calendar-day {
  height: 30px;
}

</style>
<template>
  <h1>统计数据</h1>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="always">
        <h3>日历</h3>
        <div style="width: 350px ;height: 300px">
          <el-calendar  />
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <h3>浏览器统计</h3>
        <div style="width: 350px ;height: 300px" id="min"></div>
      </el-card>
    </el-col>
    <el-col :span="10">
      <el-card shadow="never">
          <h3>日访问量</h3>
        <div style="width: 500px ;height: 400px" id="main">
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="12">
    <el-col :span="8">
      <el-row :gutter="12">
        <el-col :span="10" :gutter="12">
          <el-card>
            <h3>日点击</h3>
            <div style=" text-align: center; color:black"><h2>1,163</h2></div>
            <div style=" text-align: right; color:green">-21.2%</div>
          </el-card>
        </el-col>
        <el-col :span="10" :gutter="12">
          <el-card>
            <h3>周点击</h3>
            <div style=" text-align: center; color:black"><h2>9,233</h2></div>
            <div style=" text-align: right; color:green">11.2%</div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="12" >
        <el-col :span="10">

          <el-card>
            <h3>平均停留时间</h3>
            <div style=" text-align: center; color:black"><h2>21min</h2></div>
            <div style=" text-align: right; color:green">-2.1%</div>
          </el-card>

        </el-col>
        <el-col :span="10">
          <el-card>
            <h3>日活跃</h3>
            <div style=" text-align: center; color:black"><h2>31,21</h2></div>
            <div style=" text-align: right; color:green">4.2%</div>
          </el-card>
        </el-col>
      </el-row>

    </el-col>





    <el-col :span="16">
      <el-card shadow="always">
        <h3>用户登录状态</h3>
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="时间"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="用户"
              width="180">
          </el-table-column>
          <el-table-column
              prop="address"
              label="id地址">
          </el-table-column>
          <el-table-column
              prop="content"
              label="状态"
              width="180">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts';

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
  },
  mounted() {
    this.echartsInit()
  },

  methods:{
    echartsInit() {
      document.getElementById('main').removeAttribute("_echarts_instance_");
      echarts.init(document.getElementById('main')).setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      })
      document.getElementById('min').removeAttribute("_echarts_instance_");
      echarts.init(document.getElementById('min')).setOption({
        tooltip: {

          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 1.5
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 4306, name: 'Chorme' },
              { value: 3801, name: 'Firefox' },
              { value: 1689, name: 'Edge' },
              { value: 1212, name: '其他' },

            ]
          }
        ]

      })
    }
  }
}
</script>