
 function hausaPhrase() {
 let words1 = ["Zan", "Zamu", "Zasu", "Sojoji za su", "Yan makaranta zasu", "Mafarauce zaya"];
 let words2 = ["siya", "sayar", "shuka", "jiraka", "jira ki", "rubuta"];
 let words3 = ["a rafi", "a kasuwa", "a chochi", "a lambu", "a jeji", "a makaranta"];
 let rand1 = Math.floor(Math.random() * words1.length);
 let rand2 = Math.floor(Math.random() * words2.length);
 let rand3 = Math.floor(Math.random() * words3.length);
 let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
 document.getElementById("phrase").innerHTML = phrase;
 

 let meaning1 = ["I will", "We will", "They will", "Soldiers will", "Students will", "The hunter will"];
 let meaning2 = ["buy", "sell", "plant", "wait for you(m)", "wait for you(f)", "write"];
 let meaning3 = ["in the river", "in the market", "in the church", "in the garden", "in the forest", "in the school"];
 let enWord1 = "";
 let enWord2 = "";
 let enWord3 = "";

  
 switch(words1[rand1]) {
     case words1[0]: enWord1 = meaning1[0]
     break;
     case words1[1]: enWord1 = meaning1[1]
     break;
     case words1[2]: enWord1 = meaning1[2]
     break;
     case words1[3]: enWord1 = meaning1[3]
     break;
     case words1[4]: enWord1 = meaning1[4]
     break;
     case words1[5]: enWord1 = meaning1[5]
 };

 switch(words2[rand2]) {
    case words2[0]: enWord2 = meaning2[0]
    break;
    case words2[1]: enWord2 = meaning2[1]
    break;
    case words2[2]: enWord2 = meaning2[2]
    break;
    case words2[3]: enWord2 = meaning2[3]
    break;
    case words2[4]: enWord2 = meaning2[4]
    break;
    case words2[5]: enWord2 = meaning2[5]
 };

 switch(words3[rand3]) {
    case words3[0]: enWord3 = meaning3[0]
    break;
    case words3[1]: enWord3 = meaning3[1]
    break;
    case words3[2]: enWord3 = meaning3[2]
    break;
    case words3[3]: enWord3 = meaning3[3]
    break;
    case words3[4]: enWord3 = meaning3[4]
    break;
    case words3[5]: enWord3 = meaning3[5]
 };
 
 let englishTrans = enWord1 +" " + enWord2 + " "+ enWord3;
 document.getElementById("english").innerHTML = englishTrans;
};

let refresh = document.getElementById("refresh");
 refresh.addEventListener("click", hausaPhrase); 
