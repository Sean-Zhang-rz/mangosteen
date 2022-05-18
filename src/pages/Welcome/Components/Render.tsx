import { defineComponent, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import pigSvg from '/src/assets/icons/pig.svg';
import clockSvg from '/src/assets/icons/clock.svg';
import chartSvg from '/src/assets/icons/chart.svg';
import cloudSvg from '/src/assets/icons/cloud.svg';
import styles from './index.module.scss';
import { useSwipe } from '../../../hooks/useSwipe';

export const WelcomeRender = defineComponent({
  setup: (props, context) => {
    const card = ref<HTMLDivElement>();
    const router = useRouter();
    const { swiping, direction } = useSwipe(card);

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
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push(pageId === 4 ? '/start' : `/welcome/${pageId + 1}`);
      }
    });
    const item = slotsArray[pageId - 1];

    return () => (
      <div class={styles.card} ref={card}>
        {item.icon()}
        {item.title()}
      </div>
    );
  },
});
