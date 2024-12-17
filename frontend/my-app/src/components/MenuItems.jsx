import React from 'react'
import '../component_styles/MenuItem.css' 
import  { useEffect, useState } from "react";
import axios from "axios";
function MenuItems() {
  const [menuData, setMenuData] = useState({starters:[],main_course:[]})
  const [error,setError] = useState("")
  useEffect(() =>{
    const fetchMenuItems = async ()=>{
      const response = await axios.get('/api/get_menu')
      console.log(response.data)
      if (response){
        setMenuData(response.data)
      }
      else{
        setError("Error Fetching Menu Items")
      }
    }
    fetchMenuItems()
  },[])
  return (
    <>
    <div>

    </div>
    <div class="menu-section">
  <div class="menu-content">
    <h2 class="menu-title"><span class='menu_symbol'>◊</span> Starters <span class='menu_symbol'>◊</span> </h2>
    {menuData.starters.map((dish, index) => (
      <div>
  <div className="menu-item" key={index}>
    <div className="item-name">{dish.name}</div>
    <div className="item-price">$30</div>
    </div>
    <p className="item-description">{dish.ingredients}</p>
    </div>
))}
    
  </div>

  <div class="menu-image">
    <img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/menu-img2.jpg" alt="Menu Image" />
  </div>
</div>



<div class="menu-section">
    
    <div class="menu-image">
      <img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/10/menu-img3.jpg" alt="Delicious Dish" />
    </div>
    
    <div class="menu-content">
    <h2 class="menu-title"><span class='menu_symbol'>◊</span> Main Course <span class='menu_symbol'>◊</span> </h2>


  {menuData.main_course.map((dish,index)=>(
    <div key={index}>
      <div class="menu-item">
      <div class="item-name">{dish.name}</div>
<div class="item-price">$89</div>
      </div>
      <p class="item-description">
 {dish.ingredients}
</p>
</div>
  ))}

      


<div class="menu-item">
      <div class="item-name">HERBED LAMB STEAKS</div>
<div class="item-price">$89</div>


      </div>
      <p class="item-description">
  Grilled lamb cutlets, pomegranate glaze, butternut squash
</p>

      
       

    </div>
  </div>



    </>
  )
}

export default MenuItems