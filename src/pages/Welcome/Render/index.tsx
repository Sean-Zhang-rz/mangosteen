import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Layout } from '../Layout';
import pigSvg from '/src/assets/icons/pig.svg';
import clockSvg from '/src/assets/icons/clock.svg';
import chartSvg from '/src/assets/icons/chart.svg';
import cloudSvg from '/src/assets/icons/cloud.svg';
import styles from '../index.module.scss';

export const WelcomeRender = defineComponent({
  setup: (props, context) => {
    console.log(context);

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
        buttons: () => (
          <>
            <RouterLink class={styles.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
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
        buttons: () => (
          <>
            <RouterLink class={styles.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink to="/welcome/3">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
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
        buttons: () => (
          <>
            <RouterLink class={styles.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
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
        buttons: () => (
          <>
            <RouterLink class={styles.fake} to="/start">
              跳过
            </RouterLink>
            <RouterLink to="/start">完成</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
          </>
        ),
      },
    ];
    const pageId = parseInt(useRoute()?.params?.id.toString());
    const item = slotsArray[pageId - 1];

    return () => <Layout>{item}</Layout>;
  },
});
