let sal = document.querySelector(".sal");
const btn = document.querySelector(".btn");
let canvasChart = document.getElementById('myChart').getContext('2d');
let table = document.querySelector('.table');
// [0].children

let nec = 0.46;
let bus = 0.35;
let sel = 0.07;
let sav = 0.07;
let cha = 0.05;
// let res_nec = document.querySelector(".res_nec");
// let res_bus = document.querySelector(".res_bus");
// let res_sel = document.querySelector(".res_sel");
// let res_sav = document.querySelector(".res_sav");
// let res_cha = document.querySelector(".res_cha");
// const res = document.querySelector(".res");
function myChart() {

    const data = {
        labels: [
            'Necessities',
            'Investment',
            'Education',
            'Save',
            'Donate'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [2000,1000,600,600,250],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'red',
                'rgb(1, 157, 86)',
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            legend:{
                display : true,
                position: 'top',
                align:'start',
                // rtl : true,
                // labels : {
                //     boxWidth : 150
                // },
                title:{
                    padding : 150,
                    display : true
                }
            },
            layout: {
                backgroundColor : 'red',
                padding: 20
            }
        }
    };
    let myChart = new Chart(canvasChart, config)
}

function tableRes(cashflow) {
    console.log(cashflow[0]);
    // for (let j = 1; j < 6; j++) {
    //     let row = table.rows[j]
    //     row.children[2].textContent = cash;
    // }
    for (let i = 0; i < cashflow.length; i++) {
        let cash = cashflow[i];
        let row = table.rows[i+1];
        row.children[2].textContent = cash;
    }
}
// myChart();
btn.addEventListener("click", () => {
    const cashFlow = [(sal.value * nec).toFixed(2), (sal.value * bus).toFixed(2), (sal.value * sel).toFixed(2), (sal.value * sav).toFixed(2), (sal.value * cha).toFixed(2)]
    myChart(cashFlow);
    tableRes(cashFlow);
    table.style.display = 'block';
    sal.value = "";
})


// btn.addEventListener("click", () => {
//     table.style.display = 'block';
// })


/*

 */






//!----------------------------------------------------------------

// res_nec.innerHTML = (sal.value * nec).toLocaleString('en-US', {
//     style: "currency",
//     currency: 'ILS'
// });
// res_bus.innerHTML = (sal.value * bus).toLocaleString('en-US', {
//     currency: 'ILS'
// });;
// res_sel.innerHTML = (sal.value * sel).toLocaleString('en-US', {
//     style: "currency",
//     currency: 'ILS'
// });;
// res_sav.innerHTML = (sal.value * sav).toLocaleString('en-US', {
//     style: "currency",
//     currency: 'ILS'
// });;
// res_cha.innerHTML = (sal.value * cha).toLocaleString('en-US', {
//     style: "currency",
//     currency: 'ILS'
// });;
//!----------------------------------------------------------------














// // let btn = document.querySelector('.btn');
// // let table = document.querySelector('.table');
// btn.addEventListener('click',()=>{
//     let nec = 0.46;
//     let bus = 0.35;
//     let sel = 0.07;
//     let sav = 0.07;
//     let cha = 0.05;
//     const cashFlow = [5000 * nec, 5000 * bus, 5000 * sel, 5000 * sav, 5000 * cha]
//     const data = {
//         labels: [
//             'Necessities',
//             'Investment',
//             'Education',
//             'Save',
//             'Donate'
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             data: cashFlow,
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)',
//                 'rgb(100, 132, 86)',
//                 'rgb(1, 157, 86)',
//             ],
//             hoverOffset: 4
//         }]
//     };
//     const config = {
//         type: 'doughnut',
//         data: data,
//         options: {
//             plugins: {
//                 title: {
//                     display: true,
//                     text: 'Monthly Budget'
//                 },

//             },

//         }
//     };
//     let myChart = new Chart(canvasChart, config)
//     table.style.display = "inline-block";
// })



//     style: "currency",
















// let moon = document.getElementById('image')
// let box = document.getElementById('box')
// let stat = true;
// moon.addEventListener("click", () => {
//     if (stat) {
//         moon.src = '/moon.svg'
//         document.body.style.color="white"
//         box.style.background = "#FEFCD7"
//         document.body.style.background = "dimgrey"
//         moon.style.transition = "all 2s"
//         stat = false;
//     } else { 
//         moon.src = '/sun.svg'
//         document.body.style.color="black"
//         box.style.background = "white"
//         document.body.style.background = "white"
//         stat = true;
//     }
// });