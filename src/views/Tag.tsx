import React from 'react';
import Layout from '../components/Layout';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Button} from '../components/Button';

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
  svg{
   height:1em;
   width:1em
  }
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id} = useParams<{ id: string }>();
  const tag = findTag(id);
  const back=()=>{

  }
  return (
    <Layout>
      <Topbar>
        <Icon  name='leftArrow'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ?
        <div>
        <InputWrapper>
          <Input name='标签名' type="text" value={tag.name}
                 onChange={(e) => updateTag(id, {name: e.target.value})}/>
        </InputWrapper>
        <Center>
          <Button onClick={() => deleteTag(id)}>删除标签</Button>
        </Center>
        </div>
        : <Center><span>标签已删除</span></Center>
      }
    </Layout>
  );
};

export {Tag};