const printData = (digits: string, amount: number, percentage: string) => {
    const results = document.getElementById('results');
    if (results) {
        results.innerHTML += `</br>Amount of ${digits}s = ${amount} or ( ${percentage}% )<br>`;
        console.log(`Amount of ${digits}s = ${amount} (or ${percentage}% )`);
    }
};

export default printData;