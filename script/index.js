const order = document.querySelector("#form");
const menu =document.querySelector("#food");
const watch = document.querySelector(".watch");
const items = document.querySelector(".items");
const reject = document.querySelector(".reject");
const ready = document.querySelector("#ready");
const times = document.querySelector('#times');
const date = new Date();
let hours = date.getHours();
console.log(hours)

order.addEventListener("submit",food_order);


function food_order(event){
    event.preventDefault();
    let fries = document.querySelector("#fries").checked;
    let burger = document.querySelector("#burger").checked;
    
    let coke = document.querySelector("#coke").checked;   
    let sandwich = document.querySelector("#sandwich").checked;     

  
   
    if(fries|| burger   || coke  || sandwich ){

        let checked_value = document.querySelectorAll(".check");
        let item_array=[];
        for(let i=0;i<checked_value.length;i++){
            if(checked_value[i].checked){
                item_array.push(checked_value[i].value);
                
            }
         }

         console.log("item_array",item_array)

         let status;
         if(hours>=24 || hours<=8){
             status= "close";
         }else{
             status="open";
         }
        let order_id = Math.floor(Math.random()*5000);
        menu.style.display="none";
        
        let food_promise = new Promise(function(resolve,reject){
            let time =Math.floor(Math.random() * 6000) +2000;
            
    
            if(status==="close"){
                reject("We are not taking orders right now!");
            }else{
                watch.innerHTML = `<h3>Thanks for order</h3><p>Your order id is ${order_id}</p><p>Please Wait, We are processing your order</p>`;
                watch.style.transform="scale(1)";
                setTimeout(function(){
                    resolve(item_array);
                },time);
            }
        });
    
        food_promise.then(function (res){
            watch.style.display="none";
            items.style.transform="scale(1)";
            ready.innerHTML = "<h2>Your order is ready</h2>";
            res.map(function(el){
                switch(el){
                    case "fries":
                        let div = document.createElement("div");

                        let img = document.createElement("img");
                        img.src="https://cdn.potatopro.com/cdn/ff/2LWL-gtUxNBHAVGzaldPMaZEABXTLgfQvogyeNgnjUQ/1640241722/public/styles/1200_wide/public/field/image/mcdonalds-japan-small-fries-1200x743_0.jpg?itok=b26Be0W7";
                        let p = document.createElement("p");
                        p.innerText=`Order id : ${order_id}`;

                        div.append(img,p);
                        items.append(div);
                        break;
                    case "burger":
                        let div_burger = document.createElement("div");

                        let img_burger = document.createElement("img");
                        img_burger.src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/q0astez5jmmfo5icayde";
                        let p_burger = document.createElement("p");
                        p_burger.innerText=`Order id : ${order_id}`;

                        div_burger.append(img_burger,p_burger);
                        items.append(div_burger);
                        break;

                    
                    case "coke":
                        let div_coke = document.createElement("div");

                        let img_coke = document.createElement("img");
                        img_coke.src="https://www.rd.com/wp-content/uploads/2020/10/mcdonalds-coke-collage.jpg";
                        let p_coke = document.createElement("p");
                        p_coke.innerText=`Order id : ${order_id}`;

                        div_coke.append(img_coke,p_coke);
                        items.append(div_coke);
                        break;

                      
                    


                    case "sandwich":
                        let div_sandwich = document.createElement("div");

                        let img_sandwich = document.createElement("img");
                        img_sandwich.src="https://nypost.com/wp-content/uploads/sites/2/2021/05/mcdonalds-39.jpg?quality=80&strip=all";
                        let p_sandwich = document.createElement("p");
                        p_sandwich.innerText=`Order id : ${order_id}`;

                        div_sandwich.append(img_sandwich,p_sandwich);
                        items.append(div_sandwich);
                        break;

                }
            })
        });
    
        food_promise.catch(function(error){
                        reject.style.transform="scale(1)";
                        times.innerText="We will be open at 9:00AM. Thanks!";
                        let div = document.createElement("div");
                        let img = document.createElement("img");
                        img.src="https://i.guim.co.uk/img/media/5c8971eb4182e6a03c91f22b87c57798ee9fcff0/0_152_4550_2730/master/4550.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ff9295d7be9278e8f00f1db2373d8da1";
                        let p = document.createElement("p");
                        p.innerText=`We are not taking orders right now`;

                        div.append(img,p);
                        reject.append(div); 
                        console.log(error);
        });
        resetForm();

    }
    else{
        alert("Please choose atleast One Item:");
    }

}


function resetForm(){
document.querySelector("#fries").checked = false; 
document.querySelector("#burger").checked = false; 

document.querySelector("#coke").checked = false;  
document.querySelector("#sandwich").checked = false;

    
}
