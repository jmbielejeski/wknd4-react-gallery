import { useState, useEffect } from 'react';


function ImageOrDescription ({
  itemPath,
  itemDescription,
  

}) {

  let [displayedItem, setDisplayedItem] = useState(false);

  let changeDisplayedItem = () => {
    setDisplayedItem(!displayedItem);
  }

  // console.log('itemPath', itemPath);
  // console.log('itemDescription', itemDescription);
  // console.log('displayedItem', displayedItem)
  if (displayedItem === false) {
    return (
      <img src={itemPath} onClick={changeDisplayedItem} />
    )
  } else {
    return (
      <div onClick={changeDisplayedItem} >{itemDescription} </div>
    )
  }
}


export default ImageOrDescription;