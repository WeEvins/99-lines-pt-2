document.addEventListener('DOMContentLoaded', function () {

    const friends = ['Marinette', 'Juleka', 'Rose', 'Chloe', 'Alya']
//okay, I've created the button here.
    let btnSing = document.createElement('button');
    btnSing.innerText = "Sing!";
    btnSing.className = "btnSing";
    document.body.appendChild(btnSing);
//and here i added the event listener, but its not quite right. 
    btnSing.addEventListener = ('click', function () {
        
        let songDiv = document.createElement('div');  // Here is the div the h3 and p go into
        body.document.appendChild(songDiv); // okay my div is appended here
        
        let songGirl = document.createElement('h3'); // this h3 should read the individual girls name
        songGirl.className = friends.f;  // I want each h3 created to have the girl's name as the class
        
        for (let f = 0; f < friends.length; f++) {
            songGirl.innerHTML = `${f}`; // here is where i'm trying to display the girl's name in text
            songDiv.appendChild(songGirl); // appending the h3 to the div
        }

        let lyrics = document.createElement('p'); // this creates the p that will display the lyrics

        for (let f = 0; f < friends.length; f++) { 
        
            for (let i = 99; i >= 1; i--) {

                //I feel like I need to use likes 12 - 20 as a do while right here as it iterates, but I'm
                //not sure how to do that.
                // I found this: 

                //for(var i=0; i < 11; i++){
                //    var newDiv = document.createElement('div');
                //    newDiv.id = 'r'+i;
                //    newDiv.className = 'ansbox';
                //    toAdd.appendChild(newDiv);
                // }
                 
                // document.appendChild(toAdd);
        
                let currentPlural = (i > 1) ? 'lines' : 'line'
        
                let nextPlural = (i === 2) ? 'line' : 'lines'
        
                lyrics.innerHTML = (`${i} ${currentPlural} of code in the file. ${i} lines of code. ${friends} strikes one out, clears it all out. 
                ${i - 1} ${nextPlural} lines of code on the wall.`);
                songGirl.appendChild(lyrics);
            }

        };
    });
});









