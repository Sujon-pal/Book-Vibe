const getStoreBook = () => {
  const storeBookSTR = localStorage.getItem("redList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {

    const storeBookData = getStoreBook();

    if(storeBookData.includes(id)){
    console.log(id)
        alert('Already Exist')
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData)
        localStorage.setItem("redList",data)
    }
};


export {addToStoreDB}