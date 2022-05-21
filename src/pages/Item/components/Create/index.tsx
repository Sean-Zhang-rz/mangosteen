import { InputPad } from '@/components/InputPad';
import { MainLayout } from '@/components/MainLayout';
import { Tabs } from '@/components/Tabs';
import { Tab } from '@/components/Tabs/Tab';
import { defineComponent, ref } from 'vue';
import styles from './index.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const refKind = ref('支出');

    return () => (
      <MainLayout title="记一笔" icon="back">
        {{
          default: () => (
            <div class={styles.wrapper}>
              <Tabs v-model:selected={refKind.value}>
                <Tab name="支出">icon列表</Tab>
                <Tab name="收入">icon列表2</Tab>
              </Tabs>
              <div class={styles.inputPad_wrapper}>
                <InputPad></InputPad>
              </div>
            </div>
          ),
        }}
      </MainLayout>
    );
  },
});
