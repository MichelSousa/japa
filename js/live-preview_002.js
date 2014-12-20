(function($) {
    "use strict";

    window.tbLivePreview    = {};

    $(function() {
        $('#tb-live-preview').bind('transitionend', function() {
            var $this       = $(this);
            var winHeight   = $(window).height();
            if(parseInt($this.css('top')) + $this.height() >= winHeight) {
                $this.css('top', (winHeight - $this.height()) + 'px');
            } else {
                $this.css('top', Math.min(0.2 * winHeight, winHeight - $this.height()) + 'px');
            }
        });
        $('#tb-live-preview .tb-live-preview-toggle-group > .tb-live-preview-toggle-group-content').bind('refresh', function() {
            var $this       = $(this);
            var $group      = $this.parent('.tb-live-preview-toggle-group');
            $this.height($group.hasClass('tb-live-preview-toggle-group-open') ? $this.find('> .tb-live-preview-toggle-group-content-wrapper').height() : 0);
            $('#tb-live-preview').triggerHandler('refresh');
        });
        $('#tb-live-preview .tb-live-preview-toggle-group:not(.tb-live-preview-toggle-group-force-open) > .tb-live-preview-toggle-group-title').bind('click', function() {
            var $group      = $(this).parent('.tb-live-preview-toggle-group');
            var $content    = $group.find('> .tb-live-preview-toggle-group-content');
            $group.toggleClass('tb-live-preview-toggle-group-open');
            document.cookie = "tb-live-preview-toggle-group-" + $group.index() + "=" + ($group.hasClass('tb-live-preview-toggle-group-open') ? '1' : '0') + "; path=/";
            $content.triggerHandler('refresh');
        });
        $('#tb-live-preview .tb-live-preview-title').bind('click', function(e) {
            $('#tb-live-preview').toggleClass('tb-live-preview-open');
            document.cookie = "tb-live-preview=" + ($('#tb-live-preview').hasClass('tb-live-preview-open') ? '1' : '0') + "; path=/";
            if($('#tb-live-preview').hasClass('tb-live-preview-open')) {
                $('#tb-live-preview .tb-live-preview-toggle-group:not(.tb-live-preview-toggle-group-open, .tb-live-preview-toggle-group-force-open)').each(function() {
                    var $this   = $(this);
                    if(-1 < document.cookie.indexOf("tb-live-preview-toggle-group-" + $this.index() + "=1")) {
                        $('#tb-live-preview').one('transitionend', function() {
                            $this.find('> .tb-live-preview-toggle-group-title').triggerHandler('click');
                        });
                    }
                });
            }
            $('#tb-live-preview').triggerHandler('refresh');
        });
        $('#tb-live-preview .tb-live-preview-control-toggle').bind('click', function() {
            var $this       = $(this);
            var name        = $this.attr('data-tb-live-preview-name');
            $this.toggleClass('tb-live-preview-control-toggle-on');
            if("undefined" !== window.tbLivePreview[name]) {
                window.tbLivePreview[name]($this.hasClass('tb-live-preview-control-toggle-on'));
            }
        });
        $('#tb-live-preview .tb-live-preview-control-color').bind('update', function() {
            var $this       = $(this);
            var name        = $this.attr('data-tb-live-preview-name');
            if("undefined" !== window.tbLivePreview[name]) {
                clearTimeout($this.data('update-timeout'));
                $this.data('update-timeout', setTimeout(function() {
                    window.tbLivePreview[name]($this.css('background-color'));
                }, 50));
            }
        });
        $('#tb-live-preview .tb-live-preview-control-color-custom').bind('change', function(e, noSliderUpdate) {
            var $this       = $(this);
            var value       = $this.val().toLowerCase().replace(/[^#0-9a-f]+/, '');
            var $picker     = $this.parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color-picker');
            var $preview    = $this.parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color');
            if(null === value.match(/^#[0-9a-f]{6}$/)) {
                value       = '#000000';
            }
            $this.val(value);
            $preview.css('background-color', value).triggerHandler('update');
            if(false !== noSliderUpdate) {
                $picker.triggerHandler('update', [0, parseInt(value.substr(1, 2), 16) / 255]);
                $picker.triggerHandler('update', [1, parseInt(value.substr(3, 2), 16) / 255]);
                $picker.triggerHandler('update', [2, parseInt(value.substr(5, 2), 16) / 255]);
            }
        }).bind('focus', function() {
                var $picker = $(this).parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color-picker');
                clearTimeout($picker.data('timeout'));
                $picker.show();
            }).bind('click', function(e) {
                e.stopPropagation();
            });
        $('#tb-live-preview .tb-live-preview-control-color-picker').bind('update', function(e, param, value) {
            var $this       = $(this);
            var $color      = $this.find('.tb-live-preview-control-color-picker-color');
            var $custom     = $this.parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color-custom');
            var current     = $color.css('background-color').replace(/[^0-9,]+/g, '').split(',');
            param           = parseInt(param);
            current[0]      = parseInt(current[0]);
            current[1]      = parseInt(current[1]);
            current[2]      = parseInt(current[2]);
            current[param]  = Math.round(value * 255);
            var hexr        = current[0].toString(16);
            var hexg        = current[1].toString(16);
            var hexb        = current[2].toString(16);
            $color.css({'color': 383 <= current[0] + current[1] + current[2] ? '#000000' : '#ffffff', 'background-color': 'rgb(' + current.join(',') + ')'}).html('rgb(' + current.join(',') + ')');
            $custom.val('#' + (1 == hexr.length ? '0' + hexr : hexr) + (1 == hexg.length ? '0' + hexg : hexg) + (1 == hexb.length ? '0' + hexb : hexb)).triggerHandler('change', [false]);
            $this.parent().find('[data-tb-live-preview-control-color-picker-type="' + param + '"] > span').css('left', current[param] * 154 / 255);
        }).bind('click', function(e) {
                e.stopPropagation();
            });
        $('#tb-live-preview .tb-live-preview-control-color-picker .tb-live-preview-control-color-picker-slider > span').draggable({
            axis:           'x',
            containment:    'parent',
            drag:           function(e, ui) {
                var $parent = ui.helper.parent();
                $parent.parents('.tb-live-preview-control-color-picker').first().triggerHandler('update', [$parent.attr('data-tb-live-preview-control-color-picker-type'), ui.position.left / 154]);
            }
        });
        $('#tb-live-preview .tb-live-preview-control-color-preset').bind('click', function() {
            var $this       = $(this);
            var $custom     = $this.parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color-custom');
            if(0 < $custom.length) {
                $custom.val($this.attr('title')).triggerHandler('change');
            } else {
                $this.parents('.tb-live-preview-toggle-group-content-element').first().find('.tb-live-preview-control-color').css('background-color', $this.attr('title')).triggerHandler('update');
            }
        });
        $('#tb-live-preview .tb-live-preview-control-radio').bind('click', function() {
            var $this       = $(this);
            var $group      = $this.parents('.tb-live-preview-control-radio-group').first();
            var name        = $group.attr('data-tb-live-preview-name');
            var value       = $this.attr('data-tb-live-preview-value');
            $group.find('.tb-live-preview-control-radio.tb-live-preview-control-radio-on').removeClass('tb-live-preview-control-radio-on');
            $this.addClass('tb-live-preview-control-radio-on');
            if("undefined" !== window.tbLivePreview[name]) {
                window.tbLivePreview[name](value);
            }
        });
        $(document).bind('click', function() {
            $('#tb-live-preview .tb-live-preview-control-color-picker:visible').each(function() {
                var $this   = $(this);
                clearTimeout($this.data('timeout'));
                $this.data('timeout', setTimeout(function() {
                    $this.hide();
                }, 350));
            });
        });
        if(-1 < document.cookie.indexOf("tb-live-preview=1")) {
            $(window).load(function() {
                $('#tb-live-preview .tb-live-preview-title').triggerHandler('click');
            });
        }
    });
})(jQuery);