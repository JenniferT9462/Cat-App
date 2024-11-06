import Image from "next/image";

// src/pages/cat/CatImage.js
export default function CatImage(props) {
    // const imgURL = props.image_link;
    return (
      <div className="text-black m-12">
          <div className=" flex justify-center">
            <div>
              {props.image ? (
                <Image 
                  className="rounded-full" 
                  width={340}
                  height={340} 
                  src={props.image} 
                  alt={`Cat image of ${props.name}`} 
                  //priority prop to make image load quickly
                  priority
                />
              ) : (
                <p>Image not available</p>
              )}
              <h4 className="text-center text-xl font-bold">
                {props.name ? `Hi I am a ${props.name}!` : "Cat"}
                {/* {Hi I&apos;m a {props.name}! */}
              </h4>
            </div>
          </div>
      </div>
    );
  }