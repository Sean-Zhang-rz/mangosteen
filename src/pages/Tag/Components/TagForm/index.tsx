import { defineComponent, reactive } from 'vue';
import { Rules } from '@/api/types/form';
import { Button } from '@/components/Button';
import { EmojiList } from '@/components/EmojiList';
import { Form } from '@/components/Form';
import { FormItem } from '@/components/Form/Components/FormItem';
import { MainLayout } from '@/components/MainLayout';
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

    const rules: Rules[] = [
      { key: 'name', type: 'required', message: '必填' },
      { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
      { key: 'sign', type: 'required', message: '必填' },
    ];

    return () => (
      <MainLayout title="新建标签" icon="back">
        <Form formData={formData} rules={rules}>
          <FormItem label="标签名" prop="name" />
          <FormItem label={`符号 ${formData.sign}`} prop="sign">
            {{
              default: () => <EmojiList v-model={formData.sign} />,
            }}
          </FormItem>
          <p class={styles.tips}>记账时长按标签即可进行编辑</p>
          <FormItem>
            {{
              default: () => <button class={[styles.form_item, styles.button]}>提交</button>,
            }}
          </FormItem>
        </Form>

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
