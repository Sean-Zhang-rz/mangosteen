import { defineComponent, onMounted, ref } from 'vue';
import { InputPad } from '@/components/InputPad';
import { MainLayout } from '@/components/MainLayout';
import { Tabs } from '@/components/Tabs';
import { Tab } from '@/components/Tabs/Tab';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { TagDTO } from '@/api/types/tags';
import { getTags } from '@/api/tags';
import { onError } from '@/utils/onError';

import styles from './index.module.scss';
import useTags from '@/hooks/useTags';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref<'支出' | '收入'>('支出');
    const { tags: expensesTagList, hasMore: expensesHasMore } = useTags((p) =>
      getTags({ kind: 'expenses', page: p + 1 }).catch(onError)
    );
    const { tags: incomeTagList, hasMore: incomeHasMore } = useTags((p) =>
      getTags({ kind: 'income', page: p + 1 }).catch(onError)
    );

    return () => (
      <MainLayout title="记一笔" icon="back">
        {{
          default: () => (
            <div class={styles.wrapper}>
              <Tabs v-model:selected={refKind.value} class={styles.tabs}>
                <Tab name="支出" class={styles.tags_wrapper}>
                  <div class={styles.main}>
                    <div class={styles.tag}>
                      <div class={styles.sign}>
                        <Icon name="add" class={styles.createTag} />
                      </div>
                      <div class={styles.name}>新增</div>
                    </div>
                    {expensesTagList.value.map((tag) => (
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>{tag.sign}</div>
                        <div class={styles.name}>{tag.name}</div>
                      </div>
                    ))}
                  </div>
                  <div class={styles.loadMore}>
                    {expensesHasMore.value ? <Button>加载更多</Button> : <span>没有更多了</span>}
                  </div>
                </Tab>
                <Tab name="收入" class={styles.tags_wrapper}>
                  <div class={styles.main}>
                    <div class={styles.tag}>
                      <div class={styles.sign}>
                        <Icon name="add" class={styles.createTag} />
                      </div>
                      <div class={styles.name}>新增</div>
                    </div>
                    {incomeTagList.value.map((tag) => (
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>{tag.sign}</div>
                        <div class={styles.name}>{tag.name}</div>
                      </div>
                    ))}
                  </div>
                  <div class={styles.loadMore}>
                    {incomeHasMore.value ? <Button>加载更多</Button> : <span>没有更多了</span>}
                  </div>
                </Tab>
              </Tabs>
              <div class={styles.inputPad_wrapper}>
                <InputPad />
              </div>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
