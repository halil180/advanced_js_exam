
let Sedan = (Pdata) => {
    let arabalar =Pdata.filter((x) => x.name === 'Sedan').map((car) => { 
        return `
         
        <div class="card " style="width: 18rem; ">
        ${car.cars.map((x) => {
          return `
             <img class="card-img-top" src="${x.image}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${car.name}</h5>
             <p class="card-title">${x.introductionDate}</p>
             <p class="card-title">${x.description}</p>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           </div>
            `
          }).join('')}
        `

    }).join('')
    return arabalar
}



let hatchback = () => {

    let arabalar =database.filter((x) => x.name === 'Hatchback').map((car) => { 
        return `
         
        <div class="card " style="width: 18rem; ">
        ${car.cars.map((x) => {
          return `
             <img class="card-img-top" src="${x.image}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${car.name}</h5>
             <p class="card-title">${x.introductionDate}</p>
             <p class="card-title">${x.description}</p>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           </div>
            `
          }).join('')}
        `

    }).join('')
    return arabalar
      
  }



  let wagon = (Pdata) => {

    let arabalar =Pdata.filter((x) => x.name === 'Station Wagon').map((car) => { 
          return `
           
          <div class="card " style="width: 18rem; ">
          ${car.cars.map((x) => {
            return `
               <img class="card-img-top" src="${x.image}" alt="Card image cap">
               <div class="card-body">
               <h5 class="card-title">${car.name}</h5>
               <p class="card-title">${x.introductionDate}</p>
               <p class="card-title">${x.description}</p>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             </div>
             </div>
              `
            }).join('')}
          `
  
      }).join('')
      return arabalar
  }
    
function activeBtn(params) {
    document.getElementById(params).classList.add("active");
}
function deactiveBtn(params) {
    document.getElementById(params).classList.remove("active");
}
function openSedan() {
    activeBtn('sedan')
    deactiveBtn('hatchback')
    deactiveBtn('wagon')
    document.querySelector("#items").innerHTML = Sedan(database)
}
function Openwagon() {
    deactiveBtn('sedan')
    deactiveBtn('hatchback')
    activeBtn('wagon')
    document.querySelector("#items").innerHTML = wagon(database)
}
function openHatchback() {
    deactiveBtn('wagon')
    activeBtn('hatchback')
    deactiveBtn('sedan')
    document.querySelector("#items").innerHTML = hatchback(database)
}

