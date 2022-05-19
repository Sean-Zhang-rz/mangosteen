import { defineComponent } from 'vue';
import { Button } from '@/components/Button';
import { FloatButton } from '@/components/FloatButton';
import { Icon } from '@/components/Icon';
import { NavBar } from '@/components/NavBar';
import styles from './index.module.scss';

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi');
    };
    return () => (
      <div class={styles.container}>
        <NavBar />
        <div class={styles.icon_wrapper}>
          <Icon name="pig" class={styles.icon} />
        </div>
        <div class={styles.btn_wrapper}>
          <Button class={styles.btn} onClick={onClick}>
            开始记账
          </Button>
        </div>
        <FloatButton name="add" />
      </div>
    );
  },
});
