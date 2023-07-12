const url = 'https://bbc-good-food-api.p.rapidapi.com/collection/breakfast-recipes/recipes/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22e9e9e7d0mshb1034fff1b2f83ep18914ajsn7327df5a364c',
		'X-RapidAPI-Host': 'bbc-good-food-api.p.rapidapi.com'
	}
};

async function apiCall() {
	const response = await fetch(url, options)
	const {results} = JSON.parse(await response.text());
	let cartona ='';
	for(const iterator of results){
		cartona+=` <div class="container">
        <div class="api">
          <div class="col-lg-4">
            <div class="card-api" style="width: 35rem;">
              <img src="${iterator.imageSrc}" class="card-img-top" alt="...">
            </div>
            <div class="card-api-body">
                <h5 class="card-api-title">${iterator.recipeName}</h5>
                <p class="card-api-text">${iterator.description}</p>
                <a href="#" class="btn btn-primary">order now</a>
            </div>
          </div>
        </div>
      </div>`
	}
	
	document.getElementById('root').innerHTML = cartona;
}


apiCall();



