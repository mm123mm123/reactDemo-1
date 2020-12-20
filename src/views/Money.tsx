import React, {useState} from 'react';
import Layout from '../components/Layout';
import {TagsSection} from './money/TagsSection';
import styled from 'styled-components';
import {NotesSection} from './money/NotesSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPad/NumberPadSection';
import {useRecord} from '../Hooks/useRecord';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
  .categorySectionUl{
    background:#c4c4c4;
  }
`;

const defaultValue={
  selectedTags: [] as number[],
  note: '',
  category: '-',
  number: '0'
}
function Money() {
  const [newRecordItem, setNewRecord] = useState<record>(defaultValue as record);
  const {updateRecord} = useRecord();
  const onChange = (obj: Partial<typeof newRecordItem>) => {
    setNewRecord({...newRecordItem, ...obj});
  };
  const submit = () => {
    if(updateRecord(newRecordItem)){
      setNewRecord(defaultValue as record)
    }
  };
  return (
    <MyLayout>
      <TagsSection value={newRecordItem.selectedTags} onChange={selectedTags => onChange({selectedTags})}/>
      <NotesSection value={newRecordItem.note} onChange={note => onChange({note})}/>
      <CategorySection value={newRecordItem.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={newRecordItem.number} onChange={number => onChange({number})} onOK={submit}/>
    </MyLayout>
  );
}

export default Money;