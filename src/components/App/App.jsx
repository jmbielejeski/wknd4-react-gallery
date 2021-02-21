import { useState, useEffect, useToggle } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'




function App() {

// FORKS
// gallery fork set to an empty array
let [gallery, setGallery] = useState([]);


// GET Axios
// on load get gallery list
useEffect(() => {
  getGalleryList();
}, []);

const getGalleryList = () => {
  console.log('in GET');

  axios.get('/gallery')
  .then((response) => {
    console.log('in axios Get response', response.data);
    setGallery(response.data);
  })
  .catch((error) => {
    alert('unable to get galleryList');
    console.log('error in GetGalleryList', error);
  })
}

// PUT route for likes
const likeCounter = (event) => {
  // need to target like button
  const galleryItemId = event.target.dataset.id;
  //const likesCount = event.target.dataset.liked;
  console.log('itemId is', galleryItemId) //'likeCount is', likesCount);
  axios.put(`/gallery/like/${galleryItemId}`)
  .then((response) => {
    console.log('item liked!', response);
    getGalleryList();
  })
  .catch((error) => {
    console.log('error liking image', error);
  })
}

// DELETE route
const handleDelete = () => {
  const galleryItemId = event.target.dataset.id;

  axios.delete(`/gallery/${galleryItemId}`)
    .then((response) => {
      console.log('item deleted');
      getGalleryList();
    })
    .catch((error) => {
      console.log('unable to delete item', error)
    })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <GalleryList
          gallery={gallery}
          likeCounter={likeCounter}
          handleDelete={handleDelete}
          />


      </div>
    );
}

export default App;
