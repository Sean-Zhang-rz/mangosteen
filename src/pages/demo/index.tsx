import PullRefresh from "@/components/PullRefresh";
import { Field } from "vant";
import { defineComponent } from "vue";

const Demo = defineComponent({
  setup: () => {
    const arr: number[] = []
    for (let i = 0; i < 100; i++) {
      arr.push(i)
    }
    return () => <div>
      <PullRefresh>
        <div>
          {
            arr.map(a => <div>{a}</div>)
          }
        </div>
      </PullRefresh>
    </div >
  }
})
export default Demo;