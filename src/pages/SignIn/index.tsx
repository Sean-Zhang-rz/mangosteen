import { defineComponent, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';
import { MainLayout } from '@/components/MainLayout';
import { Form } from '@/components/Form';
import { FormItem } from '@/components/Form/Components/FormItem';
import { Rules } from '@/api/types/form';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { getValidationCode, signIn } from '@/api/common';
import { onError } from '@/utils/onError';
import { TimerButton } from '../Components/TimerButton';
import styles from './index.module.scss';

export const SignInPage = defineComponent({
  components: { MainLayout },
  setup: (props, context) => {
    const route = useRoute();
    const router = useRouter();
    const refValidationCode = ref<any>('');
    const formData = reactive({
      email: '770899447@qq.com',
      code: '',
    });
    const rules: Rules[] = [
      { key: 'email', type: 'required', message: '必填' },
      { key: 'email', type: 'pattern', regex: /.+@.+/, message: '邮箱地址不正确' },
      { key: 'code', type: 'required', message: '必填' },
    ];

    const onClickSendValidationCode = async () => {
      if (!/.+@.+/.test(formData.email)) {
        Toast('邮箱地址不正确');
        return;
      }
      const res = await getValidationCode({ email: formData.email }).catch(onError);
      refValidationCode.value.startCount();
    };
    const onSubmit = async (e: Event) => {
      const res = await signIn(formData).catch(onError);
      localStorage.setItem('jwt', res.data.jwt);
      const returnTo = route.query.return_to?.toString();
      console.log(returnTo);
      router.push(returnTo || '/');
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
                <Form formData={formData} rules={rules} onSubmit={onSubmit}>
                  <FormItem
                    label="邮箱地址"
                    prop="email"
                    placeholder="请输入邮箱，然后点击发送验证码"
                  />
                  <FormItem label="验证码" prop="code" placeholder="请输入六位数字">
                    {{
                      button: () => (
                        <TimerButton
                          ref={refValidationCode}
                          disabled={!formData.email}
                          onClick={onClickSendValidationCode}
                        />
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
