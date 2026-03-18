const url = "http://localhost:";

const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    
}