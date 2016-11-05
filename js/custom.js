$(document).ready(function(){
    $('title').html($('h1').html());
    $('meta[name="description"]').attr('content',$('.description').text().trim().replace("\n", ""));
    $('#template_menu').load('../inc/menu.html');
    $('#template_sidebar').load('../inc/sidebar.html');
    $('#template_sidebar_3').load('../inc/sidebar_3.html');
    $('#template_footer').load('../inc/footer.html');
});