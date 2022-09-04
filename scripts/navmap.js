//---------Nav Mapping-----------//

const navLinks = [
    {
        name: 'Home',
        url: '../pages/home.html',
        style: 'collapse'
    },
    {
        name: 'Meet Tony',
        url: '../pages/meet.html',
        style: 'collapse'
    },
    {
        name: 'Philosophy', 
        url: '../pages/philosophy',
        style: 'collapse'
    },
    {
        name: 'Services',
        url: '../pages/services',
        style: 'collapse'    
    },
    {
        name: 'Pricing',
        url: '../pages/pricing',
        style: 'collapse'   
    },  
    {
        name: 'Contact',
        url: '/contact',
        style: 'static'   
    }
]

const navUl = document.querySelector('#nav-links');

navLinks.map(link => {
    let newLi = document.createElement("li");
    let newAnc = document.createElement("a");
    newLi.setAttribute("class", `links-li link-li-${link.style}`);
    newAnc.setAttribute("href", `${link.url}`);
    newAnc.setAttribute("class", `links-anc link-anc-${link.style}`);
    newAnc.innerText = `${link.name}`;
    navUl.append(newLi);
    newLi.append(newAnc);
})

//-------Nav Button Functionality-------//

function flexChange(){
    console.log(menuBtn.ariaExpanded);
    if(menuBtn.ariaExpanded == true) {
        // navUl.setAttribute('style', 'flex-direction: row');
        console.log("true")
    } else {
        // navUl.setAttribute('style', 'flex-direction: column');
        console.log("false")
    }
};

const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', menuBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    
    // flexChange();
});

