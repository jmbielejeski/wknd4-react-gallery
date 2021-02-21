import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    gallery,
    likeCounter,
    handleDelete
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
          handleDelete={handleDelete}
                  
        /> 
        ))}
    </div>
  );
}

export default GalleryList;