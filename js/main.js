
$('#submitter').on('click', function(){
  var min_font = parseInt( $('#min_font').val() )
  var max_font = parseInt( $('#max_font').val() )
  var min_width = parseInt( $('#min_width').val() )
  var max_width = parseInt( $('#max_width').val() )
  var m = ( max_font - min_font ) / ( max_width - min_width )
  var b = min_font - m * min_width
  var width = (m*100)
  var scale = (b)
  var result = ".myFontsClass {</br>"
  result += "&nbsp;&nbsp;font-size: "+min_font+"px;</br>"
  result += "}</br>"
  result += "@media (min-width: 320px) {</br>"
  result += "&nbsp;&nbsp;.myFontsClass {</br>"
  result += "&nbsp;&nbsp;&nbsp;&nbsp;font-size: calc( "+width+"vw + "+scale+"px );</br>"
  result += "&nbsp;&nbsp;}</br>"
  result += "}</br>"
  result += "@media (min-width: 1000px) {</br>"
  result += "&nbsp;&nbsp;.myFontsClass {</br>"
  result += "&nbsp;&nbsp;&nbsp;&nbsp;font-size: "+max_font+"px;</br>"
  result += "&nbsp;&nbsp;}</br>"
  result += "}</br>"
  $('#final_css').html(result)
})
