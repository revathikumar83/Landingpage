/* creating ul and li element and adding items to list element */
var nav = document.getElementById("navigation");
const ul = document.createElement("ul");


function array() {
    const li = document.createElement("li");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    var a = document.createElement("a");
    a.innerHTML = "Home";
    var a1 = document.createElement("a");
    a1.innerHTML = "About";
    var a2 = document.createElement("a");
    a2.innerHTML = "Feature";
    var a3 = document.createElement("a");
    a3.innerHTML = "Article";

    a.setAttribute('href', "#imagesec");
    a1.setAttribute('href', "#imagesec1");
    a2.setAttribute('href', "#imagesec2");
    a3.setAttribute('href', "#imagesec3");

    li.appendChild(a);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

}
array();
nav.appendChild(ul);


/*list.forEach(function(item) {
    const li = document.createElement("li");
    var text = document.createTextNode(item);
    
    li.appendChild(text);
    
    ul.appendChild(li);
});*/



/* creating section1 and adding heading and paragraph  */
var section1 = document.getElementById("box");

const sec = document.createElement("section");
sec.setAttribute("id", "imagesec");
const heading = document.createElement("h2");
heading.textContent = "planet";
heading.style.textAlign = 'center';
sec.appendChild(heading);
section1.appendChild(sec);
var x = document.createElement('p');
x.innerHTML = "In contrast, seven out of eight planets in the <br>Solar System have near-circular orbits. <br>The exoplanets discovered show that the Solar System, with its unusually low eccentricity.";
const y = document.getElementById("imagesec");
y.appendChild(x);




/* creating section2  and adding flex container to paragraph*/
const sec1 = document.createElement("section");
sec1.setAttribute("id", "imagesec1");

sec1.innerHTML = " <p>Most of the universe is empty space, called a vacuum,<br> but it is an imperfect vacuum. <br>There are clouds of interstellar dust and <br>the tiny particles that make up the solar wind.</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. There are clouds of <br>interstellar dust and the tiny particles <br>that make up the solar wind.</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. <br>There are clouds of interstellar dust and the tiny particles <br>that make up the solar wind. ...</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. There are clouds of <br>interstellar dust and the tiny particles <br>that make up the solar wind.</p>";
sec1.style.cssText = 'color: blue; background-color:white; display:flex; flex-direction:row; justify-content:space-between; font-size:20px';

section1.appendChild(sec1);

/* creating section3 */
const sec2 = document.createElement("section");
sec2.setAttribute("id", "imagesec2");
sec2.innerHTML = "<p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light,<br> and even time. Before the birth of the Universe, time, space and matter did not exist. ... <br>The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. <br>It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time,<br> space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p><p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light,<br> and even time. Before the birth of the Universe, time, space and matter did not exist. ... <br>The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. <br>It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time,<br> space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p>";
section1.appendChild(sec2);

/* creating section4 */

const sec3 = document.createElement("section");
sec3.setAttribute("id", "imagesec3");
sec3.innerHTML = "<p>The Universe is everything we can touch, feel, sense, measure or detect.The Universe is everything we can touch, feel, sense, measure or detect.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p><br><br><br><p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p> ";
section1.appendChild(sec3);

/* adding text to footer element */
const foot = document.getElementById("footy");
foot.textContent = "@copywright at my website";




/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/