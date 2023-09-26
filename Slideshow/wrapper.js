var ul;
var liItem;
var imageWidth;
var imageNumber;

function init(){
    ul = document.getElementById('image_slider');
    liItem = ul.children;
    imageNumber = liItem.length;
    imageWidth = liItem[0].children[0].offsetWidth;
    // set ul's width as the total width of all images in image slide
    ul.style.width =  parseInt(imageWidth * imageNumber) + 'px';
    slider(ul);
}

function slider(ul){
    AnimationEffect({
        delay: 17,
        duration: 3000,
        delta: function(p){ return Math.max(0, -1 + 2 * p)},
        step: function(delta){
            ul.style.left = '-' + parseInt(currentImage * imageWidth + delta * imageWidth) + 'px';
        },
        callback:function(){
            currentImage++;
            // if it doesn't slide to the last image, keep sliding
            if(currentImage < imageNumber-1)
            slider(ul);
        } 
        // if current image its the last slide, it slides back to the first one
            else {
            var leftPosition - (imageNumber-1) * imageWidth;
            //after 2 seconds, call the goBack function to slide to the first image
            setTimeout(function(){goBack(leftPosition)},2000);
            setTimeout(function(){slider(ul)}, 4000);

             }
    );
}

function goBack(leftPosition){
    currentImage = 0;
    var id = setInterval(function(){
        if(leftPosition >= 0){
            ul.style.left = '-' + parseInt(leftPosition) + 'px';
            leftPosition -= imageWidth/10;
        }
        else{
            clearInterval(id);

        }
    }, 17);
}