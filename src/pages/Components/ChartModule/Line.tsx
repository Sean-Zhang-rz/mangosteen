import { defineComponent, onMounted, PropType, ref } from 'vue';
import * as echarts from 'echarts';
import styles from './index.module.scss';

export const LineChart = defineComponent({
  props: {
    option: {
      type: Object as PropType<echarts.EChartsOption>,
      required: true
    }
  },
  setup: (props) => {
    const refDiv = ref<HTMLElement>();
    onMounted(() => {
      if (!refDiv.value) return;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv.value);
      // 绘制图表
      myChart.setOption(props.option);
    });
    return () => <div ref={refDiv} class={styles.line_wrapper}></div>;
  },
});
