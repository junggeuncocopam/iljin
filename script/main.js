// main.js

$(function(){
    $('.depth1 > li ').hover(
        function(){
            $('.depth2').stop().slideDown(200);
      
        }, 
        function(){
            $('.depth2').stop().slideUp(200);
        });
});

$(function(){
    const utcImage = document.querySelectorAll('.utImage');
    const graText = document.querySelectorAll('.graphic_text');

    for (let i = 0; i < utcImage.length; i++) {
        utcImage[i].dataset.index = i;
        graText[i].dataset.index = i;
    }

    window.addEventListener('scroll', () => {
        let step;
        let boundingRect;

        for (let i = 0; i < utcImage.length; i++) {
            step = utcImage[i];
            boundingRect = step.getBoundingClientRect();
            // console.log(boundingRect);
            currentItem = graText[step.dataset.index];
            utcItem = utcImage[step.dataset.index]
            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.9) {
                
                    currentItem.classList.add('visible');
                } else {currentItem.classList.remove('visible');}
        }
    });
});
