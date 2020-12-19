let id = JSON.parse(localStorage.getItem('tagId')||'0');
const createId=()=>{
  id+=1;
  console.log(id);
  return id
}
export {createId}