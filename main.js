// OPEN MOBILE POPUP when mobile menu button is clicked
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const navBar = document.querySelector('.nav-bar');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); 

// add click event listener to mobileMenuBtn
mobileMenuBtn.addEventListener('click',async function() {
    // Add class to make mobile menu visible
    mobileMenuPopup.classList.add('show-mobile-menu');
    // Add class to animate nav bar
    navBar.classList.add('nav-bar-wide');


    // ANIMATE MOBILE NAV LINKS
    // Add a .05 second delay before starting the loop
    await new Promise(resolve => setTimeout(resolve, 50));

    // For each navlink...
    for (const navLink of mobileNavLinks) {
        // Add transition property and slide-left class to navLink to animate
        navLink.style.transition = 'transform 0.1s ease-in-out, filter 0.2s ease-in-out, opacity 0.2s ease-in-out, background-color .5s ease-out';
        navLink.classList.add('slide-left');
        // ...wait .02 seconds to add the class to animate the navLink for staggered animation effect
        await new Promise(resolve => setTimeout(resolve, 20));
    }
});

// CLOSE mobile menu popup when any mobile nav link is clicked
const closeNavBtns = document.querySelectorAll('.mobile-nav-link');

// For each mobile nav link/button...
closeNavBtns.forEach(mobileNavBtn => {
    // add a click event listener to...
    mobileNavBtn.addEventListener('click', function() {
        // remove classes to hide mobile menu popup 
        mobileMenuPopup.classList.remove('show-mobile-menu');
        navBar.classList.remove('nav-bar-wide');

        // remove slide-left class to retun mobile nav links to starting position of transition animation
        for (const navLink of mobileNavLinks) {
            navLink.classList.remove('slide-left');
        }
    });
})



// SHOW DARK & LIGHT MODE LABELS
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const modeAlert = document.querySelector('.mode-alert');

// fill mode alert with 'DARK!' & animate when hovering over dark mode button
darkModeBtn.addEventListener('mouseenter', function() {
    modeAlert.innerText = 'DARK!';
    modeAlert.classList.add('slide-up');
});

// clear mode alert when mouse leaves dark mode button
darkModeBtn.addEventListener('mouseleave', function() {
    modeAlert.innerText = '';
    modeAlert.classList.remove('slide-up')
});

// fill mode alert with 'LIGHT!' & animate when hovering over light mode button
lightModeBtn.addEventListener('mouseenter', function() {
    modeAlert.innerText = 'LIGHT!';
    modeAlert.classList.add('slide-up');
});

// clear mode alert when mouse leaves light mode button
lightModeBtn.addEventListener('mouseleave', function() {
    modeAlert.innerText = '';
    modeAlert.classList.remove('slide-up')
});



// TURN ON DARK/LIGHT MODE
// function to turn on dark mode
function setTheme(isDark) {

    // if dark theme is true...
    if (isDark) {
        // activate dark mode by add dark-mode class to html body
        document.body.classList.add('dark-mode');
    } else {
        // turn off dark mode by removing class
        document.body.classList.remove('dark-mode');
    }

    // store preference for dark mode in local storage
    localStorage.setItem('isDarkTheme', isDark);
}

// turn off dark mode when light mode button is clicked by executing else block fron setTheme
lightModeBtn.addEventListener('click', () => setTheme(false));

// turn on dark mode when dark mode button is clicked
darkModeBtn.addEventListener('click', () => setTheme(true));

// check for saved theme preference or default to light
const savedTheme = localStorage.getItem('isDarkTheme') === 'true';
setTheme(savedTheme);



