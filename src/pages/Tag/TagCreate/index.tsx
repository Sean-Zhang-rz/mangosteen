import { EmojiList } from '@/components/EmojiList';
import { MainLayout } from '@/components/MainLayout';
import { defineComponent, reactive } from 'vue';
import styles from './index.module.scss';

export const TagCreate = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    });
    return () => (
      <MainLayout title="新建标签" icon="back">
        <form class={styles.form}>
          <div class={styles.form_row}>
            <label class={styles.form_label}>
              <span class={styles.form_item_name}>标签名</span>
              <div class={styles.form_item_value}>
                <input
                  v-model={formData.name}
                  class={[styles.form_item, styles.input, styles.error]}
                />
              </div>
              <div class={styles.form_item_errorHint}>
                <span>必填</span>
              </div>
            </label>
          </div>
          <div class={styles.form_row}>
            <label class={styles.form_label}>
              <span class={styles.form_item_name}>符号 {formData.sign}</span>
              <div class={styles.form_item_value}>
                <EmojiList v-model={formData.sign} />
              </div>
              <div class={styles.form_item_errorHint}>
                <span>必填</span>
              </div>
            </label>
          </div>
          <p class={styles.tips}>记账时长安标签即可进行编辑</p>
          <div class={styles.form_row}>
            <button class={[styles.form_item, styles.button]}>提交</button>
          </div>
        </form>
      </MainLayout>
    );
  },
});
