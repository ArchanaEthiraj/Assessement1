import React, { useState } from 'react';
import item1 from './images/item1.jpeg';
import item2 from './images/item2.jpeg';
import item3 from './images/item3.jpeg';
import item4 from './images/item4.jpeg';
import item5 from './images/item5.jpeg';
import item6 from './images/item6.jpeg'
import item7 from './images/item7.jpeg'
import item8 from './images/item8.jpeg'
import item9 from './images/item9.jpeg'
import './Menu.css'
function Menu(){
    const [menus, setMenu] = useState([
        {
          id: 1,
          title: 'Buttermilk Pancakes',
          category: 'Breakfast',
          price: 15.99,
          img: item1,
          desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
        },
        {
          id: 2,
          title: 'Diner Double',
          category: 'Lunch',
          price: 13.99,
          img: item2,
          desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
        },
        {
          id: 3,
          title: 'Godzilla Milkshake',
          category: 'Shakes',
          price: 6.99,
          img: item3,
          desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
        },
        {
          id: 4,
          title: 'Country Delight',
          category: 'Breakfast',
          price: 20.99,
          img: item4,
          desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
        },
        {
          id: 5,
          title: 'Egg Attack',
          category: 'Lunch',
          price: 22.99,
          img: item5,
          desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
        },
        {
          id: 6,
          title: 'Oreo Dream',
          category: 'Shakes',
          price: 18.99,
          img: item6,
          desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
        },
        {
          id: 7,
          title: 'Bacon Overflow',
          category: 'Breakfast',
          price: 8.99,
          img: item7,
          desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
        },
        {
          id: 8,
          title: 'American Classic',
          category: 'Lunch',
          price: 12.99,
          img: item8,
          desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
        },
        {
          id: 9,
          title: 'Quarantine Buddy',
          category: 'Shakes',
          price: 16.99,
          img: item9,
          desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
        },
      ]);
      const[dataNew,setDataNew]=useState(menus)
      const category=menus.map(menu=>menu.category)
      const uniqcategory=[...new Set(category)] 
      uniqcategory.unshift('All')
      console.log(uniqcategory)
      const handleTab=(t)=>{
        console.log(t)
          if (t === 'All'){
              setDataNew(menus)
              return
          }
          const filteredData=menus.filter(menu=>menu.category===t)
          setDataNew(filteredData)
      }
      
    return(
        <div>
           <div className='m-5 p-3 text-center font-weight-bold our'><h1>Our Menu</h1></div>
           <div className='sline'></div>
           <center><div className='color d-flex justify-content-around col-md-3 mb-5'>
           {uniqcategory.map((t, i)=><span key={i} className="color1" onClick={()=>handleTab(t)} >{t}</span>)}
           </div> </center>
           <div className='container'>
                          <div class="row">
               {dataNew.map(menu => 
                        <div key={menu.id} class="col-12 col-md-6 mb-5"><div className='row'>
                            <div className='col-sm-8 col-md-5'>
                        <img src={menu.img} alt="images" height="150" width="100%" className='rounded  borders'/></div>
                           <div  className='col-md-6'>
                               <div className='d-flex justify-content-between'>
                               <div className='title font-weight-bold'>{menu.title}</div>
                               <div className='price'> ${menu.price}</div>
                               </div><div className="lines"></div>
                           <div className='desc'>{menu.desc}</div>
                           </div>
                           </div></div>)}</div>
</div>
        </div>
    )
}

export default Menu