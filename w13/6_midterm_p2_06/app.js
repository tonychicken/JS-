const btn = document.querySelector('.btn');
const url = './api/dataset.json';


let data = [];

btn.addEventListener('click', () => {
    fetchDataSet(url);
});


const fetchDataSet = () => {
    data = dataSet1;
    updateDOM();
};


const fetchDataAsync = async (url) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data)
        displayitems(data);
    } catch (err) {

    }
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data)
    displayitems(data);
}

function fetchData(url) {
    // const response = fetch(url).then().catch();
    // console.log('response',response);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data)
            displayitems(data);
        })
        .catch((err) => console.log('error', err));
}

const displayitems = (items) => {
    const displayData = items
        .map((item) => {
            return `<p>${item.name}</p>`
        })
        .join('');
    console.log('displayData', displayData);
    const element = document.createElement('div');
    element.innerHTML = displayData;
    document.body.appendChild(element);
}


function getData(url) {
    const xhr = new XMLHttpRequest();
    console.log('xhr0', xhr);

    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        console.log('xhr', xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log('done');
            const data = JSON.parse(xhr.responseText);
            console.log('data', data);
            const displayData = data
                .map((item) => {
                    return `<p>${item.name}</p>`
                })
                .join('');
            console.log('displayData', displayData);
            const element = document.createElement('div');
            element.innerHTML = displayData;
            document.body.appendChild(element);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };
    xhr.send();
}

const updateDOM = (providedData = data) => {
    let tempData = providedData.map((item) => {
        return `<div class="person"><strong>${item.name}</strong> ${formatMoney(item.money)}</div>`
    });
    tempData = tempData.join('');
    //    console.log('tempData', tempData);
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2> ${tempData}`
}


const addData = (obj) => {
    data.push(obj);
    // console.log('data', data);
    updateDOM();
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



