const url = "http://localhost:";

const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    
}

navigator.getBattery().then(battery=>console.log(battery.level * 100));
navigator.geolocation.getCurrentPosition((position)=>{
    const data = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
    }
    console.log(data);
    
})