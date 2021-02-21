import './GalleryItem.css'
import ImageOrDescription from '../ImageOrDescription/ImageOrDescription'

function GalleryItem({
  item,
  likeCounter,
  displayedItem,
  handleDelete
  
}) {
  console.log('item is', item);

  let itemPath = item.path;
  let itemDescription = item.description;
  // console.log('itemPath', itemPath);
  // console.log('itemDescription', itemDescription);


  if (item.likes === 0) {
  return (
    <>
    <div className="imageHolder">
      <ImageOrDescription 
        displayedItem={displayedItem}
        itemPath={itemPath}
        itemDescription={itemDescription}
      />
      <button className="likeButton" data-id={item.id} onClick={likeCounter}>love it!</button>
      <span className="likeMessage"> No people love this :( </span>
      <button className="deleteButton" data-id={item.id} onClick={handleDelete}>Delete</button>
    </div>
    </>
  );
} else { 
    return (
      <div className="imageHolder">
        <ImageOrDescription 
        displayedItem={displayedItem}
        itemPath={itemPath}
        itemDescription={itemDescription}
        />
        <button className="likeButton" data-id={item.id} onClick={likeCounter}>love it!</button>
        <span className="likeMessage" data-liked={item.likes}>{item.likes} people love this!</span>
        <button className="deleteButton" data-id={item.id} onClick={handleDelete}>Delete</button>

      </div>
    );
  }
}

export default GalleryItem;