import React, {useState} from 'react';
import Layout from '../components/Layout';
import {TagsSection} from './money/TagsSection';
import styled from 'styled-components';
import {NotesSection} from './money/NotesSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPad/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

function Money() {
  const [record, setRecord] = useState({
      tags: [] as string[],
      note: '',
      category: '-',
      number: '0'
    }
  );
  const onChange=(obj: Partial<typeof record>)=>{
    setRecord({...record,...obj})
  }
  return (
    <MyLayout>
      <TagsSection value={record.tags} onChange={tags=>onChange({tags})}/>
      <NotesSection value={record.note} onChange={note=>onChange({note})}/>
      <CategorySection value={record.category} onChange={category=>onChange({category})}/>
      <NumberPadSection value={record.number} onChange={number=>onChange({number})}/>
    </MyLayout>
  );
}

export default Money;