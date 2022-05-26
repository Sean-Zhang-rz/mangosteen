import { defineComponent, reactive, ref } from 'vue';
import { MainLayout } from '@/components/MainLayout';
import { Tabs } from '@/components/Tabs';
import { Tab } from '@/components/Tabs/Tab';
import { Time } from '@/utils/time';
import { ItemSummary } from '../Summary';

import styles from './index.module.scss';
import { DatetimePicker, Popup } from 'vant';
import form from '@/components/Form';
import formItem from '@/components/Form/Components/FormItem';

export const ItemList = defineComponent({
  setup: (props, context) => {
    const refSelected = ref('本月');
    const show = ref(false);
    const refDateVisible = ref(false);
    const time = new Time();
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format(),
    });
    const timeList = [
      {
        start: time.firstDayOfMonth(),
        end: time.lastDayOfMonth(),
      },
      {
        start: time.add(-1, 'month').firstDayOfMonth(),
        end: time.add(-1, 'month').lastDayOfMonth(),
      },
      {
        start: time.firstDayOfYear(),
        end: time.lastDayOfYear(),
      },
    ];
    const Form = form<typeof customTime>();
    const FormItem = formItem<{ [k in keyof typeof customTime]?: string[] }>();
    const clickCustomTime = () => {
      show.value = true;
    };
    return () => (
      <MainLayout title="山竹记账" icon="menu">
        {{
          default: () => (
            <>
              <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                <Tab name="本月">
                  <ItemSummary
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].end.format()}
                  />
                </Tab>
                <Tab name="上月">
                  {' '}
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].end.format()}
                  />
                </Tab>
                <Tab name="今年">
                  <ItemSummary
                    startDate={timeList[2].start.format()}
                    endDate={timeList[2].end.format()}
                  />
                </Tab>
                <Tab name="自定义时间" onClick={clickCustomTime}>
                  <ItemSummary startDate={customTime.start} endDate={customTime.end} />
                </Tab>
              </Tabs>
              {/* <Dialog.Component
                v-model:show={show.value}
                show-cancel-button={true}
                closeOnClickOverlay={true}
                cancel={() => {
                  show.value = false;
                }}
              > */}
              <Form formData={customTime}>
                <FormItem label="开始时间" prop="start" type="date">
                  {/* <input
                    readonly={true}
                    value={customTime.start}
                    onClick={() => {
                      refDateVisible.value = true;
                    }}
                    class={[styles.formItem, styles.input]}
                  />
                  <Popup position="bottom" v-model:show={refDateVisible.value}>
                    <DatetimePicker
                      value={customTime.start}
                      type="date"
                      title="选择年月日"
                      onConfirm={(date: Date) => {
                        context.emit('update:modelValue', new Time(date).format());
                        refDateVisible.value = false;
                      }}
                      onCancel={() => (refDateVisible.value = false)}
                    />
                  </Popup> */}
                </FormItem>
                <FormItem label="结束时间" prop="end" />
              </Form>
              {/* </Dialog.Component> */}
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
