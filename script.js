async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const ul = document.getElementById('users');

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    ul.appendChild(li);
  });
}

getUsers();