import React, {useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './money/CategorySection';
import {useRecord} from '../Hooks/useRecord';
import day from 'dayjs';
import styled from 'styled-components';

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState('-');
  const {records} = useRecord();
  const onChange = (category: '+' | '-') => {
    setCategory(category);
  };
  const filteredRecords=records.filter(record=>record.category===category)
  const hash: { [key: string]: recordWithTime[] } = {};
  filteredRecords.map(record => {
    const date = day(record.createAt).format('YYYY年MM月DD日');
    if (!(date in hash)) {
      hash[date] = [];
    }
    return hash[date].push(record);
  });
  const sortedRecords = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
  return (
    <Layout>
      <CategorySection value={category} onChange={category => {onChange(category);}}/>
      {sortedRecords.map(([date, recordArray]) => {
        return (
          <div key={date}>
            <Header>
              {date}
            </Header>
            {recordArray.map((record) => {
              return (
                <Item key={record.createAt}>
                  <div>{record.tagName.join(',')}</div>
                  <div className='note'>{record.note}</div>
                  <div>{record.number}</div>
                </Item>
              );
            })}
          </div>);
      })}
    </Layout>
  );
}

export default Statistics;