// Class Stories

const knight = document.getElementById('knight');
const kunoichi = document.getElementById('kunoichi');
const mage = document.getElementById('mage');

knight.addEventListener('click', (e)=>{

    const knightText = document.getElementById('knight-text');
    const kunoichiText = document.getElementById('kunoichi-text');
    const mageText = document.getElementById('mage-text');

    if(kunoichi.firstElementChild.classList.contains("container-red-gold")){
        kunoichi.firstElementChild.classList.remove('container-red-gold');
        kunoichi.firstElementChild.classList.add('outline-purple');
        kunoichiText.classList.add('none');
    }

    if(mage.firstElementChild.classList.contains("container-red-gold")){
        mage.firstElementChild.classList.remove('container-red-gold');
        mage.firstElementChild.classList.add('outline-purple');
        mageText.classList.add('none');
    }

    knight.firstElementChild.classList.remove('outline-purple');
    knight.firstElementChild.classList.add('container-red-gold');
    knightText.classList.remove('none');
});

kunoichi.addEventListener('click', (e)=>{

    const knightText = document.getElementById('knight-text');
    const kunoichiText = document.getElementById('kunoichi-text');
    const mageText = document.getElementById('mage-text');

    if(knight.firstElementChild.classList.contains("container-red-gold")){
        knight.firstElementChild.classList.remove('container-red-gold');
        knight.firstElementChild.classList.add('outline-purple');
        knightText.classList.add('none');
    }

    if(mage.firstElementChild.classList.contains("container-red-gold")){
        mage.firstElementChild.classList.remove('container-red-gold');
        mage.firstElementChild.classList.add('outline-purple');
        mageText.classList.add('none');
    }

    kunoichi.firstElementChild.classList.remove('outline-purple');
    kunoichi.firstElementChild.classList.add('container-red-gold');
    kunoichiText.classList.remove('none');
});

mage.addEventListener('click', (e)=>{

    const knightText = document.getElementById('knight-text');
    const kunoichiText = document.getElementById('kunoichi-text');
    const mageText = document.getElementById('mage-text');

    if(knight.firstElementChild.classList.contains("container-red-gold")){
        knight.firstElementChild.classList.remove('container-red-gold');
        knight.firstElementChild.classList.add('outline-purple');
        knightText.classList.add('none');
    }

    if(kunoichi.firstElementChild.classList.contains("container-red-gold")){
        kunoichi.firstElementChild.classList.remove('container-red-gold');
        kunoichi.firstElementChild.classList.add('outline-purple');
        kunoichiText.classList.add('none');
    }

    mage.firstElementChild.classList.remove('outline-purple');
    mage.firstElementChild.classList.add('container-red-gold');
    mageText.classList.remove('none');
});

// Carousel 
const slider = document.querySelector('.slider');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

btnPrev.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.item');
    slider.prepend(items[items.length-1]);
});

btnNext.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.item');
    slider.append(items[0]);
});