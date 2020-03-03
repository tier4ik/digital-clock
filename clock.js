// helper functions
const getRounded = num => Math.floor(num)

// class Clock depends on p5js
class Clock {

    constructor() {
        this.segmentSize = Math.floor(width / 10);
        this.segmentWidth = 40;
        this.segmentShift = 20;
        this.color = '0, 255, 110';
        this.showSeconds = true;
    }

    getTimeData() {
        const now = new Date();
        return {
            hours: now.getHours().toString(),
            minutes: now.getMinutes().toString()
        }
    }

    renderSegments(pos, timePart) {
        stroke(`rgba(${this.color}, 0.08)`);
        strokeCap(ROUND);
        strokeWeight(this.segmentWidth);
        // HORIZONTAL lines
        // top horizontal
        if (timePart === '0' || timePart === '2' || timePart === '3' || timePart === '5' || timePart === '6' || timePart === '7' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos - this.segmentSize / 2 - this.segmentShift),
            getRounded(height * 0.2),
            getRounded(width * pos + this.segmentSize / 2 + this.segmentShift),
            getRounded(height * 0.2)
        );
        // middle horizontal
        if (timePart === '2' || timePart === '3' || timePart === '4' || timePart === '5' || timePart === '6' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos - this.segmentSize / 2 - this.segmentShift),
            getRounded(height * 0.5),
            getRounded(width * pos + this.segmentSize / 2 + this.segmentShift),
            getRounded(height * 0.5)
        );
        // bottom horizontal
        if (timePart === '0' || timePart === '2' || timePart === '3' || timePart === '5' || timePart === '6' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos - this.segmentSize / 2 - this.segmentShift),
            getRounded(height * 0.8),
            getRounded(width * pos + this.segmentSize / 2 + this.segmentShift),
            getRounded(height * 0.8)
        );
        
        // VERTICAL lines
        // left side
        // top
        if (timePart === '0' || timePart === '4' || timePart === '5' || timePart === '6' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos - this.segmentSize / 2 - this.segmentWidth - this.segmentShift),
            getRounded(height * 0.24),
            getRounded(width * pos - this.segmentSize / 2 - this.segmentWidth - this.segmentShift),
            getRounded(height * 0.46)
        );
        // bottom
        if (timePart === '0' || timePart === '2' || timePart === '6' || timePart === '8') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos - this.segmentSize / 2 - this.segmentWidth - this.segmentShift),
            getRounded(height * 0.54),
            getRounded(width * pos - this.segmentSize / 2 - this.segmentWidth - this.segmentShift),
            getRounded(height * 0.76)
        );
        // right side
        // top
        if (timePart === '0' || timePart === '1' || timePart === '2' || timePart === '3' || timePart === '4' || timePart === '7' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos + this.segmentSize / 2 + this.segmentWidth + this.segmentShift),
            getRounded(height * 0.24),
            getRounded(width * pos + this.segmentSize / 2 + this.segmentWidth + this.segmentShift),
            getRounded(height * 0.46)
        );
        // bottom
        if (timePart === '0' || timePart === '1' || timePart === '3' || timePart === '4' || timePart === '5' || timePart === '6' || timePart === '7' || timePart === '8' || timePart === '9') {
            stroke(`rgb(${this.color})`);
        } else {
            stroke(`rgba(${this.color}, 0.08)`);
        }
        line(
            getRounded(width * pos + this.segmentSize / 2 + this.segmentWidth + this.segmentShift),
            getRounded(height * 0.54),
            getRounded(width * pos + this.segmentSize / 2 + this.segmentWidth + this.segmentShift),
            getRounded(height * 0.76)
        );
    }

    renderSeconds() {
        noStroke();
        fill(`rgb(${this.color})`);
        circle(width / 2, height * 0.4, 40);
        circle(width / 2, height * 0.6, 40);
    }

    renderHours(hrs) {
        let hrsPartOne = hrs.length === 1 ? 'zero' : hrs[0];
        let hrsPartTwo = hrs.length === 1 ? hrs[0] : hrs[1];

        this.renderSegments(0.15, hrsPartOne);
        this.renderSegments(0.35, hrsPartTwo);
    }
    
    renderMinutes(mnts) {
        let mntsPartOne = mnts.length === 1 ? '0' : mnts[0];
        let mntsPartTwo = mnts.length === 1 ? mnts[0] : mnts[1];

        this.renderSegments(0.65, mntsPartOne);
        this.renderSegments(0.85, mntsPartTwo);
    }

    renderClockFace() {
        const { hours, minutes } = this.getTimeData();
        if (this.showSeconds) {
            this.renderSeconds();
            this.showSeconds = false;
        } else {
            this.showSeconds = true;
        }
        this.renderHours(hours);
        this.renderMinutes(minutes);
    }

}