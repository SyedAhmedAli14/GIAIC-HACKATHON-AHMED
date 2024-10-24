
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLUListElement;


toggleButton.addEventListener('click', () => {
    
    const listItems = skillsList.querySelectorAll('li');
    const listArray: HTMLElement[] = [];

    
    listItems.forEach((li) => listArray.push(li));

    
    listArray.sort(() => Math.random() - 0.5);

   
    skillsList.innerHTML = '';

    
    listArray.forEach((li) => skillsList.appendChild(li));
});