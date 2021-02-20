import './GalleryItem.css'

function GalleryItem({item}) {
  console.log('item is', item);

  
  return (
    <>
    <img src={item.path} key={item.id}/>
    <div>{item.likes}</div>
    </>
  );
}

export default GalleryItem;