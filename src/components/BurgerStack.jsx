const BurgerStack =(props)=>{

return(
<>
<ul>
        {props.stack.map((ingredient)=>(
           

               
               <li
                style={{backgroundColor:ingredient.color}}
                onClick={()=>props.handleRemoveStack(ingredient)}
                >
                    {ingredient.name}

                </li>
           

        ))}
 </ul>
</>

)


}


export default BurgerStack