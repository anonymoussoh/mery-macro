// -----------------------------------------------------------------------------
// 文章中の\r\nを本物の改行にする
// -----------------------------------------------------------------------------

if (document.selection.Text == "")
	document.selection.SelectAll();
var s1 = document.selection.Text.split("\n");
var s2 = new Array();

for (var i = 0; i < s1.length; i++) {
    s2.push(s1[i].replace(/\\r\\n/g,'\n'));
}
document.selection.Text = s2.join("\n");
document.selection.StartOfDocument();
