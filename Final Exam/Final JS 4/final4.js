function fetchData() {
    return new Promise(function(resolve, reject) {
        // Replace 'Sok Dara' with your full name
        setTimeout(function() {
            resolve('Data fetched! Student Name: Sar Sochettra');
        }, 1000);
    });
}

async function fetchAndProcessData() {
    try {
        // Replace 'Sok Dara' with your full name
        console.log('Student Name: Sar Sochettra');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
