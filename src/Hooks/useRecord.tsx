import {useCallback, useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {useTags} from './useTags';



const useRecord = () => {
  const [records, setRecords] = useState<recordWithTime[]>([]);
  const {findTag} = useTags();
  useEffect(() => {setRecords(JSON.parse(localStorage.getItem('records') || '[]'));}, []);
  const saveRecords = useCallback(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  useUpdate(saveRecords);
  const updateRecord = (newRecord: record) => {
    if (newRecord.selectedTags.length === 0) {
      window.alert('请选择标签');
      return false
    } else if (parseInt(newRecord.number) === 0) {
      window.alert('请输入金额');
      return false
    } else {
      const newRecordWithTime: recordWithTime = {
        ...newRecord,
        createAt: (new Date()).toISOString(),
        tagName: newRecord.selectedTags.map(tagId => findTag(tagId.toString()).name)
      };
      setRecords([...records, newRecordWithTime]);
      window.alert('保存成功')
      return true
    }
  };
  return {records, updateRecord};
};
export {useRecord};