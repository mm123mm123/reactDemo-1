import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
    > ul{
      display:flex;
      background:#c4c4c4;
      > li {
        width: 50%; 
        text-align:center;
        padding: 16px 0;
        position:relative;
        &.selected::after{
          content: '';
          display:block; 
          height: 3px;
          background:#333;
          position:absolute;
          bottom:0;
          width: 100%;
          left: 0;
        }
      }
    }
`;
type Props = {
  value: string
  onChange: (category: '+'|'-') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type categoryMapKey=keyof typeof categoryMap;
  return (
    <Wrapper>
      <ul>
        {Object.keys(categoryMap).map(c=> (
          <li key={c} className={props.value === c ? 'selected' : ''}
              onClick={() => props.onChange(c as categoryMapKey)}>
            {categoryMap[c as categoryMapKey]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};