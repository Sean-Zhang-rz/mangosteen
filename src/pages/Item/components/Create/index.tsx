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


export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref<'支出' | '收入'>('支出');
    const refPage = ref<number>(0)
    const refHasMore = ref<boolean>(false)
    const refExpensesTags = ref<TagDTO[]>([]);
    const refIncomeTags = ref<TagDTO[]>([]);

    onMounted(async () => {
      const { tagList: eTagList, pager: ePager } = await getTags({ kind: 'expenses' }).catch(onError)
      const income = await getTags({ kind: 'income' }).catch(onError)
      refExpensesTags.value = eTagList;
      refIncomeTags.value = income.tagList;
      refHasMore.value = (ePager.page - 1) * ePager.per_page + eTagList.length < ePager.count
      refPage.value = 1
    })
    const showMore = async () => {
      const { tagList, pager } = await getTags({
        kind: 'expenses',
        page: refPage.value + 1
      }).catch(onError)
    }

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
                    {refExpensesTags.value.map((tag) => (
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>{tag.sign}</div>
                        <div class={styles.name}>{tag.name}</div>
                      </div>
                    ))}
                  </div>
                  <div class={styles.loadMore}>
                    {refHasMore.value ? <Button onClick={showMore}>
                      加载更多
                    </Button> : <span>没有更多了</span>}
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
                    {refIncomeTags.value.map((tag) => (
                      <div class={[styles.tag, styles.selected]}>
                        <div class={styles.sign}>{tag.sign}</div>
                        <div class={styles.name}>{tag.name}</div>
                      </div>
                    ))}
                  </div>
                  <div class={styles.loadMore}>
                    {refHasMore.value ? <Button onClick={showMore}>
                      加载更多
                    </Button> : <span>没有更多了</span>}
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
