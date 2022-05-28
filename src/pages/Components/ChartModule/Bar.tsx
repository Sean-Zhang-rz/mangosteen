import { computed, defineComponent, PropType, reactive } from 'vue';
import styles from './index.module.scss';
export const BarChart = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const data3 = reactive([
      { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
      { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
      { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },
    ]);
    const betterData3 = computed(() => {
      const total = data3.reduce((sum, item) => sum + item.amount, 0);
      return data3.map((item) => ({
        ...item,
        percent: Math.round((item.amount / total) * 100) + '%',
      }));
    });
    return () => (
      <div class={styles.bar_wrapper}>
        {betterData3.value.map(({ tag, amount, percent }) => {
          return (
            <div class={styles.topItem}>
              <div class={styles.sign}>{tag.sign}</div>
              <div class={styles.bar_wrapper}>
                <div class={styles.bar_text}>
                  <span>
                    {' '}
                    {tag.name} - {percent}{' '}
                  </span>
                  <span> ￥{amount} </span>
                </div>
                <div class={styles.bar}>
                  <div class={styles.bar_inner}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
});
