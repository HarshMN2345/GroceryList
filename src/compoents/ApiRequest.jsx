export const apiRequest=async(url='',optionsObj=null,errMsg=null)=>{
  try{
    const response=await fetch(url,optionsObj);
    if(response.ok){
      return await response.json();
    }
    throw new Error(errMsg||'Request failed');
  }catch(err){
    console.error(err);
    errMsg=err.message
  }finally{
    return errMsg;
  }
}