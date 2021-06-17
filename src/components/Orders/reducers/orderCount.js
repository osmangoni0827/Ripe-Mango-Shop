

const CountValue=Number(localStorage.getItem("CountCartProduct"));
const OrderCountReducer = (count=CountValue, action) => {
    switch (action.type) {
        case 'INCREMENT-ORDER':
            count=count+1
            
            return count
        case 'DECREMENT-ORDER':
            count=count>1?count-1:null
            return count
        default:
            return count;
    }
}
export default OrderCountReducer;