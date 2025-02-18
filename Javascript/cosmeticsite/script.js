async function fetchData() {
    const response = await fetch('cosmatic.json');
    const data = await response.json();
    cosmaticData = data;
    renderProducts();
}
fetchData();

const cosmaticData = [
    {
        "id": 495,
        "brand": "maybelline",
        "name": "Maybelline Face Studio Master Hi-Light Light Booster Bronzer",
        "price": "14.99",
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png",
        "rating": 5
    },
    {
        "id": 488,
        "brand": "maybelline",
        "name": "Maybelline Fit Me Bronzer",
        "price": "10.29",
        "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png",
        "rating": 4.5
    }
    // Add more products here
];
