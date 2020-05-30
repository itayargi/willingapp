import { observable, action } from 'mobx'

const cart= observable({
  item:[],
  modified:new Date(),
})

// create the actions
const addItem = action((name, quantity)=>{
  const item= cart.item.find(x=>x.name==name)
  if(item){
    item.quantity+=1;
  }
  else{
    cart.item.push({name,quantity})
  }
  cart.modified=new Date()

})