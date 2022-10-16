//---------Nav Mapping-----------//

const navLinks = [
    {
        name: 'Home',
        url: '/',
        style: 'collapse'
    },
    {
        name: 'Meet Tony',
        url: 'meet-tony.html',
        style: 'collapse'
    },
    {
        name: 'Philosophy', 
        url: 'philosophy.html',
        style: 'collapse'
    },
    {
        name: 'Services',
        url: 'services.html',
        style: 'collapse'    
    },
    {
        name: 'Pricing',
        url: 'pricing.html',
        style: 'collapse'   
    },  
    {
        name: 'Contact',
        url: 'contact.html',
        style: 'static'   
    }
]

const navUl = document.querySelector('#nav-links');

navLinks.map(link => {
    let newLi = document.createElement("li");
    let newAnc = document.createElement("a");
    newLi.setAttribute("class", `${link.style} links-li link-li-${link.style}`);
    newLi.setAttribute("id", `${link.style}`);
    newAnc.setAttribute("href", `${link.url}`);
    newAnc.setAttribute("class", `links-anc link-anc-${link.style}`);
    newAnc.innerText = `${link.name}`;
    navUl.append(newLi);
    newLi.append(newAnc);
})
