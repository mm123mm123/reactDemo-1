import {useEffect, useRef} from 'react';

const useUpdate = (option: () => void) => {

  let count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      option();
    }
  }, [option]);
};
export {useUpdate};