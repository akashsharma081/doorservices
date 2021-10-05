
// export function cart (state=[],action){
//         switch(action.type)
//         {
//             case "ADD_PRODUCTS":
//                 var temp = [...state];                
//                 temp.push(action.payload);
//                 return temp;           
//             case "DELETE_PRODUCTS":
//                var temp = state.filter((todo)=>{
//                 console.log("id to be deleted"+action.payload);   
//                 return todo.id!==action.payload});             
//                return [...temp];
//             default:               
//                return state;
//         }
// }

export function cart(state = [], action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            var temp = [...state];
            temp.push(action.payload);
            return temp;

        case "INC_CTR":
            // var ctr = state + 1;
            var newstate = state.map(function (a) {
                if (a.vendor_id == action.payload) {
                    a.qty = a.qty + 1
                }
                return a
            })

            return newstate;


        // case "DC_CTR":
        //     var ctr = state - 1;
        //     return ctr;
        case "DC_CTR":
            var newstate2 = state.map(function (b) {
                if (b.vendor_id == action.payload) {
                    b.qty = b.qty - 1
                }
                return b
            })
            return newstate2;

        // case "ALL_CTR":
        //     return state = 0;
        case "ALL_CTR":
            var newstate3 = state.map(function (c) {
                if (c.vendor_id == action.payload) {
                    c.qty = c.qty * 0
                }
                return c
            })
            return newstate3;

        case "DELETE_PRODUCTS":
            var temp = state.filter((pr) => {
                console.log("id to be deleted" + action.payload);
                return pr.id !== action.payload
            });
            return [...temp];
        default:
            return state;
    }
}