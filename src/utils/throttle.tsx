export const throttle = (fn: Function, time: number) => {
  let timer: number | undefined = undefined;
  return () => {
    if (timer) {
      return;
    } else {
      fn();
      timer = setTimeout(() => {
        timer = undefined;
      }, time);
    }
  };
};
