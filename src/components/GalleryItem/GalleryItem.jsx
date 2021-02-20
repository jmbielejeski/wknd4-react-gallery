import './GalleryItem.css'

function GalleryItem({item, likeCounter}) {
  console.log('item is', item);

  if (item.likes === 0) {
  return (
    <>
    <img src={item.path} />
    <button data-id={item.id} onClick={likeCounter}>love it!</button>
    <span>No people love this :(</span>
    </>
  );
} else { 
    return (
      <>
      <img src={item.path} />
      <button data-id={item.id} onClick={likeCounter}>love it!</button>
      <span data-liked={item.likes}>{item.likes} people love this!</span>
      </>
    );
  }

}

export default GalleryItem;