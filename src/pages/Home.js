import React from 'react';
// import './home.css'; 


export default function Home() {
  return (
    <div className="Home-page text-center">
      <h1 className="heading text-white">Global Bank</h1>
      <div className="gif-container">
        <img src="https://i.pinimg.com/originals/de/80/ca/de80ca4922b016784c86f80ee5c8966f.gif" alt="GIF" className="gif rounded"
        style={{
          'height' : '70vh'
        }} />
      </div>
    </div>
  );
}
