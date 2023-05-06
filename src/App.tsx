import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div> New comment for dev branch</div>
          <div> New comment2  for dev branch</div>
          <div> New comment3  for dev branch</div>
          Learn React
        </a>
      </header>
    </div>
  );
}
<html>
<body>
<main>
  <h1>CatPhotoApp</h1>
  <section>
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
    <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  </section>
  <section>
    <h2>Cat Lists</h2>
    <h3>Things cats love:</h3>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
        <figcaption>Cats <em>love</em> lasagna.</figcaption>
    </figure>
    <h3>Top 3 things cats hate:</h3>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
    </figure>
  </section>
  <section>
    <h2>Cat Form</h2>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
      <input type="text" name="catphotourl" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
  </section>
</main>
</body>
</html>
export default App;
