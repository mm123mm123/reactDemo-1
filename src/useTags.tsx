import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
type tag = {
  id: number, name: string
}
const useTags = () => {
  const [tags, setTags] = useState<tag[]>(defaultTags);
  const findTag = (id: string) => {
    return tags.filter(tag => tag.id === parseInt(id))[0];
  };
  const updateTag = (id: string, obj: { name: string }) => {
    const newTags = tags.map(tag => {
      if (tag.id === parseInt(id)) {
        return {id:parseInt(id),name:obj.name};
      } else {
        return tag;
      }
    });
    setTags(newTags);
  };
  const addTag=  ()=> {
    const tagName = window.prompt('请输入标签名');
    if (tagName) {
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  }
  const deleteTag = (id: string) => {
    setTags(tags.filter(tag=>tag.id!==parseInt(id)));
  };
  return {tags, setTags, findTag, updateTag, addTag,deleteTag};
};

export {useTags};