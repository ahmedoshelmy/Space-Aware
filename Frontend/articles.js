window.onload = async () => {

let articles =[]
let divX  = document.querySelector("#articles-body")
console.log(divX)
axios.get('http://127.0.0.1:8000/articles/').then(r=>{
    articles = r.data
    console.log(articles)
}).then(()=>{
    for(let i =0 ;i<articles.length;i++){
        let x = articles[i]['fields']
        if(divX)divX.innerHTML += ` <div class="con">
        <h1>${x['title']}</h1>
        <div class="grey">Category: Species: </div>
        <br>
        <div class="content">
            <div>
                <div id="DIV" class="gradient">
                    ${x['description']}
                    </div><br>
                <button onclick="myFunction()" id="myBtn">
                    <span id="btnText">show more</span>
                    <i id="angle-down" class="uil uil-angle-down"></i>
                    <i id="angle-up" class="uil uil-angle-up"></i>
                </button>
            </div>
            <div><img
                    src="${x['image']}"
                    alt="image" class="image"></div>
        </div>
        <div>Resources: <a href="#">Resource</a></div>
    </div>
    <hr style="width: 50%;">`
    
    }
})
}
