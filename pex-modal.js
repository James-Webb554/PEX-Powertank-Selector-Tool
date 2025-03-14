jQuery(document).ready(function ($) {
    $('.open-modal').on('click', function () {
        $("#modal-body-c1, #modal-body-c2").empty();
        var name = $(this).data("name");
        switch (name) {
            case 'CombinationBoilerHelp':
                var modalBodyc1 = "<h4>What is a combination boiler?</h4><br><p>A combi boiler, also known as a combination boiler, is the most popular kind of boiler and one that's found in most homes. As the name suggests, this boiler does a 'combination' of heating. It heats both your hot water and your central heating all from the same unit.</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:70%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-CombinationBoiler.svg'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'UnventedCylinderHelp':
                var modalBodyc1 = "<h4>What is a unvented system?</h4><br><p>Unvented cylinders, also known as pressurised cylinders they are water storage systems that provide high-pressure, hot water all throughout your home. They can be anywhere in the home (but are most likely in an airing cupboard).</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:70%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-UnventedSystem.svg'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'HeatPumpHelp':
                var modalBodyc1 = "<h4>What is a heat pump?</h4><br><p>A heat pump is a device that moves heat from one place to another. In the UK, it's commonly used to heat homes by pulling heat from the outside air (even in cold weather) and transferring it inside. It can also work in reverse to cool a space in the summer. Heat pumps are energy-efficient because they use electricity to move heat, not to generate it.</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:100%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-HeatPumps.svg'/><br>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'IncomingFlowRateHelp':
                var modalBodyc1 = "<h4>What's your Incoming Flow Rate?</h4><br><p>Take a 1 litre water jug, a stopwatch and calculator. Measure the flow rate at a tap closest to the incoming main cold feed as possible, this would usually be a kitchen tap. Fill the jug for 6 seconds Take the amount of water in the jug in litres (e.g. 0.7 litres) and multiply this by 10 to get your flow rate.</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-Flow-Rate.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'PropertyFloorsHelp':
                var modalBodyc1 = "<h4>How many total floors are in the property?</h4><br><p>Count the total amount of floors that are in the property, make sure that you count basement and attics/loft conversions if they have toilets, sinks, showers or any water outlets in them.</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-How-Many-Floors.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'SeparateBathsHelp':
                var modalBodyc1 = "<h4>How many completely separate standalone baths do you have?</h4><br><ol><li><b>Include Standalone Baths:</b> Standard bathtubs designed for soaking, without a showerhead or a mixing valve.</li><li><b>Include Shower & Bath Mixers:</b> These combine both a bath and shower, allowing you to switch between the two, usually with a faucet or diverter that directs water to either the bath or showerhead. </li></p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div></ol>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/How-Many-BSO-Does-The-Property-Have.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'StandardShowersHelp':
                var modalBodyc1 = "<h4>How many completely separate standalone showers or baths do you have?</h4><p><ol><li><b>Include Standalone Showers:</b> These are shower units designed specifically for showering, often with a showerhead mounted on a wall or ceiling.</li><li><b>Include Separate Baths:</b> Standard bathtubs designed for soaking, without a showerhead or a mixing valve.</li><li><b>Include Separate Shower & Bath Mixers:</b> A tub that lets you switch between a bath and a shower.</li><li><b>Don't Include Drench/Rainfall Showers</b></li></p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div></ol>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/How-Many-BSO-Does-The-Property-Have.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'RainFallShowersHelp':
                var modalBodyc1 = "<h4>How many rainfall showers do you have?</h4><br><p>A rainfall shower head is a type of showerhead designed to simulate the feeling of rain when you shower. Unlike traditional shower heads, which have a narrow, focused stream of water, rainfall shower heads typically have a wider, larger surface area that allows water to fall gently and evenly, creating a soft, rain-like experience. </p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-Rainfall-Shower-Head.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            case 'DrenchShowersHelp':
                var modalBodyc1 = "<h4>How many Drench Head Showers do you have?</h4><br><p>A drench head shower is a type of showerhead that provides a powerful, full-body water flow, designed to create an intense and immersive shower experience. The term 'drench' refers to the feeling of being completely drenched in water, similar to standing under a waterfall or being caught in a heavy downpour.</p><div class='mt-2'><button type='button' class='btn btn-primary' data-bs-target='#exampleModalToggle2' data-bs-toggle='modal'>Still not sure?</button></div>";
                $("#modal-body-c1").append(modalBodyc1);
                var modalBodyc2 = "<img style='width:85%;' src='https://cdn241.s3.eu-west-2.amazonaws.com/PumpExpress/tools/Powertank-Selector/help-assets/PTST-Drench-Shower-Head.webp'/>";
                $("#modal-body-c2").append(modalBodyc2);
                break;
            default:
                $('#modal-name').text('Error, please report this if found. Thank you');
                $('#modal-email').text('Error, please report this if found. Thank you');
                break;
        }

    });
});

