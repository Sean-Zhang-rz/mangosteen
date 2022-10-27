import { MainLayout } from '@/components/MainLayout';
import { computed, defineComponent, reactive, ref } from 'vue';
import { Form } from '@/components/Form';
import styles from './index.module.scss';
import { FormItem } from '@/components/Form/Components/FormItem';
import { Rules } from '@/api/types/form';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { getValidationCode } from '@/api/common';
import { TimerButton } from '../Components/TimerButton';

export const SignInPage = defineComponent({
  components: {
    MainLayout,
  },
  setup: (props, context) => {
    const refValidationCode = ref<any>('');
    const formData = reactive({
      email: '770899447',
      code: '',
    });
    const rules: Rules[] = [
      { key: 'email', type: 'required', message: '必填' },
      { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
      { key: 'code', type: 'required', message: '必填' },
    ];
    const onError = (error: any) => {
      Object.assign(error, error.email);
      throw error;
    };
    const onClickSendValidationCode = async () => {
      const res = await getValidationCode({ email: formData.email }).catch(onError)
      refValidationCode.value.startCount();
    };

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
                  <FormItem label="验证码" prop="code" placeholder="请输入六位数字">
                    {{
                      button: () => (
                        <TimerButton ref={refValidationCode} onClick={onClickSendValidationCode} />
                      ),
                    }}
                  </FormItem>
                  <FormItem style={{ paddingTop: '96px' }}>
                    <Button type="submit" class={styles.btn}>
                      登录
                    </Button>
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
