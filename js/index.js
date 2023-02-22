 
 let allnews =[];
 async function getNews(){
 let apiRespons=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza
 `)
let finalResult =await apiRespons.json();
allnews =   finalResult.recipes;
console.log(allnews);
displayNews()
}
getNews()


function displayNews(){
    box=``;
    for(i=0;i<allnews.length;i++){
        box +=`
        <div class="col-md-4">
        <div class="item text-center shadow">
       <img class="w-100" src="${allnews[i].image_url}" alt="">
       <h4>${allnews[i].title} </h4>
       <a href="${allnews[i].source_url }" class="btn btn-outline-success btn-sm " >Make it Now</a>
       <span class="text-success fw-bold">${allnews[i].recipe_id }</span>
   </div>
   </div>
        `
    }
    document.getElementById('newss').innerHTML = box
}