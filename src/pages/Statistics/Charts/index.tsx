import { computed, defineComponent, onMounted, PropType, ref } from 'vue';
import * as echarts from 'echarts';
import { FormItem } from '@/components/Form/Components/FormItem';
import styles from './index.module.scss';
import { LineChart } from '@/pages/Components/ChartModule/Line';
import { PieChart } from '@/pages/Components/ChartModule/Pie';
import { BarChart } from '@/pages/Components/ChartModule/Bar';
import { getSummary } from '@/api/item';
import { onError } from '@/utils/onError';
import { ItemSummaryDTO } from '@/api/types/items';
import { Time } from '@/utils/time';

export const Charts = defineComponent({
  props: {
    startDate: {
      type: String as PropType<string>,
      default: new Time().firstDayOfMonth().format(),
      required: true,
    },
    endDate: {
      type: String as PropType<string>,
      default: new Time().lastDayOfMonth().format(),
      required: true,
    },
  },
  setup: (props, context) => {
    const category = ref('expenses');
    const lineChartRawData = ref<ItemSummaryDTO>()
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
    const getItemSummary = async () => {
      const result = await getSummary().catch(onError)
      lineChartRawData.value = result.data;
    }

    const lineChartData = computed<[string, number][]>(() => {
      let dataIndex = 0;
      const days = (+new Date(props.endDate) - +new Date(props.startDate)) / 86400000 + 1
      const arr: [string, number][] = Array.from(new Array(days), (_, d) => {
        const time = new Time(props.startDate).add(d, 'day').getRaw().toISOString()
        const data = lineChartRawData.value?.groups;
        return [time, time === data?.[dataIndex]?.happen_at ? data[dataIndex++].amount : 0]
      })
      console.log(arr.length);
      return arr
    })
    onMounted(getItemSummary)
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
        {
          lineChartData.value?.length ? <LineChart data={lineChartData.value} /> : null
        }
        {
          PieChartOptions?.length ? <PieChart option={PieChartOptions} /> : null
        }
        <BarChart />
      </div>
    );
  },
});
