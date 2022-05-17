import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import pigSvg from '/src/assets/icons/pig.svg';
import clockSvg from '/src/assets/icons/clock.svg';
import chartSvg from '/src/assets/icons/chart.svg';
import cloudSvg from '/src/assets/icons/cloud.svg';
import styles from './index.module.scss';

export const WelcomeRender = defineComponent({
  setup: (props, context) => {
    const slotsArray = [
      {
        icon: () => <img class={styles.icon} src={pigSvg} />,
        title: () => (
          <h2>
            会挣钱
            <br />
            还会省钱
          </h2>
        ),
      },
      {
        icon: () => <img class={styles.icon} src={clockSvg} />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
      },
      {
        icon: () => <img class={styles.icon} src={chartSvg} />,
        title: () => (
          <h2>
            每日提醒
            <br />
            不遗漏每一笔账单
          </h2>
        ),
      },
      {
        icon: () => <img class={styles.icon} src={cloudSvg} />,
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
      <div class={styles.card}>
        {item.icon()}
        {item.title()}
      </div>
    );
  },
});
