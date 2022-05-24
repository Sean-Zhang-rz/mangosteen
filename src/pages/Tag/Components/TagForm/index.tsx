import { Rules } from '@/api/types/form';
import { Button } from '@/components/Button';
import { EmojiList } from '@/components/EmojiList';
import form from '@/components/Form';
import { FormItem } from '@/components/Form/Components/FormItem';
import { MainLayout } from '@/components/MainLayout';
import { validate } from '@/utils/validateForm';
import { defineComponent, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import styles from './index.module.scss';

type tagPageType = 'show' | 'edit';

export const TagForm = defineComponent({
  setup: (props, context) => {
    const tagPageType: tagPageType = useRoute().params.type as tagPageType;
    const tagName = useRoute().query.tagName as string;
    const tagSign = useRoute().query.tagSign as string;
    const formData = reactive({
      name: tagName || '',
      sign: tagSign || '',
    });
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
    const rules: Rules<typeof formData>[] = [
      { key: 'name', type: 'required', message: '必填' },
      { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
      { key: 'sign', type: 'required', message: '必填' },
    ];
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
    const FormComponent = form<typeof formData>();

    watch(formData, (newValue) => {
      console.log('formData', newValue);
    });
    return () => (
      <MainLayout title="新建标签" icon="back">
        {/* <form class={styles.form} onSubmit={onSubmit}>
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
        </form> */}

        <FormComponent formData={formData} rules={rules}>
          <FormItem label="标签名" prop="name" />
          <FormItem prop="sign">
            {{
              label: () => `符号 ${formData.sign}`,
              default: () => <EmojiList v-model={formData.sign} />,
            }}
          </FormItem>
        </FormComponent>
        <p class={styles.tips}>记账时长按标签即可进行编辑</p>
        <div class={styles.form_row}>
          <button class={[styles.form_item, styles.button]}>提交</button>
        </div>
        {tagPageType === 'edit' ? (
          <div class={styles.actions}>
            <Button level="danger" class={styles.removeTags} onClick={() => {}}>
              删除标签
            </Button>
            <Button level="danger" class={styles.removeTagsAndItems} onClick={() => {}}>
              删除标签和记账
            </Button>
          </div>
        ) : null}
      </MainLayout>
    );
  },
});
