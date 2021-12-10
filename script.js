var data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
  ],
};

var options = {
  seriesBarDistance: 10,
};

new Chartist.Bar('.ct-chart', data, options);
const tbody = document.querySelector('tbody');

const country = fetch('https://restcountries.com/v3.1/all', {
  method: 'GET',
}).then(async (res) => {
  const data = await res.json();
  const countries = data.slice(0, 7).map((country) => {
    return {
      image: country.flags.png,
      name: country.name.common,
    };
  });
  console.log(countries);
  for (let i = 0; i < countries.length; i++) {
    //Etiqueta contenedora
    const tr = document.createElement('tr');

    const users = Math.floor(Math.random() * 100);
    const suscribe = (Math.random() * 100).toFixed(2);

    const template = `
        <td>
          <img src="${countries[i].image}" alt="">
          <span>${countries[i].name}</span>
        </td>
        <td>${users}K</td>
        <td>${suscribe}%</td>
    `;
    tr.innerHTML = template;
    tbody.appendChild(tr);
  }
});
