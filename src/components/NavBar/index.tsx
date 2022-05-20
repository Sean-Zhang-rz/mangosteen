import { defineComponent, PropType, ref } from 'vue';
import { Icon, IconName } from '../Icon';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

export const NavBar = defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<IconName>,
      default: 'back',
    },
  },
  setup: ({ title, icon }) => {
    const overlayVisible = ref(false);
    const goBack = () => {};
    const openMenu = () => {
      overlayVisible.value = !overlayVisible.value;
    };
    return () => (
      <div class={styles.navbar}>
        {icon ? (
          <span class={styles.icon_wrapper}>
            <Icon name={icon} class={styles.icon} onClick={icon === 'menu' ? openMenu : goBack} />
          </span>
        ) : null}
        <span class={styles.title_wrapper}>{title}</span>
        {icon === 'menu' && overlayVisible.value === true ? (
          <Overlay
            onClose={() => {
              overlayVisible.value = false;
            }}
          />
        ) : null}
      </div>
    );
  },
});
