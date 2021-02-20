import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    gallery,
    likeCounter,
    toggle,
    displayedItem
  })
{
  // return JSX
  console.log('gallery is', gallery);
  return (
    <div>
        {gallery.map((item) => (
          <GalleryItem
          key={item.id}
          item={item}
          likeCounter={likeCounter}
          toggle={toggle}
          displayedItem={displayedItem}
                  
        /> 
        ))}
    </div>
  );
}

export default GalleryList;