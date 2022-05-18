import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import styles from './index.module.scss';
import { Icon } from '@/components/Icon';

export const WelcomeRender = defineComponent({
  setup: (props, context) => {
    const card = ref<HTMLDivElement>();
    const slotsArray = [
      {
        icon: () => <Icon name="pig" />,
        title: () => (
          <h2>
            会挣钱
            <br />
            还会省钱
          </h2>
        ),
      },
      {
        icon: () => <Icon name="clock" />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
      },
      {
        icon: () => <Icon name="chart" />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
      },
      {
        icon: () => <Icon name="cloud" />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
      },
    ];
    const pageId = parseInt(useRoute()?.params?.id.toString());
    const item = slotsArray[pageId - 1];

    return () => (
      <div class={styles.card} ref={card}>
        {item.icon()}
        {item.title()}
      </div>
    );
  },
});
