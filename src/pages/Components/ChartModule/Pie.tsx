import { defineComponent, onMounted, PropType, ref } from 'vue';
import * as echarts from 'echarts';
import styles from './index.module.scss';

export const PieChart = defineComponent({
  props: {
    option: {
      type: Object as PropType<echarts.EChartsOption>,
      required: true
    }
  },
  setup: (props) => {
    const refDiv = ref<HTMLDivElement>();
    onMounted(() => {
      if (refDiv.value === undefined) return;

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(refDiv.value);
      // 绘制图表
      myChart.setOption(props.option);
    });
    return () => <div ref={refDiv} class={styles.pie_wrapper}></div>;
  },
});
