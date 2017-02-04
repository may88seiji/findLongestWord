//1
function findLongestWord(s) {
  var i = s.split(' ');
  var b = i[0];
  for( var a = 0; a < i.length; a++){
    if( b.length<i[a].length){
      b = i[a];
    }
  }
  return b.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
}
//2
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
//3
function findLongestWord(s) {
  return Math.max.apply(null, s.split(' ').map(function(str) {
    return str.length; 
  }));
}
//4
function findLongestWord(str) {
  return str.split(' ').reduce(function(bef, cur) {
    return bef > cur.length ? bef : cur.length;
  }, 0);
};
//5
function findLongestWord(str) {
  return str.split(' ').reduce(function(num, word) {
    return Math.max(num, word.length);
  }, 0);
};