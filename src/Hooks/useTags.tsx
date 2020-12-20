import {useCallback, useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

const defaultTags=[
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
]
const useTags = () => {
  const [tags, setTags] = useState<tag[]>([]);
  useEffect(() => {
    const storageTags = JSON.parse(localStorage.getItem('tags') || '[]');
    setTags(
      storageTags.length === 0 ? defaultTags : storageTags
    );
  }, []);
  const saveTag = useCallback(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  useUpdate(saveTag);


  const findTag = (id: string) => {
    return tags.filter(tag => tag.id === parseInt(id))[0];
  };
  const updateTag = (id: string, obj: { name: string }) => {
    const newTags = tags.map(tag => {
      if (tag.id === parseInt(id)) {
        return {id: parseInt(id), name: obj.name};
      } else {
        return tag;
      }
    });
    setTags(newTags);
  };
  const addTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const deleteTag = (id: string) => {
    setTags(tags.filter(tag => tag.id !== parseInt(id)));
  };
  return {tags, setTags, findTag, updateTag, addTag, deleteTag};
};

export {useTags};