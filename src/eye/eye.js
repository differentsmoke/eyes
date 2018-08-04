export function Eye(eye) {
    Object.assign(this, eye);
    this.pupil = Object.assign({}, eye.center);
    this.focus = Object.assign({}, eye.center);
}

Eye.prototype.speed = 10;

const defaultRadius = 100,
    defaultPupil = 25,
    defaultIris = 50;

Eye.prototype.draw = function() {
    const {
        context,
        center,
        pupil,
        radius = defaultRadius,
        pupilRadius = defaultPupil,
        irisRadius = defaultIris
    } = this;

    context.fillStyle = "white";
    context.beginPath();
    context.ellipse(center.x, center.y, radius, radius, 0, 0, Math.PI * 2);
    context.fill();

    this.drawIris();

    context.fillStyle = "black";
    context.beginPath();
    context.ellipse(
        pupil.x,
        pupil.y,
        pupilRadius,
        pupilRadius,
        0,
        0,
        Math.PI * 2
    );
    context.fill();
};

Eye.prototype.update = function() {
    const focusVector = this.focusVector();
    this.pupil = {
        x: this.pupil.x + focusVector.x,
        y: this.pupil.y + focusVector.y
    };
    this.draw();
};

Eye.prototype.focusVector = function() {
    const {
        focus,
        center,
        pupil,
        radius = defaultRadius,
        irisRadius = defaultIris
    } = this;

    //this is the largest than the vector could be
    const maxRadius = radius - irisRadius;

    const trueFocus = {};

    if (Eye.distance(center, focus) > maxRadius) {
        const x = focus.x - center.x;
        const y = focus.y - center.y;
        const magnitude = Math.sqrt(Math.abs(Math.pow(x, 2) + Math.pow(y, 2)));
        trueFocus.x = center.x + (x / magnitude) * maxRadius;
        trueFocus.y = center.y + (y / magnitude) * maxRadius;
    } else {
        trueFocus.x = focus.x;
        trueFocus.y = focus.y;
    }

    const x = trueFocus.x - pupil.x;
    const y = trueFocus.y - pupil.y;
    const magnitude = Math.sqrt(Math.abs(Math.pow(x, 2) + Math.pow(y, 2)));

    if (magnitude === 0) {
        return { x: 0, y: 0, magnitude: 0 };
    } else if (magnitude < this.speed) {
        return {
            x: trueFocus.x - pupil.x,
            y: trueFocus.y - pupil.y
        };
    } else {
        return {
            x: (x / magnitude) * this.speed,
            y: (y / magnitude) * this.speed
        };
    }
};

Eye.prototype.drawIris = function() {
    const { context, pupil, irisRadius } = this;

    const colors = ["hsl(200,50%,50%)", "hsl(180,50%,70%)", "hsl(220,50%,50%)"];
    let start = 0;
    const increment = Math.PI / 36;

    context.moveTo(pupil.x, pupil.y + irisRadius);
    while (start < Math.PI * 2) {
        context.fillStyle = colors[0];
        let sine = Math.sin(start);
        let cosine = Math.cos(start);
        let x = pupil.x + irisRadius * sine;
        let y = pupil.y + irisRadius * cosine;
        start = start + increment;
        context.beginPath();
        context.lineTo(x, y);
        sine = Math.sin(start);
        cosine = Math.cos(start);
        x = pupil.x + irisRadius * sine;
        y = pupil.y + irisRadius * cosine;
        context.lineTo(x, y);
        context.lineTo(pupil.x, pupil.y);
        context.fill();
        const first = colors.shift();
        colors.push(first);
    }
    context.fillStyle = colors[0];
};

Eye.distance = function(v1, v2) {
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    const distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
    return distance;
};
