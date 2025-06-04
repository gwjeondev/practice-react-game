import React, { memo } from 'react';

//memo, 부모컴포넌트가 rerender 될때에는 자식은 render되지 않게 함. state나 props가 바뀔때만 rerender됨.
const Try = memo(({ value }) => {
  return (
    <li>
      {value.try} / {value.result}
    </li>
  );
});
Try.displayName = 'Try'; //memo를 적용하면 컴포넌트 이름이 바뀜(React Devtools 확인.) 그래서 다시 이름을 Try로 바꾸어준다.

export default Try;
