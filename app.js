const ul = document.getElementById('list');
const input = document.getElementById('task');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    const span = document.createElement('span');
    span.className = 'text-end float-end';
    span.innerHTML = "<i class='fa-solid fa-x'></i>";
    li.appendChild(span);

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const icon = span.querySelector('.fa-solid.fa-x');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        ul.removeChild(li);

        const index = itemsArray.indexOf(text);
        if (index !== -1) {
            itemsArray.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
    });
};

// Display the items from localStorage on page load
data.forEach((item) => {
    liMaker(item);
});


function newElement() {
    var toast = new bootstrap.Toast(document.getElementById('toast'));
    const toastNull = document.getElementById("toastBody");
    
    if (input.value.trim() === "") {
        toastNull.textContent = "Bu alanı boş bırakamazsın!"
        toast.show();
    } else {
        toastNull.textContent = "Listeye Eklendi!"
        toast.show();
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        input.value = "";
    }
}
