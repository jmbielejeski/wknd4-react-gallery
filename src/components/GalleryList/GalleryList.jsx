import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    gallery,
  })
{
  // return JSX
  return (
    <div>
        {gallery.map((item) => (
          <GalleryItem
            item={item}
          />
        ))}
    </div>
  );
}

export default GalleryList;