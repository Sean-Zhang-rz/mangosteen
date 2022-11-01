import { defineComponent, onMounted, PropType, ref, watch } from 'vue';
import * as echarts from 'echarts';
import styles from './index.module.scss';
import { Time } from '@/utils/time';
const echartsOption = {
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: ([item]: any) => {
      const [x, y] = item.data
      return `${new Time(new Date(x)).format('YYYY年MM月DD日')} ￥${y}`
    },
  },
  grid: [{ left: 16, top: 20, right: 16, bottom: 20 }],
  xAxis: {
    type: 'time',
    boundaryGap: ['3%', '0%'],
    axisLabel: {
      formatter: (value: string) => new Time(new Date(value)).format('MM-DD'),
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
      },
    },
    axisLabel: {
      show: false,
    },
  },
}

export const LineChart = defineComponent({
  props: {
    data: {
      type: Array as PropType<[string, number][]>,
      required: true
    }
  },
  setup: (props) => {
    const refDiv = ref<HTMLElement>();
    const myChart = ref<echarts.ECharts>()
    onMounted(() => {
      if (!refDiv.value) return;
      myChart.value = echarts.init(refDiv.value);
      myChart.value.setOption({
        ...echartsOption,
        series: [{
          data: props.data,
          type: 'line'
        }]
      });
    });
    watch(() => props.data, () => {
      myChart.value?.setOption({
        series: [{
          data: props.data,
        }]
      });
    })
    return () => <div ref={refDiv} class={styles.line_wrapper}></div>;
  },
});
