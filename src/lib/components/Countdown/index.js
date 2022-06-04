import { html } from "lit";
import { BaseElement } from "../BaseElement";


class Countdown extends BaseElement {
    static get properties() {
        return {
            days: {},
            hours: {},
            minutes: {},
            seconds: {},
            now: {},
            countdownDate: {},
            distance: {},
        }
    }

    constructor() {
        super();
        this.days = undefined;
        this.hours = undefined;
        this.minutes = undefined;
        this.seconds = undefined;
        this.distance = undefined;
        this.now = new Date().getTime();
        this.countdownDate = new Date("Aug 25, 2022 07:05:00").getTime();
    }

    connectedCallback() {
        super.connectedCallback();

        this.now = new Date().getTime();
        this.countdownDate = new Date("Aug 25, 2022 07:05:00").getTime();

        setInterval(function() {

            console.log(this.countdownDate);
            console.log(this.now);

            this.distance = this.countdownDate - this.now;

            this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

            document.getElementById('day').innerHTML  = this.days;
            document.getElementById('hour').innerHTML  = this.hours;
            document.getElementById('minute').innerHTML  = this.minutes;
            document.getElementById('second').innerHTML  = this.seconds;
        }, 1000);
    }

    render() {
        return html`
            <div id="event-countdown" class="repel edges">
                <div id="count-day" class="count-item">
                    <h1 id="day"></h1>
                    <h2>Hari</h1>
                </div>
            <div id="count-hour" class="count-item">
                <h1 id="hour"></h1>
                <h2>Jam</h1>
            </div>
            <div id="count-minute" class="count-item">
                <h1 id="minute"></h1>
                <h2>Menit</h1>
            </div>
            <div id="count-second" class="count-item">
                <h1 id="second"></h1>
                <h2>Detik</h1>
            </div>
        </div>
        `
    }
}

customElements.define('countdown-time', Countdown);