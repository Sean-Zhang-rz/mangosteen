import { defineComponent } from 'vue';
import { Charts } from '@/pages/Statistics/Charts';
import { TimeTabsLayout } from '@/pages/Components/TimeTabsLayout';

export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => <TimeTabsLayout component={Charts} />
  },
});
