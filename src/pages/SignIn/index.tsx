import { MainLayout } from '@/components/MainLayout';
import { defineComponent, reactive } from 'vue';
import { Form } from '@/components/Form';
import styles from './index.module.scss';
import { FormItem } from '@/components/Form/Components/FormItem';
import { Rules } from '@/api/types/form';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';

export const SignInPage = defineComponent({
  components: {
    MainLayout,
  },
  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: '',
    });
    const rules: Rules[] = [
      { key: 'email', type: 'required', message: '必填' },
      { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
      { key: 'code', type: 'required', message: '必填' },
    ];

    return () => (
      <MainLayout title="登录" icon="back">
        {{
          default: () => {
            return (
              <div class={styles.wrapper}>
                <div class={styles.logo}>
                  <Icon class={styles.icon} name="logo" />
                  <h1 class={styles.appName}>山竹记账</h1>
                </div>
                <Form formData={formData} rules={rules}>
                  <FormItem
                    label="邮箱地址"
                    prop="email"
                    placeholder="请输入邮箱，然后点击发送验证码"
                  />
                  <FormItem
                    label="验证码"
                    prop="code"
                    type="validation"
                    placeholder="请输入六位数字"
                  />
                  <FormItem style={{ paddingTop: '96px' }}>
                    <Button class={styles.btn}>登录</Button>
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
