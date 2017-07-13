Share = {
    
    popupTwiter: "",
    timerTwiter: "",
    popupFacebook: "",
    timerFacebook: "",
    textTwitter: "",
    facebook: {
        share: function() {
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//"
                        + window.location.hostname
                        + (window.location.port ? ':' + window.location.port : '');
            }
            var url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.origin + '/promo-static/' + game.NAME_PROMO + '/facebook_es.html?v=1';
            if (game.LANGUAGE === 'cat')
            {
                url = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.origin + '/promo-static/' + game.NAME_PROMO + '/facebook_cat.html?v=1';
            }
            var height = 250;
            var width = 550;
            var top = 0;
            var left = 0;
            document.getElementById('share_facebook').click();
            Share.popupFacebook = window.open(url, '', 'left=200,top='+top+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            Share.timerFacebook = setInterval(Share.closeFacebook, 500);
        }
    },
    
    closeFacebook: function() {
        if (Share.popupFacebook.closed)
        {   boot.print("Shared perfectly in Facebook");
            /*switch (gameVars.numCurrentLevel)
            {
                case 1:
                    boot.print("Shared perfectly in Facebook in level1");
                    document.getElementById('share_facebook_l1').click();
                    break;
                case 2:
                    boot.print("Shared perfectly in Facebook in level2");
                    document.getElementById('share_facebook_l2').click();
                    break;
                case 3:
                    boot.print("Shared perfectly in Facebook in level3");
                    document.getElementById('share_facebook_l3').click();
                    break;
            }*/
            clearInterval(Share.timerFacebook);
        }
    },

    twitter: {
        share: function() {
            if (!window.location.origin) {
                window.location.origin = window.location.protocol + "//"
                        + window.location.hostname
                        + (window.location.port ? ':' + window.location.port : '');
            }
            //12/07/2016
            //Recuerda anadir en el html el ?99 al final del .jpg para que recargue la imagen. No hace falta ponerlo en el validor.
            var url = 'http://twitter.com/intent/tweet?url=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/twitter_es.html'; //<--- Si no se corresponde con el real, no sale la imagen en el twit. Llama al que esta guardado en Twitter.
            if (game.LANGUAGE === 'cat')
            {
                url = 'http://twitter.com/intent/tweet?url=' + window.location.origin + '/public/promo-static/' + game.NAME_PROMO + '/twitter_cat.html';
            }
            var text = Share.textTwitter; //<--- Sale en el twit.
            var height = 250;
            var width = 550;
            var top = 0;
            var left = 0;
            document.getElementById('share_twitter').click();
            Share.popupTwiter = window.open(url+'&text='+encodeURIComponent(text), '', 'left=200,top='+top+',width='+width+',height='+height+',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            Share.timerTwiter = setInterval(Share.closeTwiter, 500);
        }
    },
    
    closeTwiter: function() {
        if (Share.popupTwiter.closed)
        {
            boot.print("Shared perfectly in Twitter");
            /*switch (gameVars.numCurrentLevel)
            {
                case 1:
                    boot.print("Shared perfectly in Twitter in level1");
                    document.getElementById('share_twitter_l1').click();
                    break;
                case 2:
                    boot.print("Shared perfectly in Twitter in level2");
                    document.getElementById('share_twitter_l2').click();
                    break;
                case 3:
                    boot.print"Shared perfectly in Twitter in level3");
                    document.getElementById('share_twitter_l3').click();
                    break;
            }*/
            clearInterval(Share.timerTwiter);
        }
    }
};
