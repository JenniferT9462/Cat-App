// src/pages/cat/CatImage.js
export default function CatImage(props) {
    // const imgURL = props.image_link;
    return (
      <div className="text-black m-12">
        <h4 className="text-center">Hi I'm a {props.name} cat!</h4>
        <div className=" flex justify-center">
          <div>
            <img width="340" src={props.image_link} alt="Cat" />
          </div>
        </div>
      </div>
      
    );
  }