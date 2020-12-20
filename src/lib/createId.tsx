let id = JSON.parse(localStorage.getItem('tagId')||'0');
const createId=()=>{
  id+=1;
  localStorage.setItem('tagId', id);
  return id
}
export {createId}