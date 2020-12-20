import {useCallback, useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';


type recordWithTime = record & {
  createAt: string
}
const useRecord = () => {
  const [records, setRecords] = useState<recordWithTime[]>([]);
  useEffect(()=>{setRecords(JSON.parse(localStorage.getItem('records')||'[]'))},[])
  const saveRecords = useCallback(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  useUpdate(saveRecords);
  const updateRecord = (newRecord: record) => {
    const newRecordWithTime: recordWithTime={...newRecord,createAt: (new Date()).toISOString()}
    setRecords([...records, newRecordWithTime]);
  };
  return {records,updateRecord};
};
export {useRecord};