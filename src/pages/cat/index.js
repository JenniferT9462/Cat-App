// src/pages/cat/index.js
import catData from '/cat-data.json';
import CatImage from './CatImage';
import CatDetails from './CatDetails';

export default function Cat() {
    return (
        <div>
            <h1>Hi, I'm a cat.</h1>
            <CatImage catData={catData} />
            <CatDetails catData={catData} />
        </div>
    )

  }


console.log(catData);