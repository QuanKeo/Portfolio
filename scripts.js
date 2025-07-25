function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var btn = document.getElementById("backToTop");
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    document.getElementById("backToTop").onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});

