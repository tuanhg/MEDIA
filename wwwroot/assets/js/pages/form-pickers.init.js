/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Form pickers Js File
*/

// colorpickers

// classic color picker
var classicPickrDemo = document.querySelectorAll(".classic-colorpicker");
if (classicPickrDemo)
    Array.from(classicPickrDemo).forEach(function () {
        Pickr.create({
            el: ".classic-colorpicker",
            theme: "classic", // or 'monolith', or 'nano'  
            appClass: 'colorHex',
            default: "#405189",            
            defaultRepresentation: "HEX",

            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: false,
                    hsva: false,
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
    });

// monolith color picker
var monolithColorPickr = document.querySelectorAll(".monolith-colorpicker");
if (monolithColorPickr)
    Array.from(monolithColorPickr).forEach(function () {
        Pickr.create({
            el: ".monolith-colorpicker",
            theme: "monolith",
            default: "#0ab39c",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
            ],
            defaultRepresentation: "HEXA",
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: false,
                    rgba: false,
                    hsva: false,
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
    });

// nano color picker
var nanoColorPickr = document.querySelectorAll(".nano-colorpicker");
if (nanoColorPickr)
    Array.from(nanoColorPickr).forEach(function () {
        Pickr.create({
            el: ".nano-colorpicker",
            theme: "nano",
            default: "#3577f1",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
            ],
            defaultRepresentation: "HEXA",
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: false,
                    rgba: false,
                    hsva: false,
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
    });

// demo color picker
var demoColorPickr = document.querySelectorAll(".colorpicker-demo");
if (demoColorPickr)
    Array.from(demoColorPickr).forEach(function () {
        Pickr.create({
            el: ".colorpicker-demo",
            theme: "monolith",
            default: "#405189",
            components: {
                // Main components
                preview: true,
                // Input / output Options
                interaction: {
                    clear: true,
                    save: true,
                },
            },
        });
    });

// color picker opacity & hue
var opacityHueColorPickr = document.querySelectorAll(".colorpicker-opacity-hue");
if (opacityHueColorPickr)
    Array.from(opacityHueColorPickr).forEach(function () {
        Pickr.create({
            el: ".colorpicker-opacity-hue",
            theme: "monolith",
            default: "#0ab39c",

            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    clear: true,
                    save: true,
                },
            },
        });
    });

// color picker swatches
var swatcherColorPickr = document.querySelectorAll(".colorpicker-switch");
if (swatcherColorPickr)
    Array.from(swatcherColorPickr).forEach(function () {
        Pickr.create({
            el: ".colorpicker-switch",
            theme: "monolith",
            default: "#3577f1",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
            ],
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    clear: true,
                    save: true,
                },
            },
        });
    });

// color picker input
var inputColorPickr = document.querySelectorAll(".colorpicker-input");
if (inputColorPickr)
    Array.from(inputColorPickr).forEach(function () {
        Pickr.create({
            el: ".colorpicker-input",
            theme: "monolith",
            default: "#f7b84b",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
            ],
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
    });

// color picker Format
var formatColorPickr = document.querySelectorAll(".colorpicker-format");
if (formatColorPickr)
    Array.from(formatColorPickr).forEach(function () {
        Pickr.create({
            el: ".colorpicker-format",
            theme: "monolith",
            default: "#f06548",
            swatches: [
                "rgba(244, 67, 54, 1)",
                "rgba(233, 30, 99, 0.95)",
                "rgba(156, 39, 176, 0.9)",
                "rgba(103, 58, 183, 0.85)",
                "rgba(63, 81, 181, 0.8)",
                "rgba(33, 150, 243, 0.75)",
                "rgba(3, 169, 244, 0.7)",
            ],
            components: {
                // Main components
                preview: true,
                opacity: true,
                hue: true,

                // Input / output Options
                interaction: {
                    hex: true,
                    rgba: true,
                    hsva: true,
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
    });