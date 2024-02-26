let starRating = 0;
const ratingResultRef = document.querySelector('.rating span');

const starsWrapper = document.querySelector('.stars');
starsWrapper.addEventListener('click',function(e){
    const targetElement = e.target;
    if(targetElement.classList.contains('fa-star')){
        const targetValue = targetElement.dataset.id;
        ratingResultRef.innerText = targetValue;
        starRating =Number(targetValue);
        changeColor(targetValue);

    }
}) 

starsWrapper.addEventListener('mouseover',function(e){
    const targetElement = e.target;
    if(targetElement.classList.contains('fa-star')){
        const targetValue = targetElement.dataset.id;
        changeColor(targetValue);
    }
})
starsWrapper.addEventListener('mouseleave' , function(e){
    changeColor(starRating);
})

// starsWrapper.addEventListener('mouseleave', function(e) {
//     changeColor(starRating);
// })

function changeColor(targetIndex) {
    const starIcons = document.querySelectorAll('.stars .star i');

    starIcons.forEach((icon, idx) => {
        const currentIdx = idx + 1;
        if (currentIdx <= targetIndex) {
            // Add Star
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            // Remove Star
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    })
}