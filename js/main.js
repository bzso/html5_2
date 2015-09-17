// Módosítjuk a H1 elem tartalmát.
document.querySelector( "h1" ).innerHTML = "Hello ITFactory";

// Kép forrásának módosítása.
function changeUrl() {
    document.querySelector( "img" ).src = "http://hangvar.hu/wp-content/uploads/2013/11/holdacska.png";    
}

// Stílus módosítása.
function changeStyle() {
    document.querySelector( "img" ).style.width = "40px";
}

// Adatok ellenőrzése.
function validate() {
    
    // Az input mező és a hibaüzenet kiválasztása.
    var input = document.querySelector( ".input-validate" );
    var errorP = document.querySelector( ".no-validate" );
    
    // Az input mező értékének a kiolvasása.
    var inputValue = input.value;
    
    // Az input mező értéke nagyobb legyen mint 5 és kisebb mint 21.
    if ( inputValue < 6 || inputValue > 20 ) {
        console.log( "az érték nem megfelelő" );
        errorP.innerHTML = "az érték nem megfelelő";
    } else {
        errorP.innerHTML = "";        
    }
    
    
}
