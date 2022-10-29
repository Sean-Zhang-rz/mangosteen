import { defineComponent, reactive, ref } from 'vue';
import { MainLayout } from '@/components/MainLayout';
import { Tabs } from '@/components/Tabs';
import { Tab } from '@/components/Tabs/Tab';
import { InputPad } from '@/components/InputPad';
import { createItems } from '@/api/item';
import { ItemCreateDTO } from '@/api/types/items';
import { onError } from '@/utils/onError';
import Tags from './Tags';
import styles from './index.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const formData = reactive<ItemCreateDTO>({
      kind: 'expenses',
      tag_id: '',
      amount: 0,
      happen_at: new Date().toISOString(),
    });
    const kindMap = { expenses: '支出', income: '收入' };

    const onSubmit = async () => {
      await createItems(formData).catch(onError);
    };
    return () => (
      <MainLayout title="记一笔" icon="back">
        <div class={styles.wrapper}>
          <Tabs v-model:selected={formData.kind} class={styles.tabs}>
            <Tab id="expenses" name="支出" class={styles.tags_wrapper}>
              <div>{JSON.stringify(formData)}</div>
              <Tags v-model:selected={formData.tag_id} kind="expenses" key="expenses" />
            </Tab>
            <Tab id="income" name="收入" class={styles.tags_wrapper}>
              <Tags v-model:selected={formData.tag_id} kind="income" key="income" />
            </Tab>
          </Tabs>
          <div class={styles.inputPad_wrapper}>
            <InputPad
              v-model:happenAt={formData.happen_at}
              v-model:amount={formData.amount}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </MainLayout>
    );
  },
});
