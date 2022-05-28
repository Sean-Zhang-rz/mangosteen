import { defineComponent, PropType, onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { FormItem } from '@/components/Form/Components/FormItem';
import styles from './index.module.scss';
import { LineChart } from '@/pages/Components/ChartModule/Line';
import { PieChart } from '@/pages/Components/ChartModule/Pie';
import { BarChart } from '@/pages/Components/ChartModule/Bar';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    const category = ref('expenses');
    const refDiv = ref<HTMLDivElement>();
    const refDiv2 = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv.value === undefined || refDiv2.value === undefined) return;
      // 基于准备好的dom，初始化echarts实例
      const lineChart = echarts.init(refDiv.value);
      const pieChart = echarts.init(refDiv2.value);
      // 绘制图表
      lineChart.setOption({
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      });
      pieChart.setOption({
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      });
    });
    return () => (
      <div class={styles.wrapper}>
        <FormItem
          v-model={category.value}
          label="类型"
          type="select"
          options={[
            { value: 'expenses', text: '支出' },
            { value: 'income', text: '收入' },
          ]}
        />
        <LineChart />
        <PieChart />
        <BarChart />
      </div>
    );
  },
});
