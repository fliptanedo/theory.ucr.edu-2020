/*	
	email.js 
	by flip.tanedo@ucr.edu
*/


function eMailUCR(ucrid)
{
var emailE=(ucrid + '@' + 'ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + emailE + '</a>')
}

function eMailUCRemail(ucrid)
{
var emailE=(ucrid + '@' + 'email.ucr' + '.edu')
document.write('<a href="mailto:' + emailE + '">' + 'E-mail' + '</a>')
}

function eMailgen(preat, postat)
{
var emailE=(preat + '@' + postat)
document.write('<a href="mailto:' + emailE + '">' + emailE + '</a>')
}