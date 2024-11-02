import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="text-center">
      <h1 className="m-10 text-4xl">Welcome to the Cat App!</h1>
      <Link className="bg-white text-black p-4" href="/cat">Go to Cat App</Link>
      {/* Wrap Image in div w/relative class and w-full h-screen to make the entire viewport height */}
      <div className="relative w-full h-screen">
        <Image 
          src="/splashPage.jpeg" 
          alt="Ai Burmese Cat" 
          // layout prop to make the image fill its parent container
          layout="fill" 
          // objectFit prop to make sure the image covers the entire area and maintain aspect ratio
          objectFit="cover" 
          // priority prop to ensure image will be loaded asap
          priority
        />
      </div>
    </div>
  );
}