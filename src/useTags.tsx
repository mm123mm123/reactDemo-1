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
  const updateTag = (id: string,obj: {name: string}) => {
    const clonedTags: { id: number, name: string }[] = JSON.parse(JSON.stringify(tags));
    console.log(clonedTags);
    const index = clonedTags.map(tag=>tag.id).indexOf(findTag(id).id);
    clonedTags.splice(index, 1, {id: parseInt(id), name: obj.name});
    console.log(clonedTags);
  };
  return {tags, setTags, findTag,updateTag};
};

export {useTags};