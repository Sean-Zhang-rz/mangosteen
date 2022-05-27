import { defineComponent } from 'vue';
import { ItemSummary } from '../Summary';
import { TimeTabsLayout } from '@/pages/Components/TimeTabsLayout';

export const ItemList = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout component={ItemSummary} />;
  },
});
