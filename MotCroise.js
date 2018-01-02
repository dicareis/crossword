/**
 * MotCroise.js
 * @author Adriana Reis <dicareis@gmail.com>
 */

/**
 * Cette classe défine un MotCroise avec ses attributes.
 * La classe a comme parametres le nom du ID du div, l'arrayliste de MotCroise et un boolean pour informer
 * savoir si c'est le div de la réponse de la question ou pas. 
 */
(function ($) {
    
        var MotCroise;
    
        /**
        * @constructor
        * @param {String, String, Arraylist <int>, int, int, boolean}
        * numero : le numero qui doit apparaître avant le mot (exemple 1, 2, 3 ou i, ii, iii)
        * mot : le string du motCroise
        * indexLettresVisbiles : list avec les index des lettres qui doivent être visibles dans le motCroisé
        * coordoneesX, coordoneesY : ligne et colonne de la première lettre du mot (ou le mot commence)
        * estVertical : boolean pour savoir si le mot est vertical ou horizontal
        */
        MotCroise = function (numero, mot, indexLettresVisbiles, coordoneesX, coordoneesY, estVertical) {
            this.numero = numero;
            this.mot = mot;
            this.indexLettresVisbiles = indexLettresVisbiles;
            this.coordoneesX = coordoneesX;
            this.coordoneesY = coordoneesY;
            this.estVertical = estVertical;
            this.caracteres = [];
            this.convertirMotEnLettres(mot);
        }
    
        /**
         * @method convertirMotEnLettres : converte le string du mot dans une liste de caracteres
         * @param {MotCroise}
         * @returns {void}
         */
        MotCroise.prototype.convertirMotEnLettres = function (mot) {
    
            for (var i = 0; i < this.mot.length; i++) {
                this.caracteres[i] = this.mot.charAt(i);
            }
        }
    
        window.MotCroise = MotCroise;
    
    })(jQuery);
    