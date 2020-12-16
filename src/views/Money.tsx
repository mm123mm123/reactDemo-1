import React from 'react';
import Layout from '../components/Layout';
import {TagsSection} from './money/TagsSection';
import styled from 'styled-components';
import {NotesSection} from './money/NotesSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;