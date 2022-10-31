import { defineComponent, onMounted, PropType, ref } from 'vue';
import { FloatButton } from '@/components/FloatButton';
import styles from './index.module.scss';
import { ItemDTO } from '@/api/types/items';
import { getItems } from '@/api/item';
import { onError } from '@/utils/onError';
import { Button } from '@/components/Button';
import { DateTime } from '@/pages/Components/Datetime';

export const ItemSummary = defineComponent({
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
    const itemList = ref<ItemDTO[]>([]);
    const hasMore = ref(false);
    const page = ref(0);
    const fetchItems = async () => {
      const {
        data: { itemsList: items, pager },
      } = await getItems({
        happen_at: props.startDate,
        happen_before: props.endDate,
        page: page.value + 1,
      }).catch(onError);
      itemList.value.push(...items);
      hasMore.value = (pager.page - 1) * pager.per_page + items.length < pager.count;
      page.value += 1;
    };

    onMounted(fetchItems);

    return () => (
      <div class={styles.wrapper}>
        <ul class={styles.total}>
          <li>
            <span>收入</span>
            <span>128</span>
          </li>
          <li>
            <span>支出</span>
            <span>99</span>
          </li>
          <li>
            <span>净收入</span>
            <span>39</span>
          </li>
        </ul>
        {itemList.value.length ? (
          <>
            <ol class={styles.list}>
              {itemList.value.map((item) => (
                <li>
                  <div class={styles.sign}>
                    <span>{item.tags_id[0]}</span>
                  </div>
                  <div class={styles.text}>
                    <div class={styles.tagAndAmount}>
                      <span class={styles.tag}>{item.tags_id[0]}</span>
                      <span class={styles.amount}>
                        ￥<>{item.amount}</>
                      </span>
                    </div>
                    <div class={styles.time}>
                      <DateTime value={item.happen_at} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div class={styles.more}>
              {hasMore.value ? (
                <Button onClick={fetchItems}>向下滑动加载更多</Button>
              ) : (
                <span>没有更多了</span>
              )}
            </div>
          </>
        ) : (
          <div>记录为空</div>
        )}
        <FloatButton name="add" />
      </div>
    );
  },
});
