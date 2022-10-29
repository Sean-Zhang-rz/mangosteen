import { defineComponent } from 'vue';
import { getTags } from '@/api/tags';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import useTags from '@/hooks/useTags';
import { onError } from '@/utils/onError';

import styles from './index.module.scss';
const Tags = defineComponent({
  props: {
    kind: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const {
      tags: tagList,
      hasMore,
      getTagList,
    } = useTags((p) => getTags({ kind: props.kind, page: p + 1 }).catch(onError));
    return () => (
      <>
        <div class={styles.main}>
          <div class={styles.tag}>
            <div class={styles.sign}>
              <Icon name="add" class={styles.createTag} />
            </div>
            <div class={styles.name}>新增</div>
          </div>
          {tagList.value.map((tag) => (
            <div class={[styles.tag, styles.selected]}>
              <div class={styles.sign}>{tag.sign}</div>
              <div class={styles.name}>{tag.name}</div>
            </div>
          ))}
        </div>
        <div class={styles.loadMore}>
          {hasMore.value ? <Button onClick={getTagList}>加载更多</Button> : <span>没有更多了</span>}
        </div>
      </>
    );
  },
});

export default Tags;
