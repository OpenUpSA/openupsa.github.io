$(function() {
  // track outbound links
  $('a[href^=http]').on('click', function(e) {
    ga('send', 'event', 'outbound-click', 'click', e.target.href);
  });
});

$(function() {
  url = window.location.href;
  $(".page-share.facebook").on("click", function(e) {
    e.preventDefault();
    window.open("https://www.facebook.com/sharer/sharer.php?u="+url,
      "share", "width=600, height=400, scrollbars=no");
      ga('send', 'social', 'facebook', 'share', url);
  });

  $(".page-share.twitter").on("click", function(e) {
    e.preventDefault();
    window.open("https://twitter.com/intent/tweet?&url="+url,
      "share", "width=600, height=400, scrollbars=no");
      ga('send', 'social', 'twitter', 'share', url);
  });

  $(".page-share.linkedin").on("click", function(e) {
    e.preventDefault();
    window.open("https://www.linkedin.com/shareArticle?mini=true&source=OpenUp&url="+url,
      "share", "width=600, height=400, scrollbars=no");
      ga('send', 'social', 'linkedin', 'share', url);
  });

  $(".page-share.email").on("click", function(e) {
    e.preventDefault();
    var emailTitle = encodeURIComponent(document.title).replace(/&/g, '%26');
    window.location = 'mailto:?subject=' + emailTitle + '&body=I saw this OpenUp article and thought it might interest you: ' + url;
    ga('send', 'social', 'email', 'share', url);
  });
});

$(".homepage .partners .who .block.contact").height( $(".homepage .partners .who .block").first().height() );
$(".homepage .openness .block").height( $(".homepage .openness .block").first().height() );

$(".trainup-page .faq .answer").hide();
$(".trainup-page .faq .question").on("click", function(){
  $(this).next().toggle();
  $("i", this).toggleClass("fa-caret-up");
});

$(document).ready(function() {
  $(".trainup-course .hero h1, .trainup-course.open .content h2, .trainup-course.open .content h3, .trainup-course.open .content h4").each(function() {
    $(".toc-list").append("<li class="+$(this).get(0).nodeName+"><a href='#"+$(this).attr("id")+"'>"+$(this).text()+"</a></li>");
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 461){  
    $('.table-of-contents').addClass("fixed-to-top");
    $('#chapter-content').addClass("col-md-offset-4");
  }
  else{
    $('.table-of-contents').removeClass("fixed-to-top ");
    $('#chapter-content').removeClass("col-md-offset-4");
  }
});