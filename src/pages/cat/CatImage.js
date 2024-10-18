// src/pages/cat/CatImage.js
export default function CatImage(props) {
    const imgURL = props.catData.image_link;
    return (
      <div>
        <h4>Hi I'm a {props.catData.name} cat!</h4>
        <img src={imgURL} alt="Cat" />
      </div>
      
    );
  }