let months=["Jan","Feb","Mar","Apr","May"];

let sales=[120,200,150,300,250];

let ctx=document.getElementById("myChart");

new Chart(ctx,{

  type:"bar",data:{
            labels:months,datasets:[{
                          label:"Sales",data:sales}]
},
            options:{ responsive:true }  });
