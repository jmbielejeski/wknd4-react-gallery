import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    gallery,
    likeCounter,
    
  })
{
  // return JSX
  // console.log('gallery is', gallery);

  return (
    <div>
        {gallery.map((item) => (
          <GalleryItem
          key={item.id}
          item={item}
          likeCounter={likeCounter}
                  
        /> 
        ))}
    </div>
  );
}

export default GalleryList;