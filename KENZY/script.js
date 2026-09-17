// ================= SPLASH SCREEN =================

window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.classList.add("hide");
            setTimeout(() => {
                splash.style.display = "none";
            }, 700);
        }, 1900);
    }
});


// ================= COPY PHONE NUMBER =================

const toast = document.getElementById("toast");

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

const copyChips = document.querySelectorAll(".copy-chip[data-copy]");

copyChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        const number = chip.getAttribute("data-copy");
        if (!number) return;

        navigator.clipboard.writeText(number)
            .then(() => {
                const icon = chip.querySelector("i");
                const originalClass = icon ? icon.className : null;

                chip.classList.add("copied");
                if (icon) icon.className = "fa-solid fa-check";
                showToast("تم نسخ الرقم");

                setTimeout(() => {
                    chip.classList.remove("copied");
                    if (icon && originalClass) icon.className = originalClass;
                }, 1500);
            })
            .catch(() => {
                showToast("الرقم: " + number);
            });
    });
});