// PROJECT DATA
// Object containing each project and it's information
const projectInfo = {

    palmBoardshortProject: {
        projectName: 'palmBoardshortProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'TEEN', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        images: ['palmB1.jpg', 'palmB2.jpg', 'palmB3.jpg']
    },

    scarfPrintProject: {
        projectName: 'scarfPrintProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        images: ['Scarf1.png', 'Scarf2.png', 'Scarf3.png', 'Scarf4.png', 'Scarf5.png', 'Scarf6.png', 'Scarf7.png', 'Scarf8.png'],
    },

    postcardProject: {
        projectName: 'postcardProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Range of repeat print and engineered placement graphics inspired by postcards of Australian locations, flora and fauna.',
        images: ['postcardProject1.png', 'postcardProject2.png', 'postcardProject3.png', 'postcardProject4.png', 'postcardProject5.png', 'postcardProject6.png', 'postcardProject7.png', 'postcardProject8.png', 'postcardProject9.png', 'postcardProject10.png', 'postcardProject11.png']
    },

    rhinoProject: {
        projectName: 'rhinoProject',
        tags: ['ILLUSTRATION', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR', 'APPAREL'],
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: ['rhino1.jpg', 'rhino2.jpg', 'rhino3.jpg']
    },

    rivieraProject: {
        projectName: 'rivieraProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        images: ['riviera1.jpg', 'riviera2.jpg', 'riviera3.jpg', 'riviera4.png'],
        video: '/td-portfolio/img/work/rivieraProject/rivieraProject.mp4'
    },

    checkLeopardProject: {
        projectName: 'checkLeopardProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: ['checkLeopard1.png', 'checkLeopard2.png', 'checkLeopard3.png', 'checkLeopard4.png', 'checkLeopard5.png', 'checkLeopard6.png', 'checkLeopard7.png', 'checkLeopard8.png', 'checkLeopard9.png', 'checkLeopard10.png', 'checkLeopard11.png'],
    },

    seahorsePrintProject: {
        projectName: 'seahorsePrintProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        images: ['seahorse1.png', 'seahorse2.png', 'seahorse3.png', 'seahorse4.png', 'seahorse5.png'],
    },

    zodiacProject: {
        projectName: 'zodiacProject',
        tags: ['ILLUSTRATION', 'JEWELLRY DESIGN'],
        description: 'Pendant designs for each sign of the zodiac',
        images: ['zodiac1.png', 'zodiac2.png', 'zodiac3.png', 'zodiac4.png', 'zodiac5.png', 'zodiac6.png', 'zodiac7.png', 'zodiac8.png', 'zodiac9.png', 'zodiac10.png', 'zodiac11.png', 'zodiac12.png', 'zodiac13.png'],
    },

    zebraDressProject: {
        projectName: 'zebraDressProject',
        tags: ['REPEAT DESIGN', 'WOMENSWEAR', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        images: ['zebraDress1.png', 'zebraDress2.png'],
    },

    tropicanaProject: {
        projectName: 'tropicanaProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'CHILDRENSWEAR', 'APPAREL'],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: ['tropicana1.png', 'tropicana2.png', 'tropicana3.png', 'tropicana4.png', 'tropicana5.png', 'tropicana6.png', 'tropicana7.png'],
    },

    bbAppliqueProject: {
        projectName: 'bbAppliqueProject',
        tags: ['ILLUSTRATION', 'ENGINEERED PLACEMENT', 'BABY', 'APPAREL'],
        description: 'Engineered applique placements for Country Road baby boy.',
        images: ['bbApplique1.jpg', 'bbApplique2.jpg', 'bbApplique3.jpg', 'bbApplique4.jpg', 'bbApplique5.jpg', 'bbApplique6.jpg', 'bbApplique7.jpg'],
    },

    blueTigerProject: {
        projectName: 'blueTigerProject',
        tags: ['REPEAT DESIGN', 'WOMENSWEAR', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        images: ['blueTiger1.png', 'blueTiger2.png', 'blueTiger3.png'],
    },

    accProject: {
        projectName: 'accProject',
        tags: ['ILLUSTRATION', 'BAG DESIGN', 'REPEAT DESIGN', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR','ACCESSORIES'],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: ['acc1.png', 'acc2.png', 'acc3.png', 'acc4.png', 'acc5.png', 'acc6.png' ],
    },

    camoProject: {
        projectName: 'camoProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'TEEN', 'APPAREL'],
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
        images: ['camo1.png', 'camo2.png', 'camo3.png'],
    },


    leopardKnitProject: {
        projectName: 'leopardKnitProject',
        tags: ['ILLUSTRATION', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR', 'KNIT', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        images: ['leopardKnit1.jpg', 'leopardKnit2.jpg', 'leopardKnit3.jpg', 'leopardKnit4.jpg'],
    },

    carTeeProject: {
        projectName: 'carTeeProject',
        tags: ['ILLUSTRATION', 'ENGINEERED PLACEMENT', 'CHILDRENSWEAR', 'APPAREL'],
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: ['carTee1.jpg'],
    },

    jungleExplorerProject: {
        projectName: 'jungleExplorerProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'CHILDRENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: '',
        images: ['jungleExplorer1.png', 'jungleExplorer2.png', 'jungleExplorer3.png', 'jungleExplorer4.png', 'jungleExplorer5.png', 'jungleExplorer6.png'],
    },

    lionAppliqueProject: {
        projectName: 'lionAppliqueProject',
        tags: ['ILLUSTRATION', 'ENGINEERED PLACEMENT', 'BABY', 'KNIT', 'APPAREL'],
        description: 'Embroidered knit applique sweater.',
        images: ['lionApplique1.jpg', 'lionApplique2.jpg', 'lionApplique3.jpg', 'lionApplique4.jpg'],
    },

    tigerKnitProject: {
        projectName: 'tigerKnitProject',
        tags: ['ILLUSTRATION', 'REPEAT DESIGN', 'BABY', 'KNIT', 'ACCESSORIES', 'APPAREL'],
        description: 'Jaquard knit repeat design for baby apparel and accessories.',
        images: ['tigerKnit1.png', 'tigerKnit2.png', 'tigerKnit3.png', 'tigerKnit4.png', 'tigerKnit5.png'],
    },

    ydCheckProject: {
        projectName: 'ydCheckProject',
        tags: ['REPEAT DESIGN', 'YARN DYED WOVEN CHECK', 'CHILDRENSWEAR', 'WOMENSWEAR', 'ACCESSORIES', 'APPAREL'],
        description: 'Description of project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
        images: ['ydCheck1.jpg', 'ydCheck2.jpg', 'ydCheck3.jpg', 'ydCheck4.jpg', 'ydCheck5.jpg', 'ydCheck6.jpg', 'ydCheck7.jpg', 'ydCheck8.jpg', 'ydCheck9.jpg', 'ydCheck10.jpg', 'ydCheck11.png'],
    },

    homepageProject: {
        projectName: 'homepageProject',
        tags: ['PHOTOGRAPHY', 'ART DIRECTION', 'STYLING', 'GRAPHIC DESIGN', 'BRANDING'],
        description: 'Personal project styling, shooting and selling second hand homewares.',
        images: ['homepage1.png', 'homepage2.png', 'homepage3.png', 'homepage4.png', 'homepage5.png'],
    },
    
}



// GET PROJECT NAME
// function to retrieve a project from projectInfo by its name, for putting into HTML later
function getProject(projectName) {
    // gets current project name from projectInfo object and stores it in a const named 'project'
    const project = projectInfo[projectName];
    // if project name doesn't exist, logs a message and returns null
    if (!project) {
        console.log(`Project "${projectName}" does not exist.`);
        return null;
    }
    return project;
}




// GET NEXT PROJECT
// function to get the next project in projectInfo with the current project name as an argument
function getNextProject(currentProjectName) {

    // get all project names
    const projectNames = Object.keys(projectInfo);
    // find index of current project
    let currentIndex = projectNames.indexOf(currentProjectName);

    // loop through projects, wrapping around to the start if needed
    do { currentIndex = (currentIndex +1) % projectNames.length;
        //  store the current index in nextProject
        const nextProject = projectInfo[projectNames[currentIndex]];
        // if the nextProject only has 1 image...
        if (nextProject.images.length > 1) {
            // skip that project and return the name of the following project
            return projectNames[currentIndex];
        }
    // do the above while the new current index is not equal to index of the original argument currentProjectName 
    } while (currentIndex !== projectNames.indexOf(currentProjectName));

    // if no suitable project is found return the original project name
    return currentProjectName;
}



// POPULATE WORK GRID
const workGrid = document.querySelector('.work-grid');

// For each project in the projectInfo object...
Object.keys(projectInfo).forEach(projectName => {

    // Create project-box section
    const projectBox = document.createElement('section');

    // add 'project-box' tag to new section element
    projectBox.classList.add('project-box');

    // create a <div> to store project text
    const projectText = document.createElement('div');

    // add 'project-text' tag to new <div> element
    projectText.classList.add('project-text');;

    // create a <ul> element to insert tags into
    const tagContainer = document.createElement('ul');

    // add 'no-bullets' tag to <ul> element
    tagContainer.classList.add('no-bullets')

    // add 'tag-container' tag to <ul> element
    tagContainer.classList.add('tag-container');

    const project = getProject(projectName);


    // UPDATE IMAGES
    // if project has any images...
    if (project.images.length > 0) {

        // get first image
        const mainImage = project.images[0];

        // create a <div> element
        const div = document.createElement('div');

        // add the project-detail-gallery class into the <div>
        div.classList.add('project-img-container');

        // create an <img> element
        const img = document.createElement('img');

        // add the 'gallery-img' class to the <img> element
        img.classList.add('img-main');

        // if project has multiple images...
        if (project.images.length >= 2) {
            // add classes to make img clickable to open project detail popup
            img.classList.add('img-main-clickable');
            // add data attribute to attach name of project to img element
            img.dataset.projectName = projectName;
        };

        // add the image source to the <img> element
        img.src = `img/work/${projectName}/${mainImage}`;

        // add <img> element to new <div> element
        div.appendChild(img);

        // add <div> element to project-gallery
        projectBox.appendChild(div);
    }

    // UPDATE TAGS
    // iterate through each tag 
    project.tags.forEach(tag => {
        // create an <li> element
        const li = document.createElement('li');
        // put the tag into the <li> element
        li.textContent = tag;
        // add 'tag' class
        li.classList.add('tag');
        // add <li> element to tagContainer <ul>
        tagContainer.appendChild(li);
    });

    // add tagContainer to projectText
    projectText.appendChild(tagContainer);


    // ADD MORE DETAIL BUTTON
    // if project has more than one image create a view more detail button
    if (project.images.length >= 2) {
        // create view more detail button
        const viewMoreBtn = document.createElement('button');
        // add class
        viewMoreBtn.classList.add('view-more-btn');
        viewMoreBtn.classList.add('pointer-cursor');
        // add class to identify project
        viewMoreBtn.id = `${projectName}`;
        // add button text
        viewMoreBtn.textContent = '++';
        // put button into projectText
        projectText.appendChild(viewMoreBtn);
    } 
    
    // add projectText to projectBox
    projectBox.appendChild(projectText);

    // add projectBox to workGrid
    workGrid.appendChild(projectBox);
});


// POPULATE PROJECT DETAIL POPUP
function showProjectDetail(projectName) {
    const tagContainer = document.getElementById('galleryTagContainer');
    const project = getProject(projectName);

    // if project is true...
    if (project) {
        
        // add 'data-current-project' attribute to projectDetailPopup with the name 
        // of the current project as the value 
        projectDetailPopup.dataset.currentProject = projectName;


        // UPDATE TAGS
        //clear tag container
        tagContainer.innerHTML = '';
        
        // iterate through each tag 
        project.tags.forEach(tag => {

            // create an <li> element
            const li = document.createElement('li');

            // put the tag into the <li> element
            li.textContent = tag;

            // add 'tag' class
            li.classList.add('tag');

            // add <li> element to tagContainer <ul>
            tagContainer.appendChild(li);
        });


        // UPDATE DESCRIPTION
        const projectDescription = document.getElementById('project-description-container');

        // fetch description from projectInfo and put it into project-description-container
        projectDescription.innerHTML = project.description;


        // UPDATE IMAGES
        const projectGallery = document.getElementById('project-gallery');

        // clear images
        projectGallery.innerHTML = '';
                
        // iterate through each image
        project.images.forEach(image => {

            // create a <div> element
            const div = document.createElement('div');

            // add the project-detail-gallery class into the <div>
            div.classList.add('gallery-img-container');

            // create an <img> element
            const img = document.createElement('img');

            // add the 'gallery-img' class to the <img> element
            img.classList.add('gallery-img');

            // add the image source to the <img> element
            img.src = `img/work/${projectName}/${image}`;

            // add <img> element to new <div> element
            div.appendChild(img);

            // add <div> element to project-gallery
            projectGallery.appendChild(div);
        });


        // UPDATE VIDEO
        // if project has a video...
        if (project.video) {

            // create a <div> element
            const div = document.createElement('div');

            // add class for visual format
            div.classList.add('gallery-video');

            // create a <video> element
            const video = document.createElement('video');

            // set video source & playback settings
            video.setAttribute('src', `/img/work/${projectName}/${projectName}.mp4`);
            video.setAttribute('loop', '');
            video.setAttribute('muted', '');
            video.setAttribute('autoplay', '');
            video.setAttribute('preloaded', '');

            // add <video> element to <div>
            div.appendChild(video);

            // add <div> element to top of project-gallery
            projectGallery.prepend(div);
        };
    };
};



// POPUPLATE PROJECT DETAIL POPUP
const projectDetailPopup = document.querySelector('.project-detail-popup');
const mask = document.querySelector('.mask');

// Function that Loads relevant project data into popup
function addPopupTrigger(triggers) {

    // iterate through each trigger element (main image or view more button)
    triggers.forEach(trigger => {

        // add event listener to trigger
        trigger.addEventListener('click', function() {

            // take id of view more button trigger and remove 'Btn', leaving only project name OR...
            const projectName = this.id.replace('Btn', '') ||

            // retrieve project name from dataset
                this.dataset.projectName;

            // call showProjectDetail function with project name as the argument
            showProjectDetail(projectName);

            // open project detail popup
            projectDetailPopup.classList.add('show');

            // add show classlist to mask to make it visible after .01s delay
            setTimeout(function() {
                mask.classList.add('show');
            }, 100);
        });
    });
}

// add addPopupTrigger function to view more buttons and clickable main images
addPopupTrigger(document.querySelectorAll('.view-more-btn'));
addPopupTrigger(document.querySelectorAll('.img-main-clickable'));



// NEXT PROJECT BUTTON
const nextProjectBtn = document.querySelector('.next-project-btn');

if (nextProjectBtn) {
    // add click event listener to next project button
    nextProjectBtn.addEventListener('click', function () {

        const currentProjectName = projectDetailPopup.dataset.currentProject;
        const nextProjectName = getNextProject(currentProjectName);

        // if name of the next project doesnt equal name of current project...
        if (nextProjectName !== currentProjectName) {

            // populate the project detail popup with the next project
            showProjectDetail(nextProjectName);
        }
    });
}



// CLOSE PROJECT DETAIL POPUP
const closeBtn = document.querySelector('.close-btn');
const popupMask = document.querySelector('.mask');

// Function to close popup
function closeProjectDetail() {
    // remove show class from project detail popup to hide it
    projectDetailPopup.classList.remove('show');
    // do the same with pop up mask
    mask.classList.remove('show');
}

// Execute closeProjectDetail function when close button is clicked
closeBtn.addEventListener('click', closeProjectDetail);

// Execute closeProjectDetail function when pop up mask is clicked
popupMask.addEventListener('click', closeProjectDetail);



// COPY EMAIL ADRESS
document.getElementById('email-container').addEventListener('click', function() {
    const email = 'arielmazo@gmail.com';

    // copy email adress to clipboard
    navigator.clipboard.writeText(email).then(function() {
        const emailBtn = document.querySelector('.email-btn');

        // change emailBtn text to signal that email adress has been copied 
        emailBtn.innerText = 'EMAIL copied!';

        // reset emailBtn text after 4 seconds
        setTimeout(function() {
            emailBtn.innerText = 'EMAIL';
        }, 4000);
    });
})

// COPY PHONE NUMBER
document.getElementById('phone-container').addEventListener('click', function() {

    // phone number goes here
    const phoneNumber = '04XX-XXX-XXX';

    // copy phone number to clipboard
    navigator.clipboard.writeText(phoneNumber).then(function() {
        const phoneBtn = document.querySelector('.phone-btn');

        // change phoneBtn text to signal that phone number has been copied 
        phoneBtn.innerText = 'PHONE NUMBER copied!';

        // reset phoneBtn text after 4 seconds
        setTimeout(function() {
            phoneBtn.innerText = 'PHONE';
        }, 4000);
    });
});

// OPEN LINKEDIN LINK IN NEW TAB/WINDOW
document.querySelector('.linkedin-btn').addEventListener('click', function() {

    // Linkedin web adress goes here
    window.open('linkedin web adress');
});