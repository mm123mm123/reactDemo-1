import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

function Tags() {
  const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
      svg{
          height:1em;
          width:1em;
         }
    }
  }
`;
  const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 12px;
  background: #9a9a9a; border-radius: 4px;
  color: white;
  margin-top: 44px;
`;
  const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
  const [tags] = useState(['衣', '食', '住', '行']);
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={'/tags/'+tag}>
              <span className='oneLine'>
                {tag}
              </span>
              <Icon name={'rightArrow'}/>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button>
          新增标签
        </Button>
      </Center>
    </Layout>
  );
}

export default Tags;