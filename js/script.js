document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("mainProductImage");

    thumbnails.forEach(function (thumb) {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });
});