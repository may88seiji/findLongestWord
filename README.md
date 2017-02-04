##考え方
str.split(' ')で単語に切り分ける。
.sort(function(a,b){ return b.length - a.length; }
で配列に文字数の多い単語順にならべかえる。
{ return a.length - b.length; }にすると少ない順になる。
並べ替えた単語の添字0を返り値にすると一番文字の多い単語の数値を取得できる。