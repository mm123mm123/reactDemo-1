import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{
        background:#666;
        color:#D9D9D9;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;
const TagsSection: React.FC = () => {
  const [tags,setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  function onToggleTag(tag: string) {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }
  function addTag(){
    const tagName=window.prompt('请输入标签名')
    if(tagName){
      setTags([...tags,tagName])
    }
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => (
          <li key={tag} onClick={() => onToggleTag(tag)}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}>
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};