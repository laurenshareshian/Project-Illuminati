'use strict';

import html from '../html.js';

// give the user a random ladder number and generate a message
// based on the discrepancy between their guess and the assigned number
// on the choices page

let template = function(intro_message) {
    return html`
    <div class = 'intro-message'>${intro_message}</div>
    `;
};

export default class NonRandomLadderNumber {
    constructor(props) {
        this.people = props.people;
    }

    render() {

        // assign person an actual ladder number based on their celeb status
        let person = this.people[this.people.length - 1];
        let status = person['celebStatus'];

        if(status === 'Famous for being racist'){
            person.ladder_actual = 0;
        }
        else if(status === 'Friends with Bono'){
            person.ladder_actual = 10;
        }
        else {
            person.ladder_actual = getRandInteger(0, 10);
        }
        //get a random number (inclusive)

        // if(status === 'Retired child star'){
        //     person.ladder_actual = 0;
        // }
        // if(status === 'Infamous but really just misunderstood'){
        //     person.ladder_actual = 1;
        // }
        // if(status === 'All press is good press'){
        //     person.ladder_actual = 4;
        // }
        // if(status === 'Multihyphenate Actor/Director/Producer/Musician'){
        //     person.ladder_actual = 9;
        // }
        console.log('ladder', person.ladder_actual);

        // create a message based on the discrepancy between ladder guess and actual
        let intro_message = '';
        if(person.ladder_guess - person.ladder_actual >= 2) {
            intro_message += 'Way off!  Get a clue.';
        }
        else if(person.ladder_guess - person.ladder_actual === 1) {
            intro_message += 'Just a tad over confident.';
        }
        else if(person.ladder_guess - person.ladder_actual === 0) {
            intro_message += 'Spot on!  How perceptive!';
        }
        else if(person.ladder_guess - person.ladder_actual === -1) {
            intro_message += 'Good news!  You\'re a little hotter than you think you are!';
        }
        else {
            intro_message += 'Whoa!  Get some self esteem.';
        }
        intro_message += ' You guessed a ' + person.ladder_guess + ' but your actual ladder rating is a ' + person.ladder_actual + '. <br>' ;

        intro_message += ' <p> Here are suitors in your ladder range.  Click to select bios of interest.</p>';
        intro_message += ' <p>  </p>';
        let dom = template(intro_message);
        return dom;
    }
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}