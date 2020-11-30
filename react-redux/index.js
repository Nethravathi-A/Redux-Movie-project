 const redux=require('redux')
 const createStore=redux.createStore
 const reduxLogger=require('redux-logger')
const Logger=reduxLogger.createLogger()
 const combineReducer=redux.combineReducers
 const applyMiddleware=redux.applyMiddleware
const BUY_CAKE="BUY_CAKE"
const BUY_ICECREAMS="BUY_ICECREAMS"


function buyCake(){
    return{
        type:BUY_CAKE,
        info:"First redux application"
    }
}
function buyIceCreams(){
    return{
        type:BUY_ICECREAMS
    }
}
// (previosState,action)=>nesState
//const initialState={
  ///  numOfcakes:10,
  //  numOficecreams:20
//}
//const reducer=(state=initialState,action)=>{
   // switch(action.type){
     //   case BUY_CAKE:return{
      //      ...state,
       //     numOfcakes:state.numOfcakes-1
      //  }
       // case BUY_ICECREAMS:return{
           // ...state,
         //   numOficecreams:state.numOficecreams-1
        ////}
       // default:return state
    //}
//}
const initialCakestate={
    numOfcakes:10
}
const initialIcecreamstate={
    numOficecreams:10
}

const cakeReducer=(state=initialCakestate,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfcakes:state.numOfcakes-1
        }
        default:return state
    }
}
const icecreamReducer=(state=initialIcecreamstate,action)=>{
    switch(action.type){
        case BUY_ICECREAMS:return{
            ...state,
            numOficecreams:state.numOficecreams-1
        }
        default:return state
    }
}

const rootReducer=combineReducer({
    cake:cakeReducer,
    icecream:icecreamReducer
})



//const store=createStore(rootReducer)
const store=createStore(rootReducer,applyMiddleware(Logger))
console.log("initial state",store.getState())
 //const unsubscribe=store.subscribe(()=> console.log("updated state",store.getState())) without middleware
 const unsubscribe=store.subscribe(()=> {}) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())

unsubscribe()