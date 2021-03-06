export function Eye(eye) {
    Object.assign(this, eye);
    this.pupil = Object.assign({}, eye.center);
    this.focus = Object.assign({}, eye.center);
    this.irisData = Eye.irisData(eye.hue || 200);
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
        pupilRadius = defaultPupil
    } = this;

    context.fillStyle = "white";
    context.shadowBlur = 8;
    context.shadowColor = "gray";
    context.beginPath();
    context.ellipse(center.x, center.y, radius, radius, 0, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;

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

    context.beginPath();
    context.shadowBlur = 2;
    context.shadowColor = "black";
    context.ellipse(
        pupil.x,
        pupil.y,
        irisRadius,
        irisRadius,
        0,
        0,
        Math.PI * 2
    );
    context.fill();
    context.shadowBlur = 0;

    context.moveTo(pupil.x, pupil.y + irisRadius);
    this.irisData.forEach(function(slice) {
        context.fillStyle = slice[0];
        let sine = Math.sin(slice[1]);
        let cosine = Math.cos(slice[1]);
        let x = pupil.x + irisRadius * sine;
        let y = pupil.y + irisRadius * cosine;
        context.beginPath();
        context.lineTo(x, y);

        sine = Math.sin(slice[2]);
        cosine = Math.cos(slice[2]);
        x = pupil.x + irisRadius * sine;
        y = pupil.y + irisRadius * cosine;
        context.lineTo(x, y);
        context.lineTo(pupil.x, pupil.y);
        context.fill();
    });
};

Eye.distance = function(v1, v2) {
    const dx = v2.x - v1.x;
    const dy = v2.y - v1.y;
    const distance = Math.sqrt(Math.abs(dx * dx + dy * dy));
    return distance;
};

Eye.irisData = function(hue = 200, sat = 50, light = 50) {
    let start = 0;
    const increment = Math.PI / 24;
    const irisSlices = [];
    while (start < Math.PI * 2) {
        irisSlices.push([
            `hsl(${hue},${sat - 15 + Math.random() * 30}%,${light -
                15 +
                Math.random() * 30}%)`,
            start,
            start + increment
        ]);
        start = start + increment;
    }
    return irisSlices;
};
