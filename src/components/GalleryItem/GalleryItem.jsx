import './GalleryItem.css'

function GalleryItem({item, likeCounter}) {
  console.log('item is', item);

  if (item.likes === 0) {
  return (
    <>
    <div className="imageHolder">
      <img src={item.path} />
      <button className="likeButton" data-id={item.id} onClick={likeCounter}>love it!</button>
      <span className="likeMessage"> No people love this :( </span>
    </div>
    </>
  );
} else { 
    return (
      <div className="imageHolder">
        <img src={item.path} />
        <button className="likeButton" data-id={item.id} onClick={likeCounter}>love it!</button>
        <span className="likeMessage" data-liked={item.likes}>{item.likes} people love this!</span>
      </div>
    );
  }

}

export default GalleryItem;