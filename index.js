document.querySelector("form").addEventListener("submit",myFun)
function myFun(){
   
    event.preventDefault()
    document.querySelector("#wait").innerHTML="Sorry select your order!";
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#center").innerHTML=null; 
    document.querySelector("#inneroid").innerHTML=null;
let ff=document.querySelector("#ff").checked; 
let cc=document.querySelector("#cc").checked; 
let bg=document.querySelector("#bg").checked; 
let pj=document.querySelector("#pj").checked; 
let ds=document.querySelector("#ds").checked; 
let center=document.querySelector("#center")
// console.log(ff)

if(ff==false && cc==false && bg==false && pj==false && ds==false) {
   document.querySelector("#wait").innerHTML=null;
   document.querySelector("#enjoy").innerHTML=null
 
   document.querySelector("#wait").innerHTML="Sorry please select your order!";
  
   let d1=document.createElement("div")
   let img=document.createElement("img")
   img.src="https://media1.giphy.com/media/l2JJGu5LiSkdtp2Du/200w.webp?cid=ecf05e47xrjl1s3h6yrmiokhru0t1bskqwnd53gztzww71pe&rid=200w.webp&ct=g"
   d1.append(img)
   center.append(d1)

}
   if(ff==true && cc==false && bg==false && ds==false && pj==false ) {
       document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
       document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
       let d1=document.createElement("div")
       let img=document.createElement("img")
       img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
       d1.append(img)
       center.append(d1)
    setTimeout(function(){
        document.querySelector("#enjoy").innerHTML=null
        document.querySelector("#wait").innerHTML=null;
        document.querySelector("#wait").innerHTML="Your order is ready!";
        d1.append(img)
        center.append(d1)
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
        document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
   
    },4000)
   }


   if(ff==true && cc==true && bg==false && ds==false && pj==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     d2.append(img2)
     center.append(d1,d2)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
 },4000)

}

 if(ff==true && cc==true && bg==true && ds==false && pj==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     center.append(d1,d2,d3)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
 },4000)
 }



 if(ff==true && cc==true && bg==true && pj==true && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     center.append(d1,d2,d3,d4)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
 },4000)

 }



 if(ff==true && cc==true && bg==true && pj==true && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
 },4000)

 }

 if(ff==false && cc==true && bg==true && pj==true && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==false && bg==true && pj==true && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d2.innerHTML=null;
 },4000)

 }

 if(ff==false && cc==false && bg==false && pj==true && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d2.innerHTML=null;
     d3.innerHTML=null;
 },4000)

 }

 if(ff==false && cc==false && bg==false && pj==false && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d2.innerHTML=null;
     d3.innerHTML=null;
     d4.innerHTML=null;
 },4000)
 }


 if(ff==true && cc==false && bg==true && pj==false && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
   
     d2.innerHTML=null;
     d5.innerHTML=null;
     d4.innerHTML=null;
 },4000)

 }
 if(ff==true && cc==false && bg==false && pj==true && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
   
     d2.innerHTML=null;
     d5.innerHTML=null;
     d3.innerHTML=null;
 },4000)
}
if(ff==true && cc==false && bg==false && pj==false && ds==true) {
    console.log("fasdfas")
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
   
     d2.innerHTML=null;
     d4.innerHTML=null;
     d3.innerHTML=null;
 },4000)

 }

  if(ff==false && cc==true && bg==true && pj==false && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d4.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==false && pj==true && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d3.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==false && pj==false && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d3.innerHTML=null;
     d4.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==false && bg==true && pj==true && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d2.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==false && bg==true && pj==false && ds==true ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d4.innerHTML=null;
     d2.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==false&& pj==false && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d4.innerHTML=null;
     d3.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==false && bg==true && pj==false && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d4.innerHTML=null;
     d2.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }

 if(ff==false && cc==false && bg==false&& pj==true  && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
     d3.innerHTML=null;
     d2.innerHTML=null;
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==true && pj==true  && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
    
     d5.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==false && pj==true  && ds==true ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d1.innerHTML=null;
    
     d3.innerHTML=null;
 },4000)

 }


 if(ff==true&& cc==true && bg==false && pj==true  && ds==false ) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d5.innerHTML=null;
    
     d3.innerHTML=null;
 },4000)

 }



 if(ff==true&& cc==false && bg==false && pj==true  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d2.innerHTML=null;
    
     d3.innerHTML=null;
 },4000)

 }


 if(ff==true&& cc==false && bg==true && pj==false  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d2.innerHTML=null;
    
     d4.innerHTML=null;
 },4000)

 }


 if(ff==true&& cc==false && bg==true && pj==true  && ds==false) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d2.innerHTML=null;
    
     d5.innerHTML=null;
 },4000)

 }


 if(ff==true&& cc==false && bg==true && pj==true  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d2.innerHTML=null;
    
  
 },4000)

 }



 if(ff==true&& cc==true && bg==false && pj==false  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d4.innerHTML=null;
    
     d3.innerHTML=null;
 },4000)

 }


 if(ff==false && cc==true && bg==true  && pj==false  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d4.innerHTML=null;
    
     d1.innerHTML=null;
 },4000)

 }


 if(ff==true&& cc==true && bg==false  && pj==true  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d3.innerHTML=null;
    
   
 },4000)

 }



 if(ff==true&& cc==true && bg==true  && pj==false  && ds==true) {
    document.querySelector("#inneroid").innerHTML=`Order ID :${Math.floor(Math.random() * 2453234523)}`;
    document.querySelector("#wait").innerHTML=null;
    document.querySelector("#enjoy").innerHTML=null
    document.querySelector("#wait").innerHTML="Wait for 3 seconds your order is preparing!"
    let d1=document.createElement("div")
    let img=document.createElement("img")
    img.src="https://media4.giphy.com/media/RiEW6mSQqjRiDy51MI/200w.webp?cid=ecf05e47pljm8fc9uxpef4aquu59tkl3doj4dyu3s7y4s3ud&rid=200w.webp&ct=g"
    d1.append(img)
    center.append(d1)
 setTimeout(function(){
    
    document.querySelector("#wait").innerHTML="Your order is ready!";
     img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziIwKXwoZb2ZbVF_Vecfk8FXBf_Y8SEJi1Q&usqp=CAU"
     let img2=document.createElement("img")
     img2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZVH8D1dsThSjYbtP-9H8mSwrWG5SLChVQ&usqp=CAU"
     let d2=document.createElement("div")
     let d3=document.createElement("div")
     let img3=document.createElement("img")
     img3.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AAycHV7Pi4x7NAVcderGa-76CzBxOwfYZQ&usqp=CAU"
     d2.append(img2)
     d3.append(img3)
     let d4=document.createElement("div")
     let img4=document.createElement("img")
     img4.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABEuNNbHNyS1y84lrGUIRKRCcbwcYeZqcUA&usqp=CAU"
     d4.append(img4)
     let d5=document.createElement("div")
     let img5=document.createElement("img")
     img5.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBty6bFKUG-0SnD2k0AJlmfFGJuHhLPsx2lg&usqp=CAU"
     d5.append(img5)
     center.append(d1,d2,d3,d4,d5)
     document.querySelector("#enjoy").innerHTML="Enjoy your meal !"
     d4.innerHTML=null;
    
   
 },4000)

 }
}