/* creating ul and li element and adding items to list element */


var nav = document.getElementById("navigation");
const ul = document.createElement("ul");
nav.appendChild(ul);
const array = () => {   
const section = document.querySelectorAll("section");
for (let i=0; i<section.length; i++){
const li = document.createElement("li");
const a = document.createElement("a",{"href": `#section${i + 1}`});
a.className = "link";
a.textContent = `section${i+1}`;
li.appendChild(a);
ul.appendChild(li);
}    
};


window.addEventListener("DOMContentLoaded",array);






/* creating section1 and adding heading and paragraph  */
var section0 = document.getElementById("box");


const sec = document.createElement("section");
sec.setAttribute("id", "section1");
sec.setAttribute("data-nav","section1");
sec.className = "active";
const heading = document.createElement("h2");
heading.textContent = "planet";
heading.style.textAlign = 'center';
sec.appendChild(heading);
section0.appendChild(sec);
var x = document.createElement('p');
x.innerHTML = "In contrast, seven out of eight planets in the <br>Solar System have near-circular orbits. <br>The exoplanets discovered show that the Solar System, with its unusually low eccentricity.";
const y = document.getElementById("section1");
y.appendChild(x);




/* creating section2  and adding flex container to paragraph*/
const sec1 = document.createElement("section");
sec1.setAttribute("id", "section2");
sec1.setAttribute("data-nav","section2");
sec1.innerHTML = " <p>Most of the universe is empty space, called a vacuum,<br> but it is an imperfect vacuum. <br>There are clouds of interstellar dust and <br>the tiny particles that make up the solar wind.</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. There are clouds of <br>interstellar dust and the tiny particles <br>that make up the solar wind.</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. <br>There are clouds of interstellar dust and the tiny particles <br>that make up the solar wind. ...</p> <p>Most of the universe is empty space, called a vacuum, <br>but it is an imperfect vacuum. There are clouds of <br>interstellar dust and the tiny particles <br>that make up the solar wind.</p>";
sec1.style.cssText = 'color: blue; background-color:white; display:flex; flex-direction:row; justify-content:space-between; font-size:20px';
section0.appendChild(sec1);

/* creating section3 */
const sec2 = document.createElement("section");
sec2.setAttribute("id", "section3");
sec2.setAttribute("data-nav","section3");
sec2.innerHTML = "<p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light,<br> and even time. Before the birth of the Universe, time, space and matter did not exist. ... <br>The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. <br>It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time,<br> space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p><p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light,<br> and even time. Before the birth of the Universe, time, space and matter did not exist. ... <br>The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. <br>It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time,<br> space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p>";
section0.appendChild(sec2);

/* creating section4 */

const sec3 = document.createElement("section");
sec3.setAttribute("id", "section4");
sec3.setAttribute("data-nav","section4");
sec3.innerHTML = "<p>The Universe is everything we can touch, feel, sense, measure or detect.The Universe is everything we can touch, feel, sense, measure or detect.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p><br><br><br><p>The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. ... The space between the stars and galaxies is largely empty.</p> ";
section0.appendChild(sec3);

/* adding text to footer element */
const foot = document.getElementById("footy");
foot.textContent = "@copyright at my website";
