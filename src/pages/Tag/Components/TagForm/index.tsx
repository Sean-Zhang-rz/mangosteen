import { defineComponent, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Rules } from '@/api/types/form';
import { Button } from '@/components/Button';
import { EmojiList } from '@/components/EmojiList';
import { Form } from '@/components/Form';
import { FormItem } from '@/components/Form/Components/FormItem';
import { MainLayout } from '@/components/MainLayout';
import { createTag } from '@/api/tags';
import { onError } from '@/utils/onError';
import styles from './index.module.scss';

type tagPageType = 'show' | 'edit';

export const TagForm = defineComponent({
  setup: (props, context) => {
    const route = useRoute();
    const router = useRouter();
    const tagPageType: tagPageType = route.params.type as tagPageType;
    const tagName = route.query.tagName?.toString();
    const tagSign = route.query.tagSign?.toString();
    const kind = route.query.kind?.toString() as 'expenses' | 'income';

    const formData = reactive({
      name: tagName || '',
      sign: tagSign || '',
      kind,
    });

    const rules: Rules[] = [
      { key: 'name', type: 'required', message: '必填' },
      { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
      { key: 'sign', type: 'required', message: '必填' },
    ];

    const submit = async () => {
      if (!formData.kind) throw Error('类型参数缺失');
      await createTag(formData).catch(onError);
      router.back();
    };
    return () => (
      <MainLayout title="新建标签">
        <Form formData={formData} rules={rules} onSubmit={submit}>
          <FormItem label="标签名" prop="name" />
          <FormItem label={`符号 ${formData.sign}`} prop="sign">
            <EmojiList v-model={formData.sign} />,
          </FormItem>
          <p class={styles.tips}>记账时长按标签即可进行编辑</p>
          <FormItem>
            <Button class={[styles.form_item, styles.button]} type="submit">
              提交
            </Button>
            ,
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
