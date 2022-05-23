import { EmojiList } from '@/components/EmojiList';
import { MainLayout } from '@/components/MainLayout';
import { Rules, validate } from '@/utils/validateForm';
import { spawn } from 'child_process';
import { defineComponent, reactive } from 'vue';
import styles from './index.module.scss';

export const TagCreate = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    });
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
    const checkInput = () => {
      const rules: Rules<typeof formData>[] = [
        { key: 'name', type: 'required', message: '必填' },
        { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
        { key: 'sign', type: 'required', message: '必填' },
      ];
      Object.assign(errors, {
        name: undefined,
        sign: undefined,
      });
      Object.assign(errors, validate(formData, rules));
    };
    const onSubmit = (e: Event) => {
      e.preventDefault();
      checkInput();
    };

    return () => (
      <MainLayout title="新建标签" icon="back">
        <form class={styles.form} onSubmit={onSubmit}>
          <div class={styles.form_row}>
            <label class={styles.form_label}>
              <span class={styles.form_item_name}>标签名</span>
              <div class={styles.form_item_value}>
                <input
                  v-model={formData.name}
                  class={[
                    styles.form_item,
                    styles.input,
                    errors['name']?.length ? styles.error : '',
                  ]}
                />
              </div>
              <div class={styles.form_item_errorHint}>
                <span>{errors['name']?.[0] ? errors['name']?.[0] : '　'}</span>
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
                <span>{errors['sign']?.[0] ? errors['sign']?.[0] : '　'}</span>
              </div>
            </label>
          </div>
          <p class={styles.tips}>记账时长按标签即可进行编辑</p>
          <div class={styles.form_row}>
            <button class={[styles.form_item, styles.button]}>提交</button>
          </div>
        </form>
      </MainLayout>
    );
  },
});
