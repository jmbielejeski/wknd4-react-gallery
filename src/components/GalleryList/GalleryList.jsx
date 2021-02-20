import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    gallery,
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
        /> 
        ))}
    </div>
  );
}

export default GalleryList;