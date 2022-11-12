
let bookingData = JSON.parse(localStorage.getItem("myBook")) || [];
function displayTable(data){
    document.querySelector("#container").innerHTML="";
    data.forEach(function(element,index){
    let div=document.createElement("div")
    
    let image=document.createElement("img")
        image.setAttribute("src", element.avatar)
        
    let title=document.createElement("h3")
        title.innerText = element.title;
        
    let cat=document.createElement("h4")
        cat.innerText = element.categary;
        
    let price=document.createElement("h4")
        price.innerText =" "+"Price"+" : ₹ "+element.price;
        let rat=document.createElement("h5")
        rat.innerText = " "+"Ratting"+" : "+element.Ratting 
        let btn=document.createElement("button")
        btn.innerText = "Pay Now"
    
        btn.addEventListener("click", function () {
        alert("Please wait we are redirecting you to payment page ")
        window.location.href = "payment.html";
        })
        let del=document.createElement("button")
        del.innerText = "Delete"
        del.addEventListener("click", function () {
           deleteData(bookingData,index)
         alert("Are you sure, you want to delete")
        })

    div.append(image,title,cat,price,rat,btn,del);
    document.querySelector("#container").append(div);
    
    
    })
}

function search() {
    let p = document.querySelector("input").value
    let newData = bookingData.filter(function (ele) {
        return ele.title.toLowerCase().includes(p.toLocaleLowerCase());


    });
    displayTable(newData)

};

function deleteData(data,index) {
    data.splice(index, 1)
    localStorage.setItem("myBook",JSON.stringify(data));
    displayTable(data);
  }

function justSort() {
    let sorted = document.querySelector("select").value;
    if (sorted == "low to high") {
        bookingData.sort((a, b) => a.price - b.price);
    }
    if (sorted == "high to low") {
        bookingData.sort((a, b) => b.price - a.price);

    }

    displayTable(bookingData);
}



displayTable(bookingData)


