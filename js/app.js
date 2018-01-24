/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var TaylorName = document.getElementById('name1');
TaylorName.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var KhaledPosition = document.getElementById('position2');
KhaledPosition.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var PikoAlias = document.getElementById('alias3');
PikoAlias.innerHTML =  'Concatenation';


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var PrinceProfile = document.getElementsByClassName('block1 col-sm-4')[1];
PrinceProfile.getElementsByClassName('profile')[0].innerHTML = '"The rain sounds so cool when it hits the barn roof And the horses wonder who U are. Thunder drowns out what the lightning sees, U feel like a movie star."';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var BruceProfile = document.getElementsByClassName('block2 col-sm-4')[1];
BruceProfile.getElementsByClassName('profile')[0].innerHTML = '"The rain sounds so cool when it hits the barn roof And the horses wonder who U are. Thunder drowns out what the lightning sees, U feel like a movie star."';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var SamuelAlias = document.getElementsByClassName('block3 col-sm-4')[1];
SamuelAlias.getElementsByClassName('alias')[0].innerHTML = 'Mace Windu';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var PeterName = document.getElementsByClassName('block1 col-sm-4')[2];
var PeterDiv = document.createElement('div');
PeterDiv.id = 'name7';
PeterDiv.innerHTML = 'Peter Griffin';
var PeterPosition = document.getElementById('position7');
PeterName.insertBefore(PeterDiv, PeterPosition);
// PeterName.appendChild(PeterDiv);
// var PeterDiv2 = document.getElementById('position7');
// PeterName.insertBefore(PeterDiv, PeterDiv2);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

// var TimAlias = document.getElementsByClassName('block2 col-sm-4');
var TimAliasParent = document.getElementById('aliasParent');
var TimAlias = document.createElement('div');
TimAlias.id = 'alias8';
TimAlias.innerHTML = 'Old Man Riverwalk';
TimAliasParent.appendChild(TimAlias);

//Final Boss
/*9. Create your own profile.*/

var RickParent = document.getElementsByClassName('block3 col-sm-4')[2];

var RickImg = RickParent.getElementsByTagName('img')[0];
RickImg.id = 'imgOfRick';
// RickImg.src = "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728";
RickImg.src = '../images/Rick_Sanchez.png';


var RickName = document.createElement('div');
RickName.id = 'name9';
RickName.innerHTML = 'Rick Sanchez';
RickParent.appendChild(RickName);

var RickPosition = document.createElement('div');
RickPosition.id = 'position9';
RickPosition.innerHTML = 'Scientist, Inventor';
RickParent.appendChild(RickPosition);

var RickAlias = document.createElement('div');
RickAlias.id = 'alias9';
RickAlias.innerHTML = 'Pickle Rick';
RickParent.appendChild(RickAlias);

var RickVerse = document.createElement('div');
RickVerse.id = 'bio9';
RickVerse.innerHTML = '"Wubba lubba dub dub"';
RickParent.appendChild(RickVerse);

