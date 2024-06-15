// create a function and follow the progressions inside the function.
document.getElementById('btnGet').addEventListener('click', fetchUserData);

function fetchUserData() {
  // Progression 1: Create a promise call which fetches data
  const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    }
  );

  // Progression 2: Display the fetched data in the form of list
  userPromise
    .then((users) => {
      let player = '<h2>Lists of Users</h2>';
      users.forEach((user) => {
        player += `<div class="player">
            <div class="strength">Name : ${user.name}</div>
            <div>Email   : ${user.email}</div>
            <div>Phone   : ${user.phone}</div>
            <div>Website : ${user.website}</div>
            <div>Company : ${user.company.name}</div>
            <div>City    : ${user.address.city}</div>
            <div>Zipcode : ${user.address.zipcode}</div>
           </div>`;
      });
      document.getElementById('message').innerHTML = player;
    })
    .catch((error) => {
      // Progression 3: When the promise call is rejected then throw an error
      console.log('Promise rejected.');
      console.log(error.message);
    });
}
