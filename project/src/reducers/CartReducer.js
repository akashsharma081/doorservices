
export function cart (state=[],action){
        switch(action.type)
        {
            case "ADD_PRODUCTS":
                var temp = [...state];                
                temp.push(action.payload);
                return temp;           
            case "DELETE_PRODUCTS":
               var temp = state.filter((todo)=>{
                console.log("id to be deleted"+action.payload);   
                return todo.id!==action.payload});             
               return [...temp];
            default:               
               return state;
        }
}