import { computed, defineComponent, onMounted, PropType, reactive, ref } from 'vue';
import * as echarts from 'echarts';
import { FormItem } from '@/components/Form/Components/FormItem';
import styles from './index.module.scss';
import { LineChart } from '@/pages/Components/ChartModule/Line';
import { PieChart } from '@/pages/Components/ChartModule/Pie';
import { BarChart } from '@/pages/Components/ChartModule/Bar';
import { getSummary } from '@/api/item';
import { onError } from '@/utils/onError';
import { ItemSummaryByHappenAt, ItemSummaryByTagId, ItemSummaryDTO } from '@/api/types/items';
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
    const kind = ref('expenses');
    const rawData = reactive<{
      line: ItemSummaryByHappenAt | null,
      pie: ItemSummaryByTagId | null
    }>({ line: null, pie: null })
    const getItemSummary = async () => {
      const line = await getSummary({
        happen_after: props.startDate,
        happen_before: props.endDate,
        kind: kind.value,
        group_by: 'happen_at'
      }).catch(onError)
      const pie = await getSummary({
        happen_after: props.startDate,
        happen_before: props.endDate,
        kind: kind.value,
        group_by: 'tag_id'
      }).catch(onError)
      Object.assign(rawData, { line, pie })
    }

    const lineChartData = computed<[string, number][]>(() => {
      let dataIndex = 0;
      const days = (+new Date(props.endDate) - +new Date(props.startDate)) / 86400000 + 1
      const arr: [string, number][] = Array.from(new Array(days), (_, d) => {
        const time = new Time(props.startDate).add(d, 'day').getRaw().toISOString()
        const data = rawData.line?.groups;
        return [time, time === data?.[dataIndex]?.happen_at ? data[dataIndex++].amount : 0]
      })
      console.log(arr.length);
      return arr
    })
    const pieChartData = computed<{
      value: number,
      name: string
    }[]>(() => rawData.pie?.groups.map(item => ({
      value: item.amount,
      name: item.tag_name
    })) || [])

    onMounted(getItemSummary)
    return () => (
      <div class={styles.wrapper}>
        <FormItem
          v-model={kind.value}
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
          pieChartData.value?.length ? <PieChart data={pieChartData.value} /> : null
        }
        <BarChart />
      </div>
    );
  },
});
