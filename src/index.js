import { Eye } from "./eye/eye.js";
import "./index.css";

window.onload = function() {
    const canvas = getCanvas(),
        context = canvas.getContext("2d"),
        eyes = [],
        width = canvas.offsetWidth,
        height = canvas.offsetHeight,
        side = 5,
        spread = 120,
        margin = (width - (side-1) * spread) /2;

    for (let i = 0; i < side; i = i + 1) {
        for (let j = 0; j < side; j = j + 1) {
            const eye = new Eye({
                context,
                center: {
                    x: spread * i + margin,
                    y: spread * j + margin
                },
                radius: 50,
                irisRadius: 25,
                pupilRadius: 12,
                hue: Math.floor(Math.random() * 360)
            });
            eyes.push(eye);
        }
    }

    canvas.onmousemove = function(event) {
        const { x, y, target } = event;
        eyes.forEach(function(eye) {
            eye.focus = {
                x: x - target.offsetLeft,
                y: y - target.offsetTop
            };
        });
    };
    canvas.onmouseenter = function(event) {
        const { x, y } = event;
        eyes.forEach(function(eye) {
            eye.speed = Math.round(1 + Math.random() * 5);
        });
    };

    canvas.onmouseleave = function(event) {
        eyes.forEach(function(eye) {
            eye.speed = 0.5;
            eye.focus = {
                x: eye.center.x,
                y: eye.center.y
            };
        });
    };

    function frame() {
        context.clearRect(0, 0, 1000, 1000);
        eyes.forEach(function(eye) {
            eye.update();
        });
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
};

function getCanvas() {
    const canvas = document.querySelector("#canvas");
    const height = canvas.offsetHeight;
    const width = canvas.offsetWidth;
    canvas.setAttribute("width", `${width}px`);
    canvas.setAttribute("height", `${height}px`);
    return canvas;
}
