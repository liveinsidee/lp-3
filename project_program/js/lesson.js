const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentIndex = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none';
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
}

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block';
    tabs[tabIndex].classList.add('tab_content_item_active');
    currentIndex = tabIndex;
}

const changeSlide = () => {
    currentIndex = (currentIndex + 1) % tabs.length;
    hideTabContent();
    showTabContent(currentIndex);
}

const slideInterval = setInterval(changeSlide, 3000);
hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                clearInterval(slideInterval);
                hideTabContent();
                showTabContent(tabIndex);
                slideInterval.setInterval(changeSlide, 3000);
            }
        });
    }
}
window.addEventListener('load', () => {
    setTimeout(() => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    }, 10000);
});

document.querySelector('.modal_close').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});