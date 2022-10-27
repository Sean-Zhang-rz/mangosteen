import { computed, defineComponent, PropType, ref } from 'vue';
import { Button } from '@/components/Button';

export const TimerButton = defineComponent({
  props: {
    countFrom: {
      type: Number,
      default: 60,
    },
    onClick: {
      type: Function as PropType<(e?: MouseEvent) => void>,
    },
  },
  setup: (props) => {
    const timer = ref<number | NodeJS.Timer>();
    const count = ref<number>(props.countFrom);
    const isCounting = computed(() => !!timer.value);
    const onClick = () => {
      props.onClick?.();
      timer.value = setInterval(() => {
        count.value -= 1;
        if (count.value === 0) {
          clearInterval(timer.value as NodeJS.Timer);
          timer.value = undefined;
          count.value = props.countFrom;
        }
      }, 1000);
    };
    return () => (
      <Button disabled={isCounting.value} onClick={onClick}>
        {isCounting.value ? count.value : '发送验证码'}
      </Button>
    );
  },
});
