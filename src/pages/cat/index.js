// src/pages/cat/index.js
import catData from '/cat-data.json';
import CatImage from './CatImage';
import CatDetails from './CatDetails';
import CatLike from './CatLike';

export default function Cat() {
    return (
        <div className='bg-amber-100'>
            <h1 className="text-center text-xl bg-orange-400">Cats Cats Cats</h1>
            <CatImage 
                name={catData.name}
                image_link={catData.image_link} />
            <CatDetails 
                origin={catData.origin}
                length={catData.length}
                children_friendly={catData.children_friendly} />
            <CatLike />
        </div>
    )

  }


console.log(catData);