
// const url = "http://localhost:3000";
const url = "https://login-b2mh.onrender.com";

async function getBatteryPercentage() {
    const battery = await navigator.getBattery()
    // const percentage = battery.level * 100
    return Math.floor(battery.level * 100)
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


function getDate() {
    const now = new Date()
    return now.toString()
}

const sendData = async () => {
    const data = {
        battery: await getBatteryPercentage(),
        // location: getLocation(),
        date: new Date().toString()

    }
    console.log(data);

    try {
        const response = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = response;

    } catch (error) {
        console.log("failes", error);
    }

}

sendData()