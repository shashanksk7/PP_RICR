function addTask() {
    const task = document.getElementById("taskIP").value.trim();

    if (task === "") {
        alert("Please Add the Task");
        return; // return early if the task input is empty
    }

    const List = document.getElementById("taskList");

    const li = document.createElement("li");
    li.classList.add("my-2");

    const sp = document.createElement("span");
    sp.innerText = task;

    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "mx-3");
    btn.onclick = () =>{
        li.remove();
    };

    const sp1 = document.createElement("span");
    sp1.innerText = "Delete"; // wrap Delete in quotes

    const i = document.createElement("i");
    i.classList.add("bi", "bi-trash-fill", "px-2");

    btn.appendChild(i);
    btn.appendChild(sp1);

    li.appendChild(sp);
    li.appendChild(btn);

    List.appendChild(li);

    
}
