
function displayInfor(response) {
    let users = response.data;
    console.log(users);
    let list =document.querySelector('ul');
    if(list !== null) list.remove();
    const main =document.querySelector('.main');
    const ul =document.createElement('ul');
    for (let user of users) {
        let li = document.createElement('li');
        li.textContent = user.name + ":" + user.message;
        li.style.color = "blue";
        li.style.background=user.color;
        li.style.margin = "20px";
        li.style.padding = "10px";
        ul.appendChild(li);
        main.appendChild(ul);
    }
};
function addText(event) {
    const message = document.querySelector('.text').value;
    let user = localStorage.getItem('name')
    let color = localStorage.getItem('color')
    let newtext = {
        name :user,
        message: message,
        color:color,
    };
   document.querySelector('.text').value =""


    const url = "http://localhost:5000/users";
    axios
        .post(url,newtext)
        .then(displayInfor);
}
function lodData() {
    const url = "http://localhost:5000/users";
    axios
        .get(url)
        .then(displayInfor)
}

const btnsend =document.querySelector('.send');
btnsend.addEventListener('click',addText)
setInterval(lodData,1000)

