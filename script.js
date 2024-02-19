const i = document.createElement("i");
i.setAttribute("class", "fa-solid fa-bars");
i.setAttribute("id", "bars");

//Access the div and let it possess the div as its child
const headerDiv2 = document.getElementById("header-part2");
headerDiv2.appendChild(i);

const barsID = document.getElementById("bars");

//create a div to hold your links
const div = document.createElement("div");
div.setAttribute("class", "small-div");
div.setAttribute("id", "small-div");
headerDiv2.appendChild(div);
const divID = document.getElementById("small-div");

//create an array to hold the values of the anchor tags
const linkArr = [];
linkArr[0] = "Home";
linkArr[1] = "Products";
linkArr[2] = "Resources";
linkArr[3] = "Pricing";
linkArr[4] = "Login";
linkArr[5] = "Sign Up";

for (let i = 0; i < linkArr.length; i++)
{
    const a = document.createElement("a");
    const a_text = document.createTextNode(linkArr[i]);
    a.appendChild(a_text);
    a.setAttribute("class", "droid-link");
    div.appendChild(a);
}

if (window.innerWidth >= 1071) 
{
    i.remove();    
}

let hidden = 0; 
barsID.addEventListener("click", () => 
{
    if(hidden === 0)
    {
        divID.style.opacity = "1";
        divID.style.visibility = "visible";
        hidden = 1;
    }
    else
    {
        divID.style.opacity = "0";
        divID.style.visibility = "hidden";
        hidden = 0;
    }
});


//access both buttons
const monthButton = document.getElementById("month");
const annualButton = document.getElementById("annual");

//ACCSESS to tjhe prices
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");

annualButton.addEventListener("click", () => 
{
    monthButton.style.backgroundColor = "transparent";
    monthButton.style.color = "whitesmoke";

    //change the prices when the buttons are clicked
    price1.innerHTML = "$120";
    price2.innerHTML = "$240";
    price3.innerHTML = "$450";

    annualButton.style.backgroundColor = "#ebebeb";
    annualButton.style.color = "black";
});

monthButton.addEventListener("click", () => 
{
    annualButton.style.backgroundColor = "transparent";
    annualButton.style.color = "whitesmoke";

    price1.innerHTML = "$10";
    price2.innerHTML = "$20";
    price3.innerHTML = "$40";

    monthButton.style.backgroundColor = "#ebebeb";
    monthButton.style.color = "black";
});
