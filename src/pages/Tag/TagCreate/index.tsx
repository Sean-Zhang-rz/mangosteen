import { MainLayout } from '@/components/MainLayout';
import { defineComponent } from 'vue';
import styles from './index.module.scss';

export const TagCreate = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout title="新建标签" icon="back">
        <form class={styles.form}>
          <div class={styles.form_row}>
            <label class={styles.form_label}>
              <span class={styles.form_item_name}>标签名</span>
              <div class={styles.form_item_value}>
                <input type="text" class={[styles.form_item, styles.input, styles.error]} />
              </div>
              <div class={styles.form_item_errorHint}>
                <span>必填</span>
              </div>
            </label>
          </div>
          <div class={styles.form_row}>
            <label class={styles.form_label}>
              <span class={styles.form_item_name}>符号</span>
              <div class={styles.form_item_value}>
                <nav>
                  <span>表情</span>
                  <span>手势</span>
                  <span>职业</span>
                  <span>衣服</span>
                  <span>动物</span>
                  <span>自然</span>
                  <span>食物</span>
                  <span>运动</span>
                </nav>
                <ol>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                </ol>
              </div>
              <div class={styles.form_item_errorHint}>
                <span>必填</span>
              </div>
            </label>
          </div>
          <p class={styles.tips}>记账时长安标签即可进行编辑</p>
          <div class={styles.form_row}>
            <button class={[styles.form_item, styles.button]}>提交</button>
          </div>
        </form>
      </MainLayout>
    );
  },
});
