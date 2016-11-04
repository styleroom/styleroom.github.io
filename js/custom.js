$(document).ready(function(){
    $('title').html($('h1').html());
    $('meta[name="description"]').attr('content',$('.description').text().trim().replace("\n", ""));
    $('#template_menu').load('../ainc/menu.html');
    $('#template_sidebar').load('../ainc/sidebar.html');
    $('#template_footer').load('../ainc/footer.html');
});