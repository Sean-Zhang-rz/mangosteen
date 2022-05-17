import { defineComponent } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import styles from './index.module.scss';

export const WelcomeAction = defineComponent({
  setup: (props, context) => {
    const id = parseInt(useRoute()?.params?.id.toString());

    return () => (
      <div class={styles.actions}>
        <RouterLink class={styles.fake} to="/start">
          跳过
        </RouterLink>
        <RouterLink to={id <= 3 ? `/welcome/${id + 1}` : '/start'}>
          {id <= 3 ? '下一页' : '完成'}
        </RouterLink>
        <RouterLink to="/start">跳过</RouterLink>
      </div>
    );
  },
});
