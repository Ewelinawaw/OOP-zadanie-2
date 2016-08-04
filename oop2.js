/**
 * Created by Ewelina on 12.07.2016.
 */

//użycie self poprzez stworzenie funkcji konstruującej Button, która będzie tworzyła nowe przyciski

$(function() {

    function Button(text) { //krok 1 - uzupełnienie konstruktora o parametr text, za pomocą którego ustawimy początkową wartość dla text w nowych obiektach.
        this.text = text || "Hello"; //krok 2 - Dodajmy możliwość tworzenia obiektu bez podania argumentu. Domyślną wartością właściwości text naszych przycisków będzie ‘Hello’.


        Button.prototype = { //krok 3 - metoda obsługująca tworzenie przycisku na stronie - dodajmy jako prototyp.
            create: function () { //krok 4 - metoda create tworząca przycisk na stronie
                var self = this; //krok 8 - za pomocą zmiennej self określić ten kontekst
                this.$element = $("<button>"); //krok 5 - Konstrukcja this.$element ma za zadanie trzymać w właściwości element przycisk (element DOM), który stworzyliśmy za pomocą jQuery.
                this.$element.text(this.text); //krok 6 - ustawiamy tekst na przycisku za pomocą metody text
                this.$element.click(function () { //krok 7 - napisanie metody, która po kliknięciu w przycisk wyświetli tekst na ekranie komputera
                    alert(self.text);

                    this.$element.appendTo($("body"));//krok 9 - Na koniec należy umieścić element w drzewie DOM!

                    var btn1 = new Button("Hello!");//krok 10 - tworzenia pierwszej instancji
                });
                btn1.create();//krok 11 - wywołajmy metodę create w celu stworzenia elementu
            }
        }
    }
});


/*
$(function() {

    function Button(text) { //krok 1 - uzupełnienie konstruktora o parametr text, za pomocą którego ustawimy początkową wartość dla text w nowych obiektach.
        this.text = text || "Hello"; //krok 2 - Dodajmy możliwość tworzenia obiektu bez podania argumentu. Domyślną wartością właściwości text naszych przycisków będzie ‘Hello’.


        Button.prototype = { //krok 3 - metoda obsługująca tworzenie przycisku na stronie - dodajmy jako prototyp.
            create: function () { //krok 4 - metoda create tworząca przycisk na stronie
                var self = this; //krok 8 - za pomocą zmiennej self określić ten kontekst
                this.$element = $("<button>"); //krok 5 - Konstrukcja this.$element ma za zadanie trzymać w właściwości element przycisk (element DOM), który stworzyliśmy za pomocą jQuery.
                this.$element.text(this.text); //krok 6 - ustawiamy tekst na przycisku za pomocą metody text
                this.$element.click(function () { //krok 7 - napisanie metody, która po kliknięciu w przycisk wyświetli tekst na ekranie komputera
                    alert(self.text);

                    this.$element.appendTo($("body"));//krok 9 - Na koniec należy umieścić element w drzewie DOM!
                });
                var btn1 = new Button("Hello!");//krok 10 - tworzenia pierwszej instancji
                btn1.create();//krok 11 - wywołajmy metodę create w celu stworzenia elementu
            }
        }
    }
});
*/










