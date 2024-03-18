const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const btnAddShow = document.querySelector(".btn-addShow");
const myDate = document.querySelector(".myDate");
const bsOffCavas = new bootstrap.Offcanvas("#inputArea");
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");
const form1 = document.querySelector("form");
const btnSend = document.querySelector(".btn-send");
const lists = document.querySelectorAll(".list");
const btnUpdate = document.querySelector(".btn-update");

myDate.addEventListener("change", e => {
    let date = e.currentTarget.value;
    window.location.href = `/expe/d/${date}`;
})

btnPrevDate.addEventListener("click", e => {
    let date = new Date(myDate.value);
    date.setDate(date.getDate() - 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnNextDate.addEventListener("click", e => {
    let date = new Date(myDate.value);
    date.setDate(date.getDate() + 1);
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnAddShow.addEventListener("click", e => {
    document.querySelector("input[name=title]").value = "";
    document.querySelector("input[name=money]").value = "";
    document.querySelector("input[name=id]").value = "";
    document.querySelector("select").selectedIndex = 0;
    newSet.classList.remove("d-none");
    newSet.classList.add("d-flex");
    updateSet.classList.add("d-none");
    updateSet.classList.remove("d-flex");
    bsOffCavas.show();
})

btnSend.addEventListener("click", e => {
    form1.submit();
})
lists.forEach(list => {
    list.addEventListener("click", e => {
        // alert(e.currentTarget.getAttribute("title"))
        let id = e.currentTarget.getAttribute("id");
        let title = e.currentTarget.getAttribute("title");
        let sort = e.currentTarget.getAttribute("sort");
        let money = e.currentTarget.getAttribute("money");
        document.querySelector("input[name=title]").value = title;
        document.querySelector("input[name=money]").value = money;
        document.querySelector("input[name=id]").value = id;
        document.querySelector("select").selectedIndex = sort;
        newSet.classList.add("d-none");
        newSet.classList.remove("d-flex");
        updateSet.classList.remove("d-none");
        updateSet.classList.add("d-flex");
        bsOffCavas.show();
    })
})

btnUpdate.addEventListener("click", e => {
    let url ="/expe";
    const formDate = new FormData(form1)
    // console.log(formDate);
    // 觀察FormData用，正式使用不需要
    for(let [key, value] of formDate.entries()){
        console.log(key, value);
    }
    fetch(url, {
        method: "PUT",
        body: formDate
    }).then(response => {
        return response.json()
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
})