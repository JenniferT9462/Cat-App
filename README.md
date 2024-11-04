# Cat App  

**Deployed Link:**  <https://cat-app-tawny-iota.vercel.app/>

## Overview

This a simple React app that serves as a practical exercise to delve into the fundamentals of React component development and styling with Tailwind CSS.   

### API Proxies

This project aims to significantly expand the functionality and data richness of the existing "Cats, Cats, Cats" application. By integrating new data sources through a proxy server and adding new endpoints, we will enhance the user experience and demonstrate advanced skills in API utilization and server-side development.

## Setup

- In your system terminal make sure you are in the directory that you want your Next app to go. To see where you are you can run:

        pwd

- If you need to navigate somewhere else, to see the files in your current directory, you can run:

        ls

- You can move into the correct directory by running:

        cd <desired directory>

- Create a New Next.js Application
    * Run - NOTE: if we run w/out a project name, the terminal will ask us to enter a project name. 

            npx create-next-app@latest
    
- You will then be asked a series of questions...

    ![terminal questions](<nextQuestions.png>)

- Navigate to your new project by running:

        cd cat-app

- Then you can open a VScode window by running: 

        code .

- To install dependencies run:

        npm install

- To open the deployment server run:

        npm run dev

- Open your browser and navigate to http://localhost:3000 to view your home page and see the changes you make in        real-time. NOTE: you can ctrl+click(windows) the link directly from your terminal in VScode.

- Create a new repository on Github. NOTE: don't select add README or .gitignore
    * Quick set up will pop up...Run the code that says Add repo to existing repo on the command-line. 

- Add your Next app to your new repository by running this in bash terminal:

        git remote add origin https://github.com/yourusername/your-repository.git
        git branch -M main
        git push -u origin main

## Plan

![mock up](<mockUp.png>)

## Endpoints

### `api/cats`

**Description:** Retrieve cat details based on a search query.

**Response**
```json
 {
    "name": "Colorpoint Shorthair",
    "origin": "England",
    "length": "Small to medium",
    "img":   "https://api-ninjas.com/images/cats/colorpoint_shorthair.jpg"
  }
```
#### Screenshot of Request on Postman

![Cats API](<./public/catsApi.png>)

### `/api/pokemon`

**Description:** Retrieve pokemon details based on a search query.

**Response**
```json
{
    "pokemonName": "luxio",
    "pokemonCry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/404.ogg",
    "pokemonImgSrc": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "firstAbility": "rivalry"
}
```
#### Screenshot of Request on Postman

![Pokemon API](<./public/pokemonApi.png>)

### `/api/trivia`

**Description:** Retrieve three trivia questions about animals.

**Response**
```json
{
        "trivia": "Cashmere is the wool from which kind of animal?",
        "answer": "Goat"
    },
    {
        "trivia": "What is the name of the family that the domestic cat is a member of?",
        "answer": "Felidae"
    },
    {
        "trivia": "What is the name for a male bee that comes from an unfertilized egg?",
        "answer": "Drone"
    }
```
#### Screenshot of Request on Postman

![Trivia API](<./public/triviaApi.png>)

### `/api/ravelry`

**Description:** Retrieve pattern details based on search query.

**Response**
```json
{
    "name": "Halloween Knit Hat",
    "image": "https://images4-g.ravelrycache.com/uploads/hagilb/643624072/halloween-front_medium.jpg",
    "designer": "Holly G Hats"
}
```
#### Screenshot of Request on Postman

![Ravelry API](<./public/ravelryApi.png>)

## Roadblocks/Challenges

### Overcame

- The Image component - built-in props to set dimensions. Import Image component from React. Used `<Image/>` instead of `<img>` tags.

- The Link component - import it from React to fix errors I saw when deploying on Vercel. Used `<Link/>` instead of `<a>` tags.

- Errors and Warnings on Vercel - Warning about alt props for images for the Image component. The apostrophe error on Vercel to fix I changed the apostrophe with '&apos;' to fix the error.

- Domain names from where the images in my app were coming from  - For all images I added:

        images: {
           domains: [
                'api-ninjas.com', 
                'raw.githubusercontent.com', 
                'images4-g.ravelrycache.com', 
                'images4-f.ravelrycache.com'
                ], 
        }

  * Added to the 'next.config.mjs' file. 

### Current Roadblocks/Errors

- Errors with the api/trivia route - 500 error & hydration error, works on postman, It fetches the questions, answers and renders.

- Errors with the api/cats route - Specifically the image. 

  * Error: 
        Image is missing required "src" property: 
        
