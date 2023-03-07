var ctx = document.getElementById("mychart").getContext("2d");

var mychart = new Chart(ctx,{
    type :"bar",
    // bar/pie/doughnut/radar/polarArea/line
    data :{
        labels : ["python","javascript","php","c#","c++","Angular"],
        datasets:[
        {
            data :[13,15,5,10,99,10],
            label : "Programing Language",
            backgroundColor:["red","blue","cyan","pink","green","grey"],
            borderColor : ["black","pink","teal","green","lime","blue"],
            borderWidth : 3,
        },
        
    ],
},
    options:{
        responsive :false,
        layout:{
            padding:{
                left:0,
                right:0,
                top:0,
                bottom:0,
            },
        },
        tooltips:{
            enabled: false,
            backgroundColor : "red",
            titleFontFamily:"Comic Sans MS",
            titleFontSize:30,
            titleFontStyle: "bold italic",
            titleFontColor:"yellow",
            titleAlign:"center",
            titleSpacing : 3,
            titleMarginBottom:50,
            bodyFontFamily:"Comic Sans Ms",
            bodyFontSize:20,
            bodyFontStyle:"italic",
            bodyFontColor:"black",
            bodyAlign:"center",
            bodySapcing:3,

        },
        title:{
            display:true,
            text:"Custom Chart Title",
            FontSize:25,
            position:"bottom",
            fontFamily:"Comic Sans Ms",
            fontColor:"red",
            fontstyle:"bold italic",
            padding:20,
            lineHeight:5,

        },
        legend:{
            display:true,
            position:"bottom",
            align:"end",
            labels:{
                fontSize:16,
                fontColor:"red",
                boxWidth:20,


            },
        },
        animation:{
            duration:5000,
            easing:"easeInOutBounce",
        },
        events:["click"],
        onclick:function(){
            console.log("on click");
        }
    },
})