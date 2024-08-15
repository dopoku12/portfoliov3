import { ImageList, ImageListItem, Link as ExLink, ImageListItemBar } from "@mui/material";

import { useState } from "react";
import { useStyles } from "../styles/Styling";
export default function Projects() {
   let [projectState,setProjectState]=useState(
     [
      {
         
         imgName: "/projects/country-wiz.png",
         link: "https://country-wiz.netlify.app/",
         code: "https://github.com/dopoku12/countryWiz",
         projectName: "country-wiz",
         description: `A country search App`,
         summary: `This project displays country data from an api.
             when you first open the site the users lat&long is collected using the built in javascript geolocation api,
             then using closures the user location is pulled by using the tom toms reverse gelocation api,
             then with react custom hooks the name of the country is then passed into another function which displays information about the users country
             this all happens upon first render using the react useEffect hook.
             In case the user dose not provide a lat&long they can always enter the name of a country in the search bar, 
             the value is then debounced to avoid constant rerendering after every key down then the value is filtered to 10 options the user can pick from `,
      },
      {
        
         imgName: "/projects/dice-game.png",
         link: "https://dopoku12.github.io/Dice-Game/",
         code: "https://github.com/dopoku12/Dice-Game",
         projectName: "Dice",
         description: `A two player dice game`,
         summary: `Welcome to Dice, The goal of this Dice Game is to be the first player to hit 100!! In this game user roll's a Dice to accrue points. If the die lands on 1, the points they accumulated are set to 0. The user is able to hold if they feel their luck may be running out. At this point, player 2 takes a turn .`,
      },

      {
        
         imgName: "/projects/guess-game.png",
         link: "https://dopoku12.github.io/take-a-guess/",
         code: "https://github.com/dopoku12/take-a-guess",
         projectName: "Take A Guess",
         description: `A guessing game`,
         summary:
            "In this Game you will have to guess the right number(between 1-20) to win ,if you guess wrong you lose points and a hint will be given if your score hits zero you lose.  ",
      },

      // {
      //     id: 3,
      //     imgName: '/projects/country-search.png',
      //     link: ' https://dopoku12.github.io/country-search/',
      //     code: 'https://github.com/dopoku12/country-search',
      //     projectName: 'Country-Search',
      //     description: ``,
      //     summary: ''
      // },
      {
         imgName: "/projects/weatherApp.png",
         link: "https://weather-wiz.netlify.app/",
         code: "https://github.com/dopoku12/weather",
         projectName: "weather-wiz",
         description: `A weather search app`,
         summary: "Check the weather in your city as well as other cities",
      },
   ].map((i)=>({...i,hoverState:false}))
)
const handelHoverOn=(elmIndex:number)=>{
  
setProjectState((prevState)=>{
  
  return prevState.map((item, index) => index === elmIndex? { ...item, hoverState: true } :item
         
      
   )
  })
}

const handelHoverOff = (elmIndex: number) => {
  setProjectState((prevState) => {
    return prevState.map((item, index) => index === elmIndex ?{ ...item, hoverState: false }: item
      
    );
  });
};

  return (
<ImageList sx={useStyles.layout}>{
   projectState.map((i,index)=>(
<ImageListItem key={index} sx={{width:'55vw'}} 
onMouseEnter={()=>handelHoverOn(index)} 
onMouseLeave={()=>handelHoverOff(index)}
>
    <ExLink href={i.link} >
       </ExLink>
    <img 
     width={100}
    src={i.imgName}
    alt={i.description}/>
{
i.hoverState&&
    <ImageListItemBar    
    title={i.projectName}
    subtitle={i.description}
    />
   }
 
</ImageListItem>))
}
   </ImageList>
    
   )  
}