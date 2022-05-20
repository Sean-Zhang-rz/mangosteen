import { MainLayout } from '@/components/MainLayout';
import { defineComponent } from 'vue';
import styles from './index.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout title="记一笔" icon="back">
        {{
          default: () => {},
        }}
      </MainLayout>
    );
  },
});
