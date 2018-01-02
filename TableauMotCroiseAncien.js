

(function ($) {
    
        var TableauMotCroise;

        TableauMotCroise = function (ligne,	colonne, listeMot) {
            this.ligne = ligne;
            this.colonne = colonne;
            this.tableau  = new Array(ligne,colonne);
            this.listeMot = listeMot;
            this.tableMotCroise = document.createElement('table');
            this.tableMotCroise.id = "tableMotCroise";

            this.initialiserTableau();
           
            this.imprimerTableau();
            this.creerTableauMotCroise();
            this.ajouterListeMot(listeMot);
           
        }

        TableauMotCroise.prototype.initialiserTableau = function () {       
            for (var i = 0;i < this.ligne; i++) {
                this.tableau[i] = [];
                for (var j = 0; j < this.colonne; j++) {
                    this.tableau[i][j] = '.';
                    console.log(this.tableau[i][j] + " ");
                }
                console.log();
            }
            console.log();
        }
    
    

        TableauMotCroise.prototype.ajouterListeMot = function (listeMot){
                    for (var i = 0; i < listeMot.length; i++) {
                        //this.ajouterMot(listeMot[i]);
// this.funcionando();

                       this.ajouterMotAuTableau(listeMot[i]);

                        console.log("Dans le ajouterListeMot: " + listeMot[i].mot);

                    }
                }

    
        TableauMotCroise.prototype.ajouterMot = function (leMot){
    
            var k = 0;
    
            for (var i = 0; i < this.tableau.length; i++) {
                if (i == leMot.coordoneesX){
                    for (var j = 0; j < this.tableau[i].length; j++) {
                        if (j == leMot.coordoneesY){
                            for ( k = 0; k < leMot.mot.length; k++) {
                                
                                if(this.verifierLettreVisible(leMot, k)){
                                    this.tableau[i][j] = leMot.caracteres[k];
                                    this.ajouterClasse();
                                    console.log("Dans le mot " + leMot.mot + " le index n " + k + " doit etre visible");
                                }
                                else{
                                    this.tableau[i][j] = leMot.caracteres[k];
                                }
                                
                                if (leMot.estVertical)
                                    i++;
                                else
                                    j++;
                            }
                        }
                    }
                }
            }
        }
    
    
    
        TableauMotCroise.prototype.verifierLettreVisible = function (leMot, indice){
          
    
            if(leMot.indexLettresVisbiles == null || leMot.indexLettresVisbiles.length == 0)
                return false;
    
            for ( var i = 0; i < leMot.indexLettresVisbiles.length; i++) {
                if(leMot.indexLettresVisbiles[i] == indice)
                    return true;	 
            }
            return false;
        }
        
        
        TableauMotCroise.prototype.ajouterClasse = function() {
            
        }
    
    
        TableauMotCroise.prototype.imprimerTableau = function(){
    
            for (var i = 0;i < this.tableau.length; i++) {
                for (var j = 0; j < this.tableau[i].length;j++) {
    
                    console.log(this.tableau[i][j] + " ");
                }
                console.log();
            }
            console.log();
        }



        TableauMotCroise.prototype.creerTableauMotCroise = function(){

           
            var newMotX = document.createTextNode('X');
            
            for (var i = 0; i < this.ligne; i++) {
                var newTr = document.createElement('tr');
                                
                            for (var j = 0; j < this.colonne; j++) {
                                // var newTd = document.createElement('td');
                                // newTd.classList.add("motCroisenoborder");
                                // newMotX = document.createTextNode('');
                                // newTd.appendChild(newMotX);
                                // newTr.appendChild(newTd);


                                var newTd = document.createElement('td');
                                // newTd.classList.add("motCroisenoborder");//Enlever pour effacer le
                                // newInput = document.createElement('input');
                                // newInput.classList.add("motCroisenoborder");
                                // newInput.setAttribute('maxlength', '1');
                
                
                                // newMotX = document.createTextNode('');
                                // newInput.appendChild(newMotX);
                              //  newTd.appendChild(newInput);
                                newTr.appendChild(newTd);

                                
                            }
                            this.tableMotCroise.appendChild(newTr);
            
                        }
                  
           document.getElementById('divMotCroise').appendChild(this.tableMotCroise);

          // this.ajouterMotAuTableau();
        }


        TableauMotCroise.prototype.ajouterMotAuTableau = function (leMot){
            var arrayTr = this.tableMotCroise.getElementsByTagName("tr");
           


         //   var arrayTd = arrayTr[0].getElementsByTagName("td");
           var arrayTd = [];

            // var newMotX = document.createTextNode('A');
            // arrayTd[2].appendChild(newMotX);
            // arrayTd[3].innerHTML = "D";
            // arrayTd[4].innerHTML = "R";
            // arrayTd[5].innerHTML = "I";
            // arrayTd[6].innerHTML = "A";
            // arrayTd[7].innerHTML = "N";
            // arrayTd[8].innerHTML = "A";

            console.log("DEBUT - Dans ajouterMotAuTableau");


                    var k = 0;
            
                    for (var i = 0; i < arrayTr.length; i++) {
                       arrayTd = arrayTr[i].getElementsByTagName("td");

                       
                        
                        if (i == leMot.coordoneesX){

                            // arrayTd[i].innerHTML = "A";
                            
                            // arrayTd[3].innerHTML = "D";
                            // arrayTd[4].innerHTML = "R";
                            // arrayTd[5].innerHTML = "I";
                            // arrayTd[6].innerHTML = "A";
                            // arrayTd[7].innerHTML = "N";
                            // arrayTd[8].innerHTML = "A";

                            for (var j = 0; j < arrayTd.length; j++) {

                                
                                if (j == leMot.coordoneesY){
                                   
                                    for ( k = 0; k < leMot.mot.length; k++) {
                                        console.log("Dans ajouterMotAuTableau - LE MOT: " + leMot.mot);

                                     
                                      
                                       arrayTd[j].classList.remove("motCroisenoborder");
                                       arrayTd[j].classList.add("motCroise");

                                        
                                        if(this.verifierLettreVisible(leMot, k)){

                                           arrayTd[j].innerHTML = leMot.caracteres[k];


                                            console.log("Dans le mot " + leMot.mot + " le index n " + k + " doit etre visible");
                                        }
                                                                              
                                        if (leMot.estVertical){
                                            i++;
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










                TableauMotCroise.prototype.funcionando = function (){
                    var arrayTr = this.tableMotCroise.getElementsByTagName("tr");

                    console.log("arrayTr: " + arrayTr.length );

                    var arrayTd = arrayTr[0].getElementsByTagName("td");
        
                    var newMotX = document.createTextNode('A');
                    arrayTd[2].appendChild(newMotX);
                    arrayTd[3].innerHTML = "D";
                    arrayTd[4].innerHTML = "R";
                    arrayTd[5].innerHTML = "I";
                    arrayTd[6].innerHTML = "A";
                    arrayTd[7].innerHTML = "N";
                    arrayTd[8].innerHTML = "A";
        
                   
        
                    var arrayTd1 = this.tableMotCroise.getElementsByTagName("td");
                    console.log("arrayTr: " + arrayTr + " - arrayTd: " + arrayTd);
                    console.log("arrayTr: " + arrayTr.length + " - arrayTd: " + arrayTd.length);
        
                                }













                                TableauMotCroise.prototype.ajouterListeNumero = function (listeMot) {
                                    var listeNumero = new NumeroMotCroise[];
                                    for (var i = 0; i < listeMot.length; i++) {
                                        listeNumero[i].numero = listeMot[i].numero;
                                        listeNumero[i].estVertical = listeMot[i].estVertical;
                                
                                        if (listeMot[i].estVertical){
                                            listeNumero[i].coordoneesX = listeMot[i].coordoneesX - 1;
                                            listeNumero[i].coordoneesY = listeMot[i].coordoneesY;
                                        }
                                        else{
                                            listeNumero[i].coordoneesX = listeMot[i].coordoneesX;
                                            listeNumero[i].coordoneesY = listeMot[i].coordoneesY - 1;
                                        }
                                    }
                                
                                
                                        for (var i = 0; i < listeNumero.length; i++) {
                                            this.ajouterNumeroAuTableau(listeNumero[i]);
                                        }
                                    }
                                
                                
                                    TableauMotCroise.prototype.ajouterNumeroAuTableau = function (leNumero) {
                                        var arrayTr = this.tableMotCroise.getElementsByTagName("tr");
                                        var arrayTd = [];
                                        arrayTd = arrayTr[leNumero.coordoneesX].getElementsByTagName("td");
                                
                                        newSpan = document.createElement('p');
                                        newSpan.classList.add("mini-badge");
                                
                                
                                        console.log("O que esta acontecendo? " + leNumero.estVertical)
                                
                                        if(leNumero.estVertical)
                                        newSpan.classList.add("bVertical");
                                        else
                                        newSpan.classList.add("bHorizontal");
                                        
                                        newSpan.innerHTML = leNumero.numero;
                                        arrayTd[leNumero.coordoneesY].appendChild(newSpan);
                                
                                
                                
                                
                                
                                
                                        // arrayTd[leNumero.coordoneesY].innerHTML = leNumero.numero;
                                        // arrayTd[leNumero.coordoneesY].classList.add("mini-badge");
                                
                                
                                        
                                    }








        



    
        window.TableauMotCroise = TableauMotCroise;
    
    })(jQuery);
    