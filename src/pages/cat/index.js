// src/pages/cat/index.js
import catData from '/cat-data.json';
import Header from './Header';
import CatImage from './CatImage';
import CatDetails from './CatDetails';
import CatLike from './CatLike';

export default function Cat() {
    return (
        <div className='bg-amber-100'>
            <Header />
            <CatImage 
                name={catData.name}
                image_link={catData.image_link} />
            <CatDetails 
                origin={catData.origin}
                length={catData.length}
                children_friendly={catData.children_friendly}
                playfulness={catData.playfulness}
                other_pets_friendly={catData.other_pets_friendly} />
            <CatLike />
        </div>
    )

  }


console.log(catData);