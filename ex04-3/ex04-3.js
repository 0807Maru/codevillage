const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65];

function scoring(score) {
  if(score >= 90) {
      return `秀`;
  } else if(score >= 80) {
      return `優`;
  } else if(score >= 70) {
      return `良`;
  } else if(score >= 60) {
      return `可`;
  } else {
      return `不可`;
  }
}

// for(let i = 0; i < scores.length; i++) {
//      console.log(scoring(scores[i]));
// }

scores.forEach((score) => {
     console.log(scoring(score))
})