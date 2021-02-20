import { useState, useEffect } from 'react';


function ImageOrDescription ({
  itemPath,
  itemDescription,
  

}) {

  let [displayedItem, setDisplayedItem] = useState(false);

  // change state of displayed item
  let changeDisplayedItem = () => {
    setDisplayedItem(!displayedItem);
  }

  // check state of displayed item
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