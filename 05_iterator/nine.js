const myNums = [1,2,3];
const initialval = 0;
const nums = myNums.reduce((accumulator , curval) =>
                            accumulator+curval
                            ,initialval);
               console.log(nums);
               // reduce is the alternative of the loops and generally 
               // use in the shoping carts that we see that the cart 
               // prices get automatically add up so this concept is use

const myCart = [
    {
        itemName: "Web dev course",
        price: 1999,
    },
    {
        itemName: "cpp course",
        price: 16999,
    },
    {
        itemName: "AI Ml course",
        price: 12999,
    },
]    

const totalPrice = myCart.reduce((accu , item) => 
                                  accu+item.price
                                  , 0);
                                  console.log(totalPrice);  

