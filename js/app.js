const search = document.getElementById('search');


search.addEventListener('click', () => {
    const searchText = document.getElementById('search-text').value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data));
})

function displayFoods(foods) {
    let food = document.getElementById('foods');
    foods.meals.forEach(item => {
        let makeDiv = document.createElement('div');
        makeDiv.innerHTML = `
        
                    <div class="flex gap-6">
                    <img src="./images/banner_1.png" class="w-2/5 rounded" alt="">
                    <div class="w-3/5">
                        <h2 class="text-2xl font-bold">${item.strMeal}</h2>
                        <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem assumenda ab id neque et est ex iste quaerat. Cupiditate.</p>
                        <button class="text-amber-500 font-bold border-b-2 border-amber-500 mt-6" data-toggle="modal" data-target="#exampleModalLong">View Details</button>
                    </div>
                </div>`;
        food.appendChild(makeDiv);
    });
}

