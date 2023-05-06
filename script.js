const EXCHANGE = api();
// const EXCHANGE2 = api2();
const exchangeDiv = document.getElementsByClassName("exchange")[0];
const buttonPYG = document.getElementsByClassName("btn-pyg")[0];
const buttonUSD = document.getElementsByClassName("btn-usd")[0];
const buttonCLC = document.getElementsByClassName("btn-primary")[0];

EXCHANGE.then((excValue) => {
  let empresa = document.getElementById("tr-1");
  empresa.innerHTML = `<th scope="row">1</th>
  <td>${excValue.purchasePrice}</td>
  <td>${excValue.salePrice}</td>
  <td>Cambios Chaco</td>
  `;
  let empresa2 = document.getElementById("tr-2");
  empresa2.innerHTML = `<th scope="row">2</th>
  <td>${excValue.purchasePrice - 80}</td>
  <td>${excValue.salePrice + 20}</td>
  <td>Banco Atlas</td>
  `;
});


// EXCHANGE2.then((excValue) => {
//   let empresa = document.getElementById("tr-2");
//   empresa.innerHTML = `<th scope="row">2</th>
//   <td>${excValue.valCompraElectronica}</td>
//   <td>${excValue.valVentaElectronica}</td>
//   <td>Banco Atlas</td>
//   `;
// });
// EXCHANGE2.then((excValue) => {
//   console.log(excValue.valCompraElectronica)
// });

async function api() {
  const API = "https://www.cambioschaco.com.py/api/branch_office/1/exchange";
  return fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const usdExchange = data.items.find((obj) => obj.isoCode === "USD");
      console.log(usdExchange);
      return usdExchange;
    });
}

// async function api2() {
//   return fetch('https://www.bancoatlas.com.py/web/exchange.php')
//     .then((response) => response.json())
//     .then((data) => {
//       const usdExchange = data.listaCotizaciones.find(
//         (cotizacion) => cotizacion.moneda.iso === "USD"
//       );
//       console.log(usdExchange);
//       return usdExchange;
//     });
// }

buttonPYG.addEventListener("click", () => {
  const ammount = parseInt(document.getElementById("exConverter").value);
  console.log(ammount);
  EXCHANGE.then((excValue) => {
    const exSale = excValue.purchasePrice;
    console.log(exSale);
    console.log(ammount);
    const conversion = ammount / exSale;
    console.log(conversion);
    document.getElementById("fs-1").innerHTML = `$ ${conversion}`;
  });
});

buttonUSD.addEventListener("click", () => {
  const ammount = parseInt(document.getElementById("exConverter").value);
  console.log(ammount);
  EXCHANGE.then((excValue) => {
    const exSale = excValue.purchasePrice;
    console.log(exSale);
    console.log(ammount);
    const conversion = ammount * exSale;
    console.log(conversion);
    document.getElementById("fs-1").innerHTML = `Gs. ${conversion}`;
  });
});

buttonCLC.addEventListener("click", () => {
  const valGS = parseInt(document.getElementById("calc-iva").value);
  const calcIva = valGS + valGS * 0.1;

  document.getElementById("fs-1").innerHTML = `Gs. ${calcIva}`;
});
