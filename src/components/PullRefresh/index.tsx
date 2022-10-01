import { defineComponent, ref } from "vue";
import { PullRefresh as PR, Icon, Loading } from "vant";
import dayjs from "dayjs";

export const PullRefresh = defineComponent({
  props: {
    value: {
      type: Boolean,
      default: undefined,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props, context) => {
    const lastTime = ref<number>(Date.now())
    const format = (t: Date | number, formatStr = 'YYYY-MM-DD HH:mm:ss') => {
      if (!t) return '-';
      return dayjs(t).format(formatStr);
    }
    const refresh = () => {

    }

    return (
      <PR
        v-model={props.value}
        headHeight={80}
        successDuration={1000}
        onRefresh={refresh}
      >
        {/* 下拉刷新 */}
        <template v-slot="pulling">
          <p class="flex">
            <Icon
              color="#0084FF"
              name="down"
            />
            &nbsp;下拉可以刷新
          </p>
          <p>上次更新于 {format(lastTime.value)}</p>
        </template>
        {/* 释放提示 */}
        <template v-slot="loosing">
          <p class="flex">
            <Icon
              color="#0084FF"
              class="rotate"
              name="down"
            />
            &nbsp;松开立即刷新
          </p>
          <p>上次更新于 {format(lastTime.value)}</p>
        </template>

        {/* 加载提示 */}
        <template v-slot="loading">
          <Loading
            size={18}
            color="#0084FF"
          >
            正在刷新数据…
          </Loading>
          <p>上次更新于 {format(lastTime.value)}</p>
        </template>

        {/* <!-- 成功提示-- > */}
        <template v-slot="success">
          <p
            v-if="error"
            class="flex"
          >
            <Icon
              size={18}
              color="#0084FF"
              name="fail"
            />
            <span>加载失败</span>
          </p>
          <p
            v-else
            class="flex"
          >
            <Icon
              size={18}
              color="#0084FF"
              name="success"
            />
            &nbsp;
            <span>加载成功</span>
          </p>
          <p>上次更新于 {format(lastTime.value)}</p>
        </template>
        <slot />
      </PR >
    )
  }
})