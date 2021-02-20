function ImageOrDescription ({
  toggle,
  displayedItem,
  itemPath,
  itemDescription,
  itemId

}) {
  // console.log('itemPath', itemPath);
  // console.log('itemDescription', itemDescription);
  // console.log('displayedItem', displayedItem)
  if (displayedItem === 'true') {
    return (
      <img src={itemPath} onClick={toggle} data-id={itemId}/>
    )
  } else {
    return (
      <div onClick={toggle} data-id={itemId}>{itemDescription} </div>
    )
  }
}


export default ImageOrDescription;