import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: string) => {
    return tags.filter(tag => tag.id === parseInt(id))[0];
  };
  const findIndex=(id: string)=>{
    return tags.map(tag => tag.id).indexOf(findTag(id).id);
  }
  const cloneTags=()=>{
    return JSON.parse(JSON.stringify(tags))
  }
  const updateTag = (id: string, obj: { name: string }) => {
    const clonedTags = cloneTags();
    const index = findIndex(id)
    clonedTags.splice(index, 1, {id: parseInt(id), name: obj.name});
    setTags(clonedTags);
  };
  const deleteTag=(id: string)=>{
    const clonedTags = cloneTags();
    const index = findIndex(id)
    clonedTags.splice(index, 1);
    setTags(clonedTags);
  }
  return {tags, setTags, findTag, updateTag,deleteTag};
};

export {useTags};