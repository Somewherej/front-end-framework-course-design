<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card>
        <div style="width: 500px ;height: 350px" id="min"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="never">

        <div style="width: 500px ;height: 350px" id="main">
          <h3>浏览器统计</h3>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="12">
    <el-col :span="12">
      <el-card>
        <div style="width: 500px ;height: 350px" id="peak"></div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="never">

        <div style="width: 500px ;height: 350px" id="statistics">
          <h3>浏览器统计</h3>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from 'echarts';

const handleClick = () => {  // eslint-disable-line no-unused-vars
  alert('button click')
}
const colors = ['#5470C6', '#EE6666'];

export default {

  mounted() {
    this.echartsInit()
  },

  methods:{

    echartsInit() {

      echarts.init(document.getElementById('main')).setOption({
        title: {
          text: '周访问量',
        },
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
      echarts.init(document.getElementById('min')).setOption({
        title: {
          text: '浏览器分布',
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '8%',
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
      echarts.init(document.getElementById('peak')).setOption({
        title: {
          text: '日访问量峰值图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} W'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: 'green'
            },
            {
              gt: 6,
              lte: 8,
              color: 'red'
            },
            {
              gt: 8,
              lte: 14,
              color: 'green'
            },
            {
              gt: 14,
              lte: 17,
              color: 'red'
            },
            {
              gt: 17,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: '访问量',
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
                [
                  {
                    name: 'Morning Peak',
                    xAxis: '07:30'
                  },
                  {
                    xAxis: '10:00'
                  }
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '17:30'
                  },
                  {
                    xAxis: '21:15'
                  }
                ]
              ]
            }
          }
        ]
      })
      echarts.init(document.getElementById('statistics')).setOption({

        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {},
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                      'Precipitation  ' +
                      params.value +
                      (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                }
              }
            },
            // prettier-ignore
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                      'Precipitation  ' +
                      params.value +
                      (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                }
              }
            },
            // prettier-ignore
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '点赞量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '转载量',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series'
            },
            data: [
              3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
            ]
          }
        ]
      })
    }
  }
}
</script>