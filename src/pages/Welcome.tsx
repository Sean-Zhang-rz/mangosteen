import { defineComponent } from 'vue';
import { WelcomeLayout } from '../components/WelcomeLayout';

export const Welcome = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <span>icon</span>,
      title: () => 'hi',
      buttons: () => (
        <>
          <button>+1</button>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots} />;
  },
});
