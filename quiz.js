// jshint esversion:6

var questAndAns = [
    [
        'who is the actual president of Haiti?', 'jovenel'
    ],
    [
        'who is the united states of americas president?', 'trump'
    ],
    [
        'whats the surname of reina?', 'michel'
    ],
    [
        'what the progammer name?', 'fritz'
    ],
    [
        'whats my mother name?', 'marie yoleine'
    ]
];

var goodAnswer = [];
var badAnswer = [];

var goodPoints = 0;
var badPoints = 0;

var html = '';

function listArray (arr) {
    for (var i = 0; i < arr.length; i++) {
        var answer = prompt(arr[i][0]);
        if (answer === arr[i][1]) {
            goodAnswer.push(arr[i][0]);
            goodPoints++; 
        } else {
            badAnswer.push(arr[i][0]); 
            badPoints++; 
        }
    }
    // console.log(goodAnswer);
    // console.log(badAnswer);
}

function printDoc(doc, typeOfAnswer) {
    html += '<h3> you have respond ' + typeOfAnswer + ' those questions: </h3>';
    html += '<ol>';
    for (var i = 0; i <doc.length; i++) {
        html += '<li> ' + doc[i] + '</li>';
    }
    html += '</ol>';
    html += '<p> your total points are : ' + goodPoints + '. </p>'; 
}

listArray(questAndAns);
printDoc(goodAnswer, 'correctly');
printDoc(badAnswer, 'uncorrectly');

document.write(html);
