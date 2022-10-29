import { defineComponent, ref } from 'vue';
import { MainLayout } from '@/components/MainLayout';
import { Tabs } from '@/components/Tabs';
import { Tab } from '@/components/Tabs/Tab';
import { InputPad } from '@/components/InputPad';
import Tags from './Tags';
import styles from './index.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref<'支出' | '收入'>('支出');
    return () => (
      <MainLayout title="记一笔" icon="back">
        <div class={styles.wrapper}>
          <Tabs v-model:selected={refKind.value} class={styles.tabs}>
            <Tab name="支出" class={styles.tags_wrapper}>
              <Tags kind="expenses" key="expenses" />
            </Tab>
            <Tab name="收入" class={styles.tags_wrapper}>
              <Tags kind="income" key="income" />
            </Tab>
          </Tabs>
          <div class={styles.inputPad_wrapper}>
            <InputPad />
          </div>
        </div>
      </MainLayout>
    );
  },
});
