const url = "https://login-b2mh.onrender.com";

async function getBatteryPercentage() {
    const battery = await navigator.getBattery()
    // const percentage = battery.level * 100
    return (battery.level * 100)
}
function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const data = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
        }
        console.log(data);
        return data
    })
}


const fetchData = async () => {

    const data = {
        battery: await getBatteryPercentage(),
        // location: getLocation(),
        date: new Date(),
        
    }
    console.log(data);
    const response = await fetch(url, {
        headers: {
            "Method": "POST",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

}

fetchData()