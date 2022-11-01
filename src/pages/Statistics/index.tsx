import { defineComponent } from 'vue';
import { Charts } from '@/pages/Statistics/Charts';
import { TimeTabsLayout } from '@/pages/Components/TimeTabsLayout';

export const StatisticsPage = defineComponent({
  setup: () => () => <TimeTabsLayout component={Charts} showYear={false} />,
});
