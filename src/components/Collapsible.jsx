import {useState} from 'react'
function Collapsible(props){
    const [isOpen, setIsopen] = useState(false);
    return(
    <>
        <tr
                        style={{ backgroundColor: "#ccc" }}
         onClick={()=> setIsopen(!isOpen)} >
            { props.header}
         </tr>
         {isOpen &&<>{props.children}</>}
    </>
    )

    
}
export default Collapsible;