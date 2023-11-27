const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name'); // name debe de tener . por ser una clase
const $b = document.querySelector('.blog'); //debe ser .blog por ser una clasee
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const data = fetch(`${usersEndpoint}/${username}`); // data
  data.then (response =>{ 
    console.log(response); 
    $n.textContent = '${response.name}';
    $b.textContent = '${response.blog}';// cambiar nombre de data a response
    $l.textContent = '${response.location}';

  })
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);