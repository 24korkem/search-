import Card from "./Card";
import { useEffect, useState } from "react";
    let countries = [
      {
        id: 1,
        img: "https://lh3.googleusercontent.com/p/AF1QipP3AiS_2pee3CMhtlGwRtatocM44CWBg4n4tGaw=s1360-w1360-h1020",
        title: "London",
        travel: "TRAVEL",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sunt adipisci voluptate, quisquam sed reprehenderit labore, deserunt in velit, corporis quo praesentium culpa aliquam quaerat! Sint qui excepturi magnam",
      },
      {
        id: 2,
        img: "https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_20770_1.600w.jpg?ver=1675418131",
        title: "Paris",
        travel: "TRAVEL",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sunt adipisci voluptate, quisquam sed reprehenderit labore, deserunt in velit, corporis quo praesentium culpa aliquam quaerat! Sint qui excepturi magnam",
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Fiabilandia.jpg",
        title: "Rome",
        travel: "TRAVEL",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sunt adipisci voluptate, quisquam sed reprehenderit labore, deserunt in velit, corporis quo praesentium culpa aliquam quaerat! Sint qui excepturi magnam",
      },
      {
        id: 4,
        img: "https://lh3.googleusercontent.com/p/AF1QipOGuFrsPU3o534BQjIp_O5OYREYAn50dYv2gszY=s1360-w1360-h1020",
        title: "Astana",
        travel: "TRAVEL",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sunt adipisci voluptate, quisquam sed reprehenderit labore, deserunt in velit, corporis quo praesentium culpa aliquam quaerat! Sint qui excepturi magnam",
      },
      {
        id: 5,
        img: "https://img.inform.kz/kazinform-photobank/media/2023-09-15/509efe68-139d-44e8-8c8e-d530089f8206.webp",
        title: "Almaty",
        travel: "TRAVEL",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo sunt adipisci voluptate, quisquam sed reprehenderit labore, deserunt in velit, corporis quo praesentium culpa aliquam quaerat! Sint qui excepturi magnam",
      },
    ];
function Cards(){
  const [search, setSearch]= useState("")
  const [cards, setCards] = useState(countries);
  useEffect(()=>{
    setCards(countries.filter(p=>p.title.toLowerCase().includes(search.toLowerCase())));
  })

return (
    <div className="cards">
      <div className="search">
        <input type="text" value ={search} onChange={(e)=>setSearch(e.target.value)}  />
      </div>
        {cards.map(c=>(<Card country ={c.id}  />
       ))}
    </div>
);
};
export default Cards;