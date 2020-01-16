const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navBar = Array.from(document.getElementsByTagName("a"));
console.log(navBar);

navBar.forEach(tag => {
 let num = navBar.indexOf(tag);
 tag.textContent = siteContent.nav[`nav-item-${num+1}`];
 tag.style.color = "green";
})

let newNav = document.createElement('a');
newNav.setAttribute("href","timer.html")
newNav.textContent = "Timer";
newNav.style.color = "green";
let parent = document.getElementsByTagName('nav')[0];
parent.prepend(newNav);

let header = document.getElementsByClassName("cta")[0].childNodes;
let headerLeft = header[1].childNodes;

headerLeft[1].textContent= siteContent.cta["h1"];

headerLeft[3].textContent = siteContent.cta["button"];

header[3].setAttribute('src',siteContent.cta["img-src"]);

let rickRollButton = document.createElement("a");
rickRollButton.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ");
rickRollButton.textContent = "a button"
let buttonParent = document.getElementsByClassName("cta-text")[0];
let tempNode = document.createElement("button");
tempNode.appendChild(rickRollButton);
console.log(buttonParent);
buttonParent.append(tempNode);


let bodyContent = Array.from(document.getElementsByClassName("text-content"));

bodyContent[0].childNodes[1].textContent = siteContent["main-content"]["features-h4"];
bodyContent[0].childNodes[3].textContent = siteContent["main-content"]["features-content"];

bodyContent[1].childNodes[1].textContent = siteContent["main-content"]["about-h4"];
bodyContent[1].childNodes[3].textContent = siteContent["main-content"]["about-content"];

bodyContent[2].childNodes[1].textContent = siteContent["main-content"]["services-h4"];
bodyContent[2].childNodes[3].textContent = siteContent["main-content"]["services-content"];

bodyContent[3].childNodes[1].textContent = siteContent["main-content"]["product-h4"];
bodyContent[3].childNodes[3].textContent = siteContent["main-content"]["product-content"];

bodyContent[4].childNodes[1].textContent = siteContent["main-content"]["vision-h4"];
bodyContent[4].childNodes[3].textContent = siteContent["main-content"]["vision-content"];



let bodyimg = Array.from(document.getElementsByClassName("middle-img"));

bodyimg[0].setAttribute('src',siteContent["main-content"]["middle-img-src"]);

console.log(bodyContent)


let contact = Array.from(document.getElementsByClassName("contact")[0].childNodes);

contact[1].textContent= siteContent.contact["contact-h4"];

contact[3].textContent= siteContent.contact["address"];

contact[5].textContent= siteContent.contact["phone"];

contact[7].textContent= siteContent.contact["email"];
console.log(contact);


let footer = Array.from(document.getElementsByTagName("footer")[0].childNodes);
footer[1].textContent = siteContent.footer["copyright"];





