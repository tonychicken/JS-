const url= './api/people.json';

fetch(url)
.then(response=>response.json())

.then(response => console.log('Success:', response)).catch(error => console.error('Error:', error));