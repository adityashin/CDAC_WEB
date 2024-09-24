const colorNames = [
    "Red",
    "Crimson",
    "Firebrick",
    "DarkRed",
    "Blue",
    "Navy",
    "RoyalBlue",
    "SteelBlue",
    "Green",
    "Lime",
    "DarkGreen",
    "Olive",
    "Yellow",
    "Gold",
    "Khaki",
    "Orange",
    "DarkOrange",
    "Purple",
    "Indigo",
    "DarkSlateBlue",
    "Pink",
    "HotPink",
    "LightPink",
    "Gray",
    "DimGray",
    "LightGray",
    "SlateGray",
    "Brown",
    "SaddleBrown",
    "Sienna",
    "White",
    "Black",
    "Cyan",
    "Aqua",
    "Teal",
    "Fuchsia",
    "Magenta",
    "Maroon",
    "Olive",
    "CornFlowerBlue"
  ];
  
    function button(){
        let idname = document.getElementById('colorname');
        let Randomnumber = Math.floor(Math.random()*colorNames.length)

            idname.innerHTML = colorNames[Randomnumber];
            document.body.style.backgroundColor = colorNames[Randomnumber]
            document.getElementById('button').backgroundColor = colorNames[Randomnumber]
    }