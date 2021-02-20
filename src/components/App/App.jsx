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
    console.log('in axios Get response');
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
  const itemId = event.target.dataset.id;
  //const likesCount = event.target.dataset.liked;
  console.log('itemId is', itemId) //'likeCount is', likesCount);
  axios.put(`/gallery/like/${itemId}`)
  .then((response) => {
    console.log('item liked!', response);
    getGalleryList();
  })
  .catch((error) => {
    console.log('error liking image', error);
  })
}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList
          gallery={gallery}
          likeCounter={likeCounter}
          />


      </div>
    );
}

export default App;
