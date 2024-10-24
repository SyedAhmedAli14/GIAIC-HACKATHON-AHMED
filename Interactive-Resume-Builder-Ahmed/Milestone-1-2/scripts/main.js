var toggleButton = document.getElementById('toggleButton');
var skillsList = document.getElementById('skillsList');
toggleButton.addEventListener('click', function () {
    var listItems = skillsList.querySelectorAll('li');
    var listArray = [];
    listItems.forEach(function (li) { return listArray.push(li); });
    listArray.sort(function () { return Math.random() - 0.5; });
    skillsList.innerHTML = '';
    listArray.forEach(function (li) { return skillsList.appendChild(li); });
});
