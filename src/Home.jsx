// import React,{useEffect,useState} from "react";
// export default function Home(){
//     let [getRecipy,setRecipesList]=useState([])
//     useEffect(()=>{
//         getRecipes()
//     },[])
//     async function getRecipes(type){
//      let {data ,status}=await fetch((`https://forkify-api.herokuapp.com/api/v2/recipes?search?q=pizza`))
//        setRecipesList(data.recipes)
//        console.log(data);

//     }
// }

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// export default function Home() {
//     let [recipyList, setRecipy] = useState([])
//     useEffect(() => {
//         getData()
//     }, [])
//     async function getData() {
//         let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
//         setRecipy(data.recipes );
//         console.log(data)
//     }

//     return (
//         <>
//             <div className="row g-3">
//                 {recipyList.map((el, i) => {
//                     return <div key={i} className='col-md-3'>
//                         <div className="border h-100 border-info rounded">

//                             <h2>{el.title}</h2>
//                             <p>{el.publisher}</p>
//                         </div>
//                     </div>
//                 })}
//             </div>

//         </>
//     )
// }



// export default function Home(){


//     return (
//         <>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary bg-info">
//   <div class="container">
//     <link class="navbar-brand" href="#">Navbar</link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
//         <li class="nav-item">
//           <link class="nav-link" href="#">PORTFOLIO</link>
//         </li>
//         <li class="nav-item">
//           <link class="nav-link" href="#">ABOUT</link>
//         </li>
//         <li class="nav-item">
//           <link class="nav-link" href="#">CONTACT</link>
//         </li>
//       </ul>
          
      
//     </div>
//   </div>
// </nav>

//         </>
//     )
         
// }