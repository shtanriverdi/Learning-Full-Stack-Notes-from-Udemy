// Prototypes are template objects
// String.prototype.yell = function() {
// 	return `${this.toUpperCase()}`;
// }

// Array.prototype.pop = function() {
// 	return 'Avcunuzu yalayınız...';
// }

// Factory Function
// function makeColor(r, g, b) {
//     const color = {}; // Since we return color, we have access outside as well
//     let a = 5; // Inaccessible outside of this function!

//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function() {
//         const { r, g, b } = this; // Shortcut for deconstruct
//         return `rgb(${r}, ${g}, ${b})`;
//     }

//     color.hex = function() {
//         const { r, g, b } = this;
//         return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(25, 255, 150);
// firstColor.rgb();
// firstColor.hex();

// const blackColor = makeColor(0, 0, 0);
// blackColor.rgb();
// blackColor.hex();

// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// 	this.a = undefined;
// 	this.h = undefined;
// }

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     const hexColor = "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
//     this.h = hexColor;
//     return hexColor;
// }

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// Color.prototype.info = function() {
// 	const { r, g, b, a, h } = this;
// 	console.log("Rgba: ", r, g, b, a);
// 	console.log("Hex: ", h);
// 	console.log();
// }

// const color1 = new Color(12, 255, 45);
// const color2 = new Color(0, 0, 0);

// color1.rgb();
// color1.hex();
// color1.info();

// color2.rgb();
// color2.hex();
// color2.info();

// document.body.style.backgroundColor = color1.rgba(0.2);

class Color {
    constructor(r, g, b, name = 'default') {
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
        this.calcHSL();,
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`; // 255, 255, 255
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = "1.0") {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;
        const hexColor = "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
        return hexColor;
    }

    hsl() {
    	const { h, s, l } = this;
    	return `hsl(${h},${s}%,${l}%)`;
    }

    fullySaturation() {
    	const { h, s, l } = this;
    	return `hsl(${h},100%,${l}%)`;
    }

    calcHSL() {
    	const { r, g, b } = this;
    	// RANDOM HSL calculation....
    	this.h = r + Math.floor(Math.random() * 20) + 1;
    	this.s = g + Math.floor(Math.random() * 20) + 1;
    	this.l = b + Math.floor(Math.random() * 20) + 1;
    }

    opposite() {
    	const { h, s, l } = this;
    	const newHue = (h + 180) % 360;
    	this.h = newHue;
    	return `hsl(${newHue},${s}%,${l}%)`;
    }

    greet() {
        console.log('RGB: ', this.r, this.g, this.b, " name:", this.colorName);
    }
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

const color = new Color(120, 12, 20, 'genesisColor');
const color2 = new Color(20, 150, 5, 'anotherColor');