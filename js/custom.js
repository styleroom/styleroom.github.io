$(document).ready(function(){
    var page_name = $('h1').html();
    $('title').html(page_name);
    $('#template_menu').load('../ainc/menu.html');
    $('#template_sidebar').load('../ainc/sidebar.html');
    $('#template_footer').load('../ainc/footer.html');
});