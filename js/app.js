app.innerHTML = `
<div class="container">
<div class="row mt-5">
  <!-- Add Person Start -->
  <div class="col-lg-4">
    <h2>Categories</h2>
    
    <hr />
    <div class="row">
      <div class="col-4 ">
        <div class="list-group" >
          <a id="hatchback" class="list-group-item list-group-item-action active"  onclick="hatchback(),openHatchback()">Hatchback</a>
          <a id="sedan"  class="list-group-item list-group-item-action" onclick="openSedan()">sedan</a>
          <a id="wagon" class="list-group-item list-group-item-action"  onclick ="Openwagon()">Station Wagon</a>
        </div>
      </div>
      <div class="col-8">
     
      </div>
    </div>
  </div>
  <!-- Add Person End -->

  <!-- Person List Start -->
  <div class="col-lg-8">
    <h2>cars</h2>
    <hr />
  
    <div id="items" class= "col-4 "> 
    ${hatchback(database)}
    </div>
  </div>
  <!-- Person List End -->
</div>
</div>
`
