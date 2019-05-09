var utils = {
    path: '',
    OSName: function() {
        var av = navigator.appVersion;
        return av.indexOf('Win') != -1 ? 'Windows' : av.indexOf('Mac') != -1 ? 'MacOS' : av.indexOf('X11') != -1 ? 'UNIX' : av.indexOf('Linux') != -1 ? 'Linux' : 'Unknown';
    },
    MobileDevice: function() {
        var ua = navigator.userAgent;
        return ua.match(/Android/i) ? 'Android' : ua.match(/BlackBerry/i) ? 'BlackBerry' : ua.match(/iPhone|iPad|iPod/i) ? 'iPhone' : ua.match(/Opera Mini/i) ? 'Opera' : ua.match(/IEMobile/i) ? 'IEMobile' : 'Any';
    },
    BrowserName: function() {
        var ua = navigator.userAgent;
        return ua.indexOf("Opera") != -1 ? 'Opera' : ua.indexOf("MSIE") != -1 ? 'InternetExplorer' : ua.indexOf("Chrome") != -1 ? 'Chrome' : ua.indexOf("UCBrowser") != -1 ? 'UCBrowser' : ua.indexOf("UC Browser") != -1 ? 'UC Browser' : ua.indexOf("Safari") != -1 ? 'Safari' : ua.indexOf("Firefox") != -1 ? 'Firefox' : 'Any';
    },
    DetectMobile: function() {
        var ua = navigator.userAgent;
        if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }
}
var daeg = {
    flying_carpet_show: function(e) {
        var isAndroid = utils.MobileDevice() == 'Android';
        var isFF = utils.BrowserName() == 'Firefox';
        var isUC = utils.BrowserName() == 'UCBrowser';
        var isUC2 = utils.BrowserName() == 'UC Browser';
        var isIE = utils.BrowserName() == 'InternetExplorer';
        var isOT = utils.BrowserName() == 'Any';
        if (isAndroid && (isFF || isUC || isUC2 || isIE || isOT)) {
            $('.flying_carpet_show_inner').hide();
            $('.flying_carpet_show_edition').show();
            //console.log($('.' + e).attr('mo'), +', Rectangle Mode');
            utils._ga($('.' + e).attr('mo'), 'Rectangle Mode', true);
        } else {
            $('.flying_carpet_show_inner').show();
            $('.flying_carpet_show_edition').hide();
            //console.log($('.' + e).attr('mo') + ', flying yes');
            utils._ga($('.' + e).attr('mo'), 'flying yes', true);
        }
        //console.log(navigator.userAgent);
    },
    flying_carpet_showB: function(e) {
        var isAndroid = utils.MobileDevice() == 'Android';
        var isFF = utils.BrowserName() == 'Firefox';
        var isUC = utils.BrowserName() == 'UCBrowser';
        var isUC2 = utils.BrowserName() == 'UC Browser';
        var isIE = utils.BrowserName() == 'InternetExplorer';
        var isOT = utils.BrowserName() == 'Any';
        if (isAndroid && (isFF || isUC || isUC2 || isIE || isOT)) {
            $('.flying_carpet_show_inner').hide();
            $('.flying_carpet_show_edition').show();
            //console.log($('.' + e).attr('mo'), +', Rectangle Mode');
            utils._ga($('.' + e).attr('mo'), 'Rectangle Mode', true);
        } else {
            $('.flying_carpet_show_inner').show();
            $('.flying_carpet_show_edition').hide();
            //console.log($('.' + e).attr('mo') + ', flying yes');
            utils._ga($('.' + e).attr('mo'), 'flying yes', true);
        }
    },
    init: function(e) {
        var d, o, c;
        $('.' + e).each(function() {
            d = $(this).attr('class').split(' ');
            o = d[1];
            c = d[2] == undefined ? d[1] : d[2];
            if (daeg.hasOwnProperty(o)) new daeg[o](c);
            //console.log(o + ', ' + c);
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    new daeg.init('kompascom_flying');
});