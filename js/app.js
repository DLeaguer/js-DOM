/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
name1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
alias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var princeProfile = document.getElementsByClassName('profile')[0];
princeProfile.innerHTML = 
"You don't have to be beautiful, To turn me on, I just need your body baby, From dusk till dawn, You don't need experience, To turn me out, You just leave it all up to me, I'm gonna show you what it's all about.";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var burceProfile = document.getElementsByClassName('profile')[1];
burceProfile.innerHTML = "If you love life, don't waste time, for time is what life is made up of.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var samAlias = document.getElementsByClassName('alias')[2];
samAlias.innerHTML = 'Mace Windu';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var peterName = document.createElement('div');
peterName.id = 'name7';
peterName.innerHTML = 'Peter Griffin';
nameParent.appendChild(peterName);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var timAlias = document.createElement('div');
timAlias.id = 'alias8';
timAlias.innerHTML = 'Old Man Riverwalk';
aliasParent.appendChild(timAlias);

//Final Boss
/*9. Create your own profile.*/

var rickGet = document.getElementsByClassName('block3 col-sm-4')[2];
var rickImgGet = rickGet.getElementsByTagName('img')[0];
rickImgGet.src = '../images/rick.png';
// var rickImg = document.createElement('img');
// rickImg.id = 'rickImg';
// rickImg.src = '../images/rick.png';
// rickGet.appendChild(rickImg);

var rickName = document.createElement('div');
rickName.id = 'name9';
rickName.innerHTML = 'Rick Sanchez';
rickGet.appendChild(rickName);

var rickPosition = document.createElement('div');
rickPosition.id = 'position9';
rickPosition.innerHTML = 'Inventor, Scientist, Father, Grandfather';
rickGet.appendChild(rickPosition);

var rickAlias = document.createElement('div');
rickAlias.id = 'alias9';
rickAlias.innerHTML = 'Pickle Rick';
rickGet.appendChild(rickAlias);

var rickBio = document.createElement('div');
rickBio.id = 'bio9';
rickBio.innerHTML = '"Wubba Lubba Dub Dub"';
rickGet.appendChild(rickBio);
