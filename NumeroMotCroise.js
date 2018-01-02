/**
 * NumeroMotCroise.js
 * @author Adriana Reis <dicareis@gmail.com>
 */

/**
 * Cette classe contient les donnés pour ajouter un numero avant chaque mot du MotCroise. 
 */
(function ($) {
    
        var NumeroMotCroise;
    
        /**
        * @constructor
        * @param {String, int, int, boolean}
        */
        NumeroMotCroise = function (numero, coordoneesX, coordoneesY, estVertical) {
            this.numero = numero;
            this.coordoneesX = coordoneesX;
            this.coordoneesY = coordoneesY;
            this.estVertical = estVertical;
        }
    
        window.NumeroMotCroise = NumeroMotCroise;
    
    })(jQuery);
    