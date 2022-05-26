import { defineComponent, PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { Icon } from '../Icon';
import styles from './index.module.scss';

export const OverlayIcon = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>,
    },
  },
  setup: (props, context) => {
    const close = () => {
      props.onClose?.();
    };
    const onClickSignIn = () => {};

    return () => (
      <>
        <div class={styles.mask} onClick={close}></div>
        <div class={styles.overlay}>
          <section class={styles.currentUser} onClick={onClickSignIn}>
            <h2>未登录用户</h2>
            <p>点击这里登录</p>
          </section>
          <nav>
            <ul class={styles.action_list}>
              <li>
                <RouterLink to="/statistics" class={styles.action}>
                  <Icon name="charts" class={styles.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/export" class={styles.action}>
                  <Icon name="export" class={styles.icon} />
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/notify" class={styles.action}>
                  <Icon name="notify" class={styles.icon} />
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});
