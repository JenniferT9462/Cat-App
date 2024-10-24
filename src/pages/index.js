// src/pages/index.js
export default function Home() {
  return (
    <div className="text-center">
      <h1 className="m-10 text-4xl">Welcome to the Cat App!</h1>
      <a className="bg-white text-black p-4" href="/cat">Go to Cat App</a>
      <img src="/splashPage.jpeg"/>
      
    </div>
  );
}