const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("navList");
document.querySelectorAll('.project-container video').forEach(vid =>{
    vid.onclick = () =>{
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});
document.querySelectorAll('.proj-text-noVid img').forEach(vid =>{
    vid.onclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = vid.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
    document.querySelector('.popup-video video').pause();
    
};
document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
    document.querySelector('.popup-img img').pause();
    
};


function toggleButton(){

    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);