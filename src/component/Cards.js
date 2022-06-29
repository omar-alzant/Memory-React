import {useState} from 'react'
import Card from './Card'


function Cards () {
    const [items,setItems] = useState([
        {id:1, img:"./img/helmet.png",stat:""},
        {id:1, img:"./img/helmet.png",stat:""},
        {id:2, img:"./img/potion.png",stat:""},
        {id:2, img:"./img/potion.png",stat:""},
        {id:3, img:"./img/ring.png",stat:""},
        {id:3, img:"./img/ring.png",stat:""},
        {id:4, img:"./img/scroll.png",stat:""},
        {id:4, img:"./img/scroll.png",stat:""},
        {id:5, img:"./img/shield.png",stat:""},
        {id:5, img:"./img/shield.png",stat:""},
        {id:6, img:"./img/sword.png",stat:""},
        {id:6, img:"./img/sword.png",stat:""},
        {id:7, img:"./img/cloud.png",stat:""},
        {id:7, img:"./img/cloud.png",stat:""},
        {id:8, img:"./img/ice.png",stat:""},
        {id:8, img:"./img/ice.png",stat:""},
    ].sort(()=> Math.random() - 0.5))

    const [prev,setPrev] = useState(-1);  // -1 because 0 is used

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }else
        {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(()=>{
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items])
                setPrev(-1);
            },500)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id);
        }

}

  return (
    <div className='container'>
        {items.map((item,index) => (
            <Card item={item} key={index} id={index} handleClick={handleClick}/>
        ))}
    </div>
  )
}

export default Cards