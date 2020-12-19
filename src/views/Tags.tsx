import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {useTags} from '../useTags';
import {Button} from '../components/Button';

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
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function Tags() {

  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className='oneLine'>
                {tag.name}
              </span>
              <Icon name={'rightArrow'}/>
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>
          新增标签
        </Button>
      </Center>
    </Layout>
  );
}

export default Tags;