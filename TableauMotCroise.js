/**
 * TableauMotCroise.js
 * @author Adriana Reis <dicareis@gmail.com>
 */

/**
 * Cette classe crée le tableau de MotCroise (question et réponse) et l'ajoute au html.
 * La classe a comme parametres le nom du ID du div, l'arrayliste de MotCroise et un boolean pour informer
 * savoir si c'est le div de la réponse de la question ou pas. 
 */

(function ($) {
    
        var TableauMotCroise;
    
        /**
         * @constructor
         * @param {String, Arraylist<MotCroise>, boolean}
         */
        TableauMotCroise = function (nomDiv, listeMot, divReponseTableau) {
            this.ligne = 0;
            this.colonne = 0;
            this.listeMot = listeMot;
            this.nomDiv = nomDiv;
            this.divReponseTableau = divReponseTableau;
            this.listeNumero = this.getNumero(listeMot);
            this.tableMotCroise = document.createElement('table');
            this.tableMotCroise.id = "tableMotCroise_" + this.nomDiv;
    
            this.verifierTailleTableauMotCroise();
            this.creerTableauMotCroise();
            this.ajouterListeMot(this.listeMot);
            this.ajouterListeNumero(this.listeNumero);
    
            if (this.divReponseTableau) {
                this.listeReponseTableau(this.listeMot);
            }
        }
    
        /**
        * @method verifierTailleTableauMotCroise : verifie la quantidade de lignes et colonnes nécessaires pour créer le tableau
        * @return {void} 
        */
        TableauMotCroise.prototype.verifierTailleTableauMotCroise = function () {
            var colonneTemp = 0;
            var ligneTemp = 0;
    
            for (var i = 0; i < this.listeMot.length; i++) {
                if (this.listeMot[i].estVertical) {
                    colonneTemp = this.listeMot[i].coordoneesY;
                    ligneTemp = this.listeMot[i].coordoneesX + this.listeMot[i].mot.length;
                }
                else {
                    ligneTemp = this.listeMot[i].coordoneesX;
                    colonneTemp = this.listeMot[i].coordoneesY + this.listeMot[i].mot.length;
                }
    
                if (colonneTemp > this.colonne) {
                    this.colonne = colonneTemp;
                }
                if (ligneTemp > this.ligne) {
                    this.ligne = ligneTemp;
                }
            }
        }
    
        /**
         * @method creerTableauMotCroise : crée le tableau des mots croises vide, en ajoutant les balises de <table>, <tr> et <td>
         * @return {void} 
         */
        TableauMotCroise.prototype.creerTableauMotCroise = function () {
    
            for (var i = 0; i < this.ligne; i++) {
                var newTr = document.createElement('tr');
    
                for (var j = 0; j < this.colonne; j++) {
                    var newTd = document.createElement('td');
                    newTd.classList.add("motCroisenoborder");
                    newTr.appendChild(newTd);
                }
                this.tableMotCroise.appendChild(newTr);
                this.tableMotCroise.style.margin = "auto";
            }
            document.getElementById(this.nomDiv).appendChild(this.tableMotCroise);
        }
    
        /**
         * @method ajouterListeMot : fais parcourir la liste de mot pour les ajoutés au tableau
         * @return {void} 
         */
        TableauMotCroise.prototype.ajouterListeMot = function (listeMot) {
            for (var i = 0; i < listeMot.length; i++) {
                this.ajouterMotAuTableau(listeMot[i]);
            }
        }
    
        /**
         * @method ajouterMotAuTableau : ajoute le mot ao tableau. Ici la fontion va ajouter les bordes du mot et les lettres visibles.
         * @return {void} 
         */
        TableauMotCroise.prototype.ajouterMotAuTableau = function (leMot) {
            var arrayTr = this.tableMotCroise.getElementsByTagName("tr");
            var arrayTd = [];
    
            for (var i = 0; i < arrayTr.length; i++) {
                arrayTd = arrayTr[i].getElementsByTagName("td");
                if (i == leMot.coordoneesX) {
                    for (var j = 0; j < arrayTd.length; j++) {
                        if (j == leMot.coordoneesY) {
                            for (k = 0; k < leMot.mot.length; k++) {
                                arrayTd[j].classList.remove("motCroisenoborder");
                                arrayTd[j].classList.add("motCroise");
    
                                if (this.verifierLettreVisible(leMot, k)) {
                                    arrayTd[j].innerHTML = leMot.caracteres[k];
                                }
                                else {
                                    if (arrayTd[j].getElementsByTagName('input').length == 0) {
                                        if (arrayTd[j].innerHTML.length == 0) {
                                            newInput = document.createElement('input');
                                            newInput.setAttribute('maxlength', '1');
                                            newInput.classList.add("inputCroisenoborder");
                                            arrayTd[j].appendChild(newInput);
                                        }
                                    }
                                }
    
                                if (leMot.estVertical) {
                                    i++;
    
                                    if (i < arrayTr.length)
                                        arrayTd = arrayTr[i].getElementsByTagName("td");
                                }
                                else
                                    j++;
                            }
                        }
                    }
                }
            }
        }
    
        /**
         * @method verifierLettreVisible : verifie le index de la lettre pour savoir si elle doit être visible ou pas.
         * @param {MotCroise, int} :
         * @return {boolean} 
         */
        TableauMotCroise.prototype.verifierLettreVisible = function (leMot, indice) {
            if (leMot.indexLettresVisbiles == null || leMot.indexLettresVisbiles.length == 0)
                return false;
    
            for (var i = 0; i < leMot.indexLettresVisbiles.length; i++) {
                if (leMot.indexLettresVisbiles[i] == indice)
                    return true;
            }
            return false;
        }
    
        /**
         * @method ajouterListeNumero : fais parcourir la liste de numeros pour les ajoutés au tableau
         * @param {Arraylist <int>}
         * @return {void} 
         */
        TableauMotCroise.prototype.ajouterListeNumero = function (listeNumero) {
            for (var i = 0; i < listeNumero.length; i++) {
                this.ajouterNumeroAuTableau(listeNumero[i]);
            }
        }
    
        /**
         * @method ajouterNumeroAuTableau :  ajoute le numero ao tableau.
         * @param {int}
         * @return {void} 
         */
        TableauMotCroise.prototype.ajouterNumeroAuTableau = function (leNumero) {
            var arrayTr = this.tableMotCroise.getElementsByTagName("tr");
            var arrayTd = [];
            arrayTd = arrayTr[leNumero.coordoneesX].getElementsByTagName("td");
    
            newSpan = document.createElement('p');
            newSpan.classList.add("mini-badge");
    
            newSpan.innerHTML = leNumero.numero;
            arrayTd[leNumero.coordoneesY].appendChild(newSpan);
    
        }
    
        /**
         * @method getNumero : récupère la liste de numeros a partir de la liste de mot;
         * @param {Arraylist <MotCroise>}
         * @return {Arraylist <int>} 
         */
        TableauMotCroise.prototype.getNumero = function (listeMot) {
            var listeNumero = [];
    
            for (var i = 0; i < listeMot.length; i++) {
                var leNumero = new NumeroMotCroise;
                leNumero.numero = listeMot[i].numero;
                leNumero.estVertical = listeMot[i].estVertical;
    
                if (listeMot[i].estVertical) {
                    leNumero.coordoneesX = listeMot[i].coordoneesX - 1;
                    leNumero.coordoneesY = listeMot[i].coordoneesY;
                }
                else {
                    leNumero.coordoneesX = listeMot[i].coordoneesX;
                    leNumero.coordoneesY = listeMot[i].coordoneesY - 1;
                }
                listeNumero.push(leNumero);
            }
            return listeNumero;
        }
    
        /**
         * @method listeReponseTableau :  fais parcourir la liste de mot pour les ajoutés au tableau.
         * @param {Arraylist <MotCroise>}
         * @return {void} 
         */
        TableauMotCroise.prototype.listeReponseTableau = function (listeMot) {
            for (var i = 0; i < listeMot.length; i++) {
                this.reponseTableau(listeMot[i]);
            }
        }
    
        /**
         * @method reponseTableau :  ajoute les mots ao complet ao tableau, pour montrer dans la réponse.
         * @param {MotCroise}
         * @return {void} 
         */
        TableauMotCroise.prototype.reponseTableau = function (leMot) {
            var arrayTr = this.tableMotCroise.getElementsByTagName("tr");
            var arrayTd = [];
    
            for (var i = 0; i < arrayTr.length; i++) {
                arrayTd = arrayTr[i].getElementsByTagName("td");
    
                if (i == leMot.coordoneesX) {
                    for (var j = 0; j < arrayTd.length; j++) {
    
                        if (j == leMot.coordoneesY) {
    
                            for (k = 0; k < leMot.mot.length; k++) {
                                arrayTd[j].classList.remove("motCroisenoborder");
                                arrayTd[j].classList.add("motCroise");
                                arrayTd[j].classList.add("global-colored-text-red");
    
                                arrayTd[j].removeChild;
                                arrayTd[j].innerHTML = leMot.caracteres[k];
    
                                if (leMot.estVertical) {
                                    i++;
    
                                    if (i < arrayTr.length)
                                        arrayTd = arrayTr[i].getElementsByTagName("td");
                                }
                                else
                                    j++;
                            }
                        }
                    }
                }
            }
        }
    
        window.TableauMotCroise = TableauMotCroise;
    })(jQuery);
    