import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';

export const App = defineComponent({
  setup() {
    const count = ref(0);
    const onClick = () => {
      count.value += 1;
    };
    return () => (
      <>
        {/* <div>{count.value}</div>
        <button onClick={onClick}>+1</button> */}
        <header>
          导航
          <ul>
            <li>
              <router-link to="/">Foo</router-link>
            </li>
            <li>
              <router-link to="/bar">bar</router-link>
            </li>
          </ul>
        </header>
        <div>
          <RouterView />
        </div>
      </>
    );
  },
});
