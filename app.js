const button = document.getElementById('buscar');
const name = document.getElementById('name');
const image = document.getElementById('image');
const email = document.getElementById('email');
const age = document.getElementById('age');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');

button.addEventListener('click', async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()

    const usuario = data.results[0]
    name.textContent = `Name: ${usuario.name.title}. ${usuario.name.first} ${usuario.name.last}`
    image.src = usuario.picture.large
    email.textContent = `E-mail: ${usuario.email}`
    if (usuario.gender === 'male') {
        usuario.gender = 'Male'
    } else {
        usuario.gender = 'Female'
    }
    gender.textContent = `Gender: ${usuario.gender}`
    age.textContent = `Age: ${usuario.dob.age}`
    phone.textContent = `Phone: ${usuario.phone}`
})