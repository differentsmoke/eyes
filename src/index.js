import { Eye } from "./eye/eye.js";
import "./index.css";

const width = 800;
const height = 800;

window.onload = function() {
    const canvas = createCanvas();
    const context = canvas.getContext("2d");
    const eyes = [];
    for (let i = 0; i < 5; i = i + 1) {
        for (let j = 0; j < 5; j = j + 1) {
            const eye = new Eye({
                context,
                center: {
                    x: 120 * (i + 1),
                    y: 120 * (j + 1)
                },
                radius: 50,
                irisRadius: 25,
                pupilRadius: 12,
                hue: Math.floor(Math.random() * 360)
            });
            eyes.push(eye);
        }
    }

    /* const eyes = [
        new Eye({
            context,
            center: {
                x: 150,
                y: 150
            },
            focus: {
                x: 150,
                y: 150
            }
        }),
        new Eye({
            context,
            center: { x: 400, y: 150 },
            focus: { x: 400, y: 150 },
            radius: 50,
            irisRadius: 30,
            pupilRadius: 20
        })
    ];*/

    canvas.onmousemove = function(event) {
        const { x, y } = event;
        eyes.forEach(function(eye) {
            eye.speed = 10;
            eye.focus = {
                x,
                y
            };
        });
    };

    canvas.onmouseleave = function(event) {
        eyes.forEach(function(eye) {
            eye.speed = 2;
            eye.focus = {
                x: eye.center.x,
                y: eye.center.y
            };
        });
    };

    setInterval(function() {
        context.clearRect(0, 0, width, height);
        eyes.forEach(function(eye) {
            eye.update();
        });
    }, 40);
};

function createCanvas() {
    const canvas = document.createElement("canvas");
    window.document.body.appendChild(canvas);
    canvas.setAttribute("width", `${width}px`);
    canvas.setAttribute("height", `${height}px`);
    return canvas;
}
