import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper=styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
const NotesSection: React.FC=()=>{
  const [note,setNote]=useState('')
  const refInput=React.useRef<HTMLInputElement>(null);
  function updateNote(){
    if(refInput.current!==null && refInput.current.value!==''){
      setNote(refInput.current.value)
    }
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               onBlur={updateNote}
               defaultValue={note}
        />
      </label>
    </Wrapper>
  )
}
export {NotesSection}