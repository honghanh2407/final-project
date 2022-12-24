const homework = [
    {
        id: 1,
        name: "Bài tập Hóa",
        img: "https://i.pinimg.com/564x/c4/69/eb/c469eb316b86a5110466aa3e4930b37b.jpg",
        status: "UNCOMPLETED",
    },
    {
        id: 2,
        name: "Bài tập Anh",
        img: "https://i.pinimg.com/564x/17/c0/5a/17c05aa328c58eb832f0aec05121f657.jpg",
        status: "UNCOMPLETED",
    },
    {
        id: 3,
        name: "Bài tập Sinh",
        img: "https://i.pinimg.com/564x/a3/10/11/a310117ebcfcdcfaca8ff03cb74ba3e0.jpg",
        status: "UNCOMPLETED",
    },
    {
        id: 4,
        name: "Bài tập Văn",
        img: "https://i.pinimg.com/736x/41/a4/c9/41a4c908b75706fb1d01a2f9f7628922.jpg",
        status: "UNCOMPLETED",
    },
    {
        id: 5,
        name: "Bài tập Toán",
        img: "https://i.pinimg.com/564x/50/e2/2c/50e22c17510b69c39d643a457e1fec31.jpg",
        status: "UNCOMPLETED",
    },
    {
        id: 6,
        name: "Bài tập Lý",
        img: "https://i.pinimg.com/564x/4e/2e/1c/4e2e1cd966ebde28d38c65a9cc0d7f58.jpg",
        status: "UNCOMPLETED",
    },
]
const list_homework = document.querySelector("#list-homework");
function createItem (homework) {
    let div_homework = document.createElement("div")
    div_homework.setAttribute("class","homework")
    div_homework.innerHTML = `
        <div class="homework-image" alt="">
         <img src="${homework.image}">
        </div>
        <div class="homework-content">
        <div class="homework-name">${homework.name}</div>
        <div class="homework-status">${homework.status}</div>
        </div>
        <div class="add-to-do">
         <button id=${homework.id}>Làm bài</button>
        </div>`;
    return div_homework;
}