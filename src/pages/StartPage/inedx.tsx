import { defineComponent } from 'vue';
import { Button } from '../../components/Button';
import styles from './index.module.scss';

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi');
    };
    return () => (
      <div class={styles.btn_wrapper}>
        <Button class={styles.btn} onClick={onClick}>
          开始记账
        </Button>
      </div>
    );
  },
});
