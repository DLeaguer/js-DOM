/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taylorName1 = document.getElementById('name1');
taylorName1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var khaledPos2 = document.getElementById('position2');
khaledPos2.innerHTML = 'Project Manager';

//better picture
var khaledImg = document.getElementsByTagName('img')[1];
khaledImg.src = 'https://usatcollege.files.wordpress.com/2015/12/gty_493520126.jpg?w=990';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var pikoAlias3 = document.getElementById('alias3');
pikoAlias3.innerHTML = 'Concatenation';

//better picture
var pikoImg = document.getElementsByTagName('img')[2];
pikoImg.src = '../piko_crop.jpg';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var princeProfile = document.getElementsByClassName('profile')[0];
princeProfile.innerHTML = '"Oh No, Let\'s Go!"';

//better picture
var princeImg = document.getElementsByTagName('img')[3];
princeImg.src = 'https://www.bellanaija.com/wp-content/uploads/2016/04/prince-07.jpg';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var bruceProfile = document.getElementsByClassName('profile')[1];
bruceProfile.innerHTML = '"Don\'t pray for an easy live, pray for the strength to endure a difficult one."';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var samAlias = document.getElementsByClassName('alias')[2];
samAlias.innerHTML = 'Mace Windu';


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var peterName = document.getElementById('nameParent');
var peterNameDiv = document.createElement('div');
peterNameDiv.id = 'name7';
peterNameDiv.innerHTML = 'Peter Griffin';
peterName.appendChild(peterNameDiv);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var timAlias = document.getElementById('aliasParent');
var timAliasDiv = document.createElement('div');
timAliasDiv.id = 'alias8';
timAliasDiv.innerHTML = 'Old man Riverwalk';
aliasParent.appendChild(timAliasDiv);


//Final Boss
/*9. Create your own profile.*/
var myRow = document.getElementsByClassName('row')[2];
var myImg = document.getElementsByTagName('img')[8];
myImg.src = '../tyson_crop.jpg';
var myName = document.createElement('div');
myName.id = 'name9';
myName.innerHTML = 'Michael Gerard Tyson';
myRow.appendChild(myName);
var myPosition = document.createElement('div');
myPosition.id = 'position9';
myPosition.innerHTML = 'Mike Tyson Mysteries Leader';
myRow.appendChild(myPosition);
var myAlias = document.createElement('div');
myAlias.id = 'alias9';
myAlias.innerHTML = 'Kid Dynamite, Malik Abdul Aziz';
myRow.appendChild(myAlias);
var myBio = document.createElement('div');
myBio.id = 'bio9';
myBio.innerHTML = '"Mystery Solver"';
myRow.appendChild(myBio);


//change the title
var title1 = document.getElementsByTagName('h1')[0];
title1.innerHTML = '2018 DevLeague Init <br> (Pre-Immersive)';