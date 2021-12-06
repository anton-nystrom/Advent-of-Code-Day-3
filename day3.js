import { input } from "./puzzleInput.js";
let report = input;
report = report.split("\n");
console.log("Part One: " + partOne());
console.log("Part Two: " + partTwo());

function partOne() {
    let gamma = "";
    let epsilon = "";
    let powerConsumption = 0;
    let index = 0;
    while (index < report[0].length) {
        let count = 0;
        for (let i = 0; i < report.length; i++) {
            const binary = report[i];
            const bit = binary[index];
            if(bit === "1") {
                count += 1;
            }
            else {
                count -= 1;
            }
        }
        if(count > 0) {
            gamma += "1";
            epsilon += "0";
        }
        else {
            gamma += "0";
            epsilon += "1";
        }
        index += 1;
    }
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);
    powerConsumption = gamma * epsilon;

    return powerConsumption;
};

function partTwo() {
    let reportDupe = report;
    let lifeSupport = 0;
    let oxygen = search("oxygen");
    let co2 = search("co2");

    oxygen = parseInt(oxygen, 2);
    co2 = parseInt(co2, 2);
    lifeSupport = oxygen * co2;

    function search(rating) {
        report = reportDupe;
        let index = 0;
        while (index < report[0].length) {
            let count = 0;
            for (let i = 0; i < report.length; i++) {
                const binary = report[i];
                const bit = binary[index];
                if(bit === "1") {
                    count += 1;
                }
                else {
                    count -= 1;
                }
            }
            if(count < 0) {
                if(rating === "oxygen") {
                    report = report.filter(item => item.charAt(index) === "0");
                }
                else {
                    report = report.filter(item => item.charAt(index) === "1");
                }
            }
            else {
                if(rating === "oxygen") {
                    report = report.filter(item => item.charAt(index) === "1");
                }
                else {
                    report = report.filter(item => item.charAt(index) === "0");
                }
            }
            if(report.length > 1) {
                index += 1;
            }
            else {
                break;
            }
        }
        return report;
    }
    return lifeSupport;
};