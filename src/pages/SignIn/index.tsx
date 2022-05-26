import { MainLayout } from '@/components/MainLayout';
import { defineComponent, reactive } from 'vue';
import form from '@/components/Form';
import styles from './index.module.scss';
import formItem from '@/components/Form/Components/FormItem';
import { Rules } from '@/api/types/form';

export const SignInPage = defineComponent({
  components: {
    MainLayout,
  },
  setup: (props, context) => {
    const formData = reactive({
      emailAddress: '',
      validationCode: '',
    });
    const rules: Rules<typeof formData>[] = [
      { key: 'emailAddress', type: 'required', message: '必填' },
      { key: 'emailAddress', type: 'pattern', regex: /^.{1,4}$/, message: '只能填1到4个字符' },
      { key: 'validationCode', type: 'required', message: '必填' },
    ];
    const Form = form<typeof formData>();
    const FormItem = formItem<{ [k in keyof typeof formData]?: string[] }>();
    return () => (
      <MainLayout title="登录" icon="back">
        {{
          default: () => {
            return (
              <div class={styles.wrapper}>
                <Form formData={formData} rules={rules}>
                  <FormItem prop="index" label="test">
                    123
                  </FormItem>
                </Form>
              </div>
            );
          },
        }}
      </MainLayout>
    );
  },
});
