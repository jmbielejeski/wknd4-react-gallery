import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {

// FORKS
let [galleryItem, setGalleryItem] = useState('');
// gallery fork set to an empty array
let [gallery, setGallery] = useState([]);

// GET Axios
// on load get gallery list
useEffect(() => {
  getGalleryList;
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
