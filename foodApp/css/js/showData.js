async function getData(url){
    let res=await fetch(url);
    let data=await res.json();
    let fdata=data.meals;

    return fdata;
}


function append(fdata,container){
    console.log(fdata)
    fdata.forEach(({strMeal,strCategory,strMealThumb,strYoutube,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strInstructions}) => {
        console.log(strIngredient1,strIngredient2)
        let div=document.createElement("div");
        let name=document.createElement('p');
        name.className="namecls";
        name.innerText=`${strMeal} \n Category:- ${strCategory}`;
        let img=document.createElement("img");
        img.className="imgC"
        img.src=strMealThumb;
        let ing=document.createElement('p');
        ing.className="ingrdC";
        let ingred=strIngredient1+" "+strMeasure1+", "+strIngredient2+" "+strMeasure2+", "+strIngredient3+" "+strMeasure3+", "+strIngredient4+" "+strMeasure4+", "+strIngredient5+" "+strMeasure5+", "+strIngredient6+" "+strMeasure6+", "+strIngredient7+" "+strMeasure7+", "+strIngredient8+" "+strMeasure8+", "+strIngredient9+" "+strMeasure9;
        ing.innerText=`Ingredients:- ${ingred}`;
        let instru=document.createElement('p');
        instru.className="instrC"
        instru.innerText=`Instruction:- ${strInstructions}`;
        let video=document.createElement("span");
        video.className="videoC";
        video.innerText=`Video Link:- ${strYoutube}`;
        let lineBreak=document.createElement("hr");

        div.append(name,img,ing,instru,video,lineBreak);
        console.log()
        container.append(div);
    });
}


export {getData,append}