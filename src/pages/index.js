import Link from "next/link";

// src/pages/index.js

import Link from "next/link";


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="m-10 text-4xl">Welcome to the Cat App!</h1>
      <Link className="bg-white text-black p-4" href="/cat">Go to Cat App</Link>
      <img src="/splashPage.jpeg"/>
      
      
    </div>
  );
}