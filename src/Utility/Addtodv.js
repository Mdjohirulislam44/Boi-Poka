import { toast } from "react-toastify";

const getSorteReadList = () => {
  const sortedListStr = localStorage.getItem('read-list');

  if (sortedListStr) {
    return JSON.parse(sortedListStr);
  } else {
    return [];
  }
};

const addToSorteReadList = (id) => {
  console.log("Received ID:", id);
  const sorteList = getSorteReadList();

 
  if (sorteList.includes(id)) {
    toast("This book is already in the read list!");
    return;
  }

 
  sorteList.push(id);

  localSortage.setItem('read-list', JSON.stringify(sorteList));

  toast("Book added to Read List!");
};

export { addToSorteReadList, getSorteReadList };
