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
    const lineChartData: [string, number][] = [
      ['2018-01-01T00:00:00.000+0800', 150],
      ['2018-01-02T00:00:00.000+0800', 230],
      ['2018-01-03T00:00:00.000+0800', 224],
      ['2018-01-04T00:00:00.000+0800', 218],
      ['2018-01-05T00:00:00.000+0800', 135],
      ['2018-01-06T00:00:00.000+0800', 147],
      ['2018-01-07T00:00:00.000+0800', 260],
      ['2018-01-08T00:00:00.000+0800', 300],
      ['2018-01-09T00:00:00.000+0800', 200],
      ['2018-01-10T00:00:00.000+0800', 300],
      ['2018-01-11T00:00:00.000+0800', 400],
      ['2018-01-12T00:00:00.000+0800', 500],
      ['2018-01-13T00:00:00.000+0800', 400],
      ['2018-01-14T00:00:00.000+0800', 300],
      ['2018-01-15T00:00:00.000+0800', 200],
      ['2018-01-16T00:00:00.000+0800', 100],
      ['2018-01-17T00:00:00.000+0800', 200],
      ['2018-01-18T00:00:00.000+0800', 300],
      ['2018-01-19T00:00:00.000+0800', 400],
      ['2018-01-20T00:00:00.000+0800', 500],
      ['2018-01-21T00:00:00.000+0800', 600],
      ['2018-01-22T00:00:00.000+0800', 700],
      ['2018-01-23T00:00:00.000+0800', 800],
      ['2018-01-24T00:00:00.000+0800', 900],
      ['2018-01-25T00:00:00.000+0800', 1000],
      ['2018-01-26T00:00:00.000+0800', 1100],
      ['2018-01-27T00:00:00.000+0800', 1200],
      ['2018-01-28T00:00:00.000+0800', 1300],
      ['2018-01-29T00:00:00.000+0800', 1400],
      ['2018-01-30T00:00:00.000+0800', 1500],
      ['2018-01-31T00:00:00.000+0800', 1600],
    ]
    const PieChartOptions: echarts.EChartsOption = {
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
    }
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
        <LineChart data={lineChartData} />
        <PieChart option={PieChartOptions} />
        <BarChart />
      </div>
    );
  },
});
