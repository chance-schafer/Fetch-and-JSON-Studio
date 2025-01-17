// TODO: add code here
window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then((res) => {
        res.json().then( (json) => {
            json = json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace
            })
            console.log(json)
            const div = document.getElementById('container')
            div.innerHTML += `<h2>Total Astronauts: ${json.length}`
            for(let i = 0; i < json.length; i++) {
                let skills = json[i].skills
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li class="${json[i].active}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                `
            }
        })
    })
})