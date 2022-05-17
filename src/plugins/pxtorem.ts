import { VueElementConstructor } from 'vue';

export default {
  install(Vue: VueElementConstructor) {
    Vue.prototype.$pxtorem = function pxtorem(px: number) {
      const rem = px / 37.5;
      const fontSize = parseFloat(document.documentElement.style.fontSize);
      return rem * fontSize;
    };
  },
};
