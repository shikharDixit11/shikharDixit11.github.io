window.addEventListener("load", () => {

    setTimeout(() => { document.getElementById("head").innerHTML = "Please Enter your name"; }, 2000);

    document.getElementById("nameInput").addEventListener("keyup", (e) => {
        console.log(e.keyCode);
        if (e.keyCode == 13 && document.getElementById("nameInput").value != "")
            document.getElementById("head").innerHTML = "Hello " + document.getElementById("nameInput").value;
    });

    document.getElementById("getCovidDataButton").onclick = () => {
        fetch("https://api.covid19india.org/data.json").then(res => res.json()).then(res => {
            console.log(res);
            renderData(res);
        });
    }
});


function renderData(res){
    res.statewise.forEach(state => {
        var parent = document.createElement("div");
        parent.setAttribute("class", "stateEach");
        var name = document.createElement("div");
        name.setAttribute("class", "stateName");
        var active = document.createElement("div");
        active.setAttribute("class", "stateActive");
        var confirmed = document.createElement("div");
        confirmed.setAttribute("class", "stateConfirmed");
        var deaths = document.createElement("div");
        deaths.setAttribute("class", "stateDeaths");

        name.innerHTML = state.state;
        active.innerHTML = state.active;
        confirmed.innerHTML = state.confirmed;
        deaths.innerHTML = state.deaths;

        parent.appendChild(name);
        parent.appendChild(active);
        parent.appendChild(confirmed);
        parent.appendChild(deaths);

        document.body.append(parent);
    });
}