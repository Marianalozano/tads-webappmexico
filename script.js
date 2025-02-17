document.addEventListener("DOMContentLoaded", function() {
    const verdeSlider = document.getElementById("verde");
    const rojoSlider = document.getElementById("rojo");

    const verdeBox = document.getElementById("verdeBox");
    const rojoBox = document.getElementById("rojoBox");

    const verdeCode = document.getElementById("verdeCode");
    const rojoCode = document.getElementById("rojoCode");

    function actualizarVerde() {
        let valor = parseInt(verdeSlider.value);
        let color = `rgb(0, ${valor}, 0)`;
        verdeBox.style.backgroundColor = color;
        verdeCode.textContent = rgbToHex(0, valor, 0);
    }

    function actualizarRojo() {
        let valor = parseInt(rojoSlider.value);
        let color = `rgb(${valor}, 0, 0)`;
        rojoBox.style.backgroundColor = color;
        rojoCode.textContent = rgbToHex(valor, 0, 0);
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }

    verdeSlider.addEventListener("input", actualizarVerde);
    rojoSlider.addEventListener("input", actualizarRojo);

    actualizarVerde();
    actualizarRojo();
});