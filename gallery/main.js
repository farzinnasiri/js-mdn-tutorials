const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i = 1; i < 6; i++){
    xxx = 'images/'+'pic'+i+'.jpg';
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.onclick = function(){
        displayedImage.setAttribute('src',newImage.src);    
    } 
    thumbBar.appendChild(newImage);
}

btn.onclick = function(){
    if(btn.getAttribute('class') == 'dark'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.setAttribute('class','light')
        btn.textContent = "Ligthen"
    }else if (btn.getAttribute('class') == 'light'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.setAttribute('class','dark')
        btn.textContent = "Draken"
    }

}

