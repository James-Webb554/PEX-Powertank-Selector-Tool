jQuery(document).ready(function () {
    $('#PTFormSubmit').on('click', function () {
        var PTIncomingFlowRate = $("#PTIncomingFlowRate").val();
        var PTTotalPropertyFloors = $("#PTTotalPropertyFloors").val();
        // var PTSeparateBaths = $("#PTSeparateBaths").val();
        var PTStandardShowers = $("#PTStandardShowers").val();
        var PTRainFallShowers = $("#PTRainFallShowers").val();
        var PTDrenchHeadShowers = $("#PTDrenchHeadShowers").val();


        var StandardBath = 12;
        var StandardShower = 10;
        var RainfallShower = 15;
        var DrenchShower = 20;
        var MaxFloors = 3;

        var MinRequiredTankSize;

        var MinRequiredTankSize = (((PTStandardShowers * StandardShower) + (PTRainFallShowers * RainfallShower) + (PTDrenchHeadShowers * DrenchShower)) - PTIncomingFlowRate) * 10;

        var MaxRequiredFlowRate = ((PTStandardShowers * StandardShower) + (PTRainFallShowers * RainfallShower) + (PTDrenchHeadShowers * DrenchShower));

        console.log("PTIncomingFlowRate " + PTIncomingFlowRate);
        console.log("PTTotalPropertyFloors " + PTTotalPropertyFloors);
        // console.log("PTSeparateBaths " + PTSeparateBaths);
        console.log("PTStandardShowers " + PTStandardShowers);
        console.log("PTRainFallShowers " + PTRainFallShowers);
        console.log("PTDrenchHeadShowers " + PTDrenchHeadShowers);

        filterData(MinRequiredTankSize, MaxRequiredFlowRate, PTTotalPropertyFloors);
    });
});

async function fetchJsonData() {
    try {
        const response = await fetch("https://pumpexpress.co.uk/ptst/js/productData.json");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json(); // Parse the response as JSON
        return data; // Return the data as a JSON object
    } catch (error) {
        console.error("Error fetching the JSON file:");
        return []; // Return an empty array in case of error
    }
}


async function filterData(MinRequiredTankSize, MaxRequiredFlowRate, PTTotalPropertyFloors) {
    console.log(MaxRequiredFlowRate);

    $("#result-card-wrapper").empty();

    let filteredData = [];
    let data = await fetchJsonData();

    data.forEach(function (item) {

        // Lowest Value Catch All - Show something at minimal values 
        if (MinRequiredTankSize <= 100) {
            if (item.Minimal <= 10) {
                filteredData.push(item);
            }
        }

        // Should cover 2-3 Outlets 
        if (MaxRequiredFlowRate >= 0 && MaxRequiredFlowRate <= 39) {
            var MaxRequiredTankSize = (1.3 * MinRequiredTankSize);

            console.log("Min Required Tank Size = " + MinRequiredTankSize);
            console.log("Max Required Tank Size = " + MaxRequiredTankSize);

            if (item.TankSize >= MinRequiredTankSize && item.TankSize <= MaxRequiredTankSize) {

                if (item.FlowRate >= 0 && item.FlowRate <= 80) {
                    filteredData.push(item);
                }
            }
        }

        // Should cover 4-5-6-7 Outlets 
        if (MaxRequiredFlowRate >= 40 && MaxRequiredFlowRate <= 80) {
            var MaxRequiredTankSize = (1.3 * MinRequiredTankSize);

            console.log("Min Required Tank Size = " + MinRequiredTankSize);
            console.log("Max Required Tank Size = " + MaxRequiredTankSize);

            if (item.TankSize >= MinRequiredTankSize && item.TankSize <= MaxRequiredTankSize) {

                if (item.FlowRate >= 41 && item.FlowRate <= 80) {
                    filteredData.push(item);
                }
            }
        }

        // Should cover 8+ Outlets 
        if (MaxRequiredFlowRate >= 80 && MaxRequiredFlowRate <= 160) {
            var MaxRequiredTankSize = (1.3 * MinRequiredTankSize);

            console.log("Min Required Tank Size = " + MinRequiredTankSize);
            console.log("Max Required Tank Size = " + MaxRequiredTankSize);

            if (item.TankSize >= MinRequiredTankSize && item.TankSize <= MaxRequiredTankSize) {

                if (item.FlowRate >= 81 && item.FlowRate <= 160) {
                    filteredData.push(item);
                }
            }
        }
    });

    // Check if there is any filtered data
    if (filteredData.length > 0) {

        // Loop through filteredData and display each item
        filteredData.forEach(function (item) {
            var div = '<div class="col-xl-6"><div class="card shadow-sm p-3 mb-4 rounded"><div class="row g-0 mt-4"><div class="col-md-4 align-content-center"><img src="' + item.PrimaryImage + '"class="img-fluid rounded-start ms-2 me-2" alt="' + item.Title + '"></div><div class="col-md-8 align-content-center"><div class="card-body"><div class="position-absolute top-0 end-0 me-3 mt-3 badge text-bg-secondary">' + item.Price + '</div><h5 id="card-title" class="card-title mt-2 ms-3">' + item.Title + '</h5><div class="card-text mt-2 mb-2 "><ul class="list-group list-group-flush"><li class="list-group-item">' + item.KeyPoints[0] + '</li><li class="list-group-item">' + item.KeyPoints[1] + '</li><li class="list-group-item">' + item.KeyPoints[2] + '</li><li class="list-group-item">' + item.KeyPoints[3] + '</li></ul></div><div class="ms-3 mt-3"><a href="' + item.URL + '" target="_blank"><button type="button" class="me-2 btn btn-secondary ">View Product</button></a></div></div></div></div></div></div>';

            // Show title + text
            $('#here-are-results-title').css('display', 'flex');
            $('#here-are-results-para').css('display', 'flex');

            //  Show the text + results
            $('#result-card-wrapper').css('display', 'flex');
            $('#Section-3-Body').css('display', 'flex');

            //  Show results
            $("#result-card-wrapper").append(div);
        });

    } else {
        // Hide title + text
        $('#here-are-results-title').css('display', 'none');
        $('#here-are-results-para').css('display', 'none');

        // Hide the results if previously displayed
        $('#result-card-wrapper').css('display', 'none');

        // Show title + text
        $('#here-are-results-title-form').css('display', 'flex');
        $('#here-are-results-para-form').css('display', 'flex');

        //  Show the form
        $('#result-card-wrapper-form').css('display', 'flex');

    }
}
