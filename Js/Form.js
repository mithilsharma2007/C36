class Form{
    constructor(){
    
    }
    display(){
        var title=createElement('h1');
        title.html("CAR RACING GAME");
        title.position(130,0);
        var input=createInput("Name");
        var Button=createButton("PLAY");
        //var Greeting=createElement('h2');
        Greeting.html("hello")
        input.position(130,160);
        Button.position(250,200);
    }
}