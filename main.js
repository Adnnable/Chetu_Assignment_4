let arraylocation = [{
    country: "India",
    states: [{
        UttarPradesh: [{
            City: ["Lucknow", "Saharanpur", "agra", "Meerut"]
        }]
    },
        {
            Maharashtra: [{
                City: ["Mumbai", "Pune", "Nashik", "Mahabaleshwar"]
            }]
        },
        {
            Rajasthan: [{
                City: ["Jaipur", "Udaipur", "Bikaner", "Jaisalmer"]
            }]
        },
       {
        Haryana: [{
            City: ["Sonipat", "Rohtak", "Gurugram", "Mewat"]
        }]
       }]
},

   {
    country: "USA",
    states: [

       {
        Texas: [{
            City: ["Austin", "Huston", "Dellas", "San antonio"]
        }]
       },
        {
            Georgia: [{
                "City": ["Atlanta", "Agasta", "Macon", "Dublin"]
            }]
        },
        {
            NorthDakota: [{
                City: ["Williston", "Minot", "Bismark"]
            }]
        },
        {
            Colorado: [{
                City: ["Fort Collins", "Trindad", "Pueblo", "Lamar"]
            }]
        }
    ]
   }
   ,
   {

    country: "New-Zealand",
    states: [{
            Auckland: [
                {
                City: ["Hamilton", "Waiku", "Thames", "Huntly"]
            }
        ]
         },
        {
            HawkesBay: [{
                City: ["Waiora", "Napier", "Taupo", "Murupara"]
            }]
        },
        {
            Nelson: [{
                City: ["Picton", "Richmond", "Motuoka", "Balenhiem"]
            }]
        },
        {
            Canterbury: [{
            City: ["Alaxendra", "Dunedin", "Gore", "Kingston"]
        }]
    }
]
}];

const arrayProps = function () {
    let placeContainer = `<ol>`;
    for (let val of arraylocation) {

        placeContainer += `<li>${val.country}</li>`;
    
        for (const val1 of val.states) {
            placeContainer += `<ol>`;
            for (const val2 in val1) {
                placeContainer += `<li>${val2}</li>`;

                for (const element of val1[val2]) {
                    placeContainer += `<ol>`;
                    for (const city of element.City) {
                        placeContainer += `<li>${city}</li>`;
                    }
                    placeContainer += `</ol>`;
                }   
            }
            placeContainer += `</ol>`;
        }
    }
    placeContainer += `</ol>`;
    document.querySelector('.container').innerHTML = placeContainer;
};

arrayProps();







// function A(){
//     let name = 'shs';
//     let meail = 'skljd';

//     let obj = {
//         name,
//         meail
//     }

//     validate(name);
// }

// function validate(){
//   if(name ){

//   }
// }