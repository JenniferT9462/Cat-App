// src/pages/cat/CatImage.js
export default function CatImage(props) {
    // const imgURL = props.image_link;
    return (
      <div className="text-black m-12">
          <div className=" flex justify-center">
            <div >
              <img className="rounded-full" width="340" src={props.image_link} alt="Cat" />
              <h4 className="text-center text-xl font-bold">Hi I&apos;m a {props.name}!</h4>
            </div>
          </div>
      </div>
    );
  }