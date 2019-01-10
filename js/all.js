$(function () {

    $('#tabs li').click(function () {
        var thisClass = this.className.slice(0, 2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();

    $('.slider').bxSlider();

    // $('.our-team-slider').slick({
    //     lazyLoad: 'ondemand',
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     respondTo: 'slider',
    //     nextArrow: '.img/arrow-right.png',
    //     prevArrow: '.img/arrow-left.png',
    // });
});