(function($){
    "use strict";

    window.tbLivePreview.dark_theme = function(value) {
        if(value) {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    };
    window.tbLivePreview.color      = function(value) {
        $('#customizations-css').html($('#customizations-css').attr('data-tb-cc-template').replace(/__general_color__/g, value));
    };
    window.tbLivePreview.hero       = function(value) {
        $('#hero').multiBackground({action:'destroy'});
        switch(value) {
            case 'solid':
                $('#hero').multiBackground([{"type":"solid","color":"#b32e67"}], false);
                break;

            case 'gradient':
                $('#hero').multiBackground([{"type":"gradient","direction":"radial","points":[{"position":"0.0","color":"rgb(255, 0, 0)"},{"position":"0.15","color":"rgb(255, 255, 0)"},{"position":"0.3","color":"rgb(0, 255, 0)"},{"position":"0.50","color":"rgb(0, 255, 255)"},{"position":"0.65","color":"rgb(0, 0, 255)"},{"position":"0.8","color":"rgb(255, 0, 255)"},{"position":"1.0","color":"rgb(255, 0, 0)"}]}], false);
                break;

            case 'image':
                $("#hero").multiBackground([{"type":"image","attachment":"parallax","url":"http://multibackground.tonybogdanov.com/docs/assets/birds.jpg"}], false);
                break;

            case 'pattern':
                $("#hero").multiBackground([{"type":"pattern","attachment":"parallax","url":"http://multibackground.tonybogdanov.com/docs/assets/pattern.png"}], false);
                break;

            case 'video':
                $("#hero").multiBackground([{"type":"video","attachment":"parallax","url":{"mp4":"http://multibackground.tonybogdanov.com/docs/assets/video.mp4","webm":"http://multibackground.tonybogdanov.com/docs/assets/video.webm","ogg":"http://multibackground.tonybogdanov.com/docs/assets/video.ogg"}}], false);
                break;

            case 'youtube':
                $("#hero").multiBackground([{"type":"youtube","attachment":"parallax","id":"pQVIYstU54s"}], false);
                break;

            case 'vimeo':
                $("#hero").multiBackground([{"type":"vimeo","attachment":"fixed","id":"103344490"}], false);
                break;

            case 'iframe':
                $("#hero").multiBackground([{"type":"iframe","url":"http://tonybogdanov.com/about-me"}], false);
                break;

            case 'map':
                $("#hero").multiBackground([{"type":"gmap","apikey":"AIzaSyCpa-W862dB1dHu83gHarG9sKWfADJGsjY","latitude":"40.758895","longitude":"-73.985131","gmap":{"marker":{"icon":"http://multibackground.tonybogdanov.com/docs/assets/marker.png"}}}], false);
                break;

            case 'slideshow':
                $("#hero").multiBackground([{"type":"image","attachment":"fixed","url":"http://multibackground.tonybogdanov.com/docs/assets/birds.jpg","slideshow":{"loop":"forward"}},{"type":"image","attachment":"fixed","url":"http://multibackground.tonybogdanov.com/docs/assets/rose.jpg","slideshow":{"loop":"forward"}},{"type":"image","attachment":"fixed","url":"http://multibackground.tonybogdanov.com/docs/assets/sunset.jpg","slideshow":{"loop":"forward"}}], false);
                break;
        }
    };
})(jQuery);