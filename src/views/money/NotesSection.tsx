import styled from 'styled-components';
import React, {ChangeEvent} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;
type Props = {
  value: string
  onChange: (note: string) => void
}
const NotesSection: React.FC<Props> = (props) => {

  function updateNote(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value);
  }

  return (
    <Wrapper>
      <label>
        <Input name='备注' type="text" placeholder="在这里添加备注"
               value={props.value} onChange={updateNote}
        />
      </label>
    </Wrapper>
  );
};
export {NotesSection};