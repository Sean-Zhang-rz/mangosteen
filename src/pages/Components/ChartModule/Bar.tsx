import { TagDTO } from '@/api/types/tags';
import { computed, defineComponent, PropType, reactive } from 'vue';
import styles from './index.module.scss';
export const BarChart = defineComponent({
  props: {
    data: {
      type: Array as PropType<{
        tag: TagDTO,
        amount: number,
        percent: string
      }[]>,
      required: true
    }
  },
  setup: (props, context) => {
    const data3 = reactive([
      { tag: { id: 1, name: '房租', sign: 'x' }, amount: 3000 },
      { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 1000 },
      { tag: { id: 3, name: '娱乐', sign: 'x' }, amount: 900 },
    ]);

    return () => (
      <div class={styles.bar_wrapper}>
        {props.data.map(({ tag, amount, percent }) => {
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
