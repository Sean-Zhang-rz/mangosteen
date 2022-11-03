import { defineComponent } from 'vue';
import { TimeTabsLayout } from '@/pages/Components/TimeTabsLayout';
import { ItemSummary } from '../Summary';

export const ItemList = defineComponent({
  setup: () => () => <TimeTabsLayout component={ItemSummary} />,
});
