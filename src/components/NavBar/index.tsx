import { defineComponent, PropType } from 'vue';
import { Icon, IconName } from '../Icon';
import styles from './index.module.scss';

export const NavBar = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<IconName>,
    },
  },
  setup: ({ title, icon }, context) => {
    // const { slots } = context;
    return () => (
      <div class={styles.navbar}>
        {icon ? (
          <span class={styles.icon_wrapper}>
            <Icon name={icon} class={styles.icon} />
          </span>
        ) : null}
        <span class={styles.title_wrapper}>{title}</span>
      </div>
    );
  },
});
