/*

// EMOTEPALETTI: 🪙🎲💰🎯☢️🍄🧪🎤🧑🏻‍🦲⏱️🎁⌛💡

    <p>🪙🪙🪙</p><!--Kolikonheitto-->
    <p>🎲🎲🎲</p><!--Uusi pyöräytys-->
    <p>💰💰💰</p><!--+100 luuserilanttia-->
    <p>🎯🎯🎯</p><!--Ruletti-->
    <p>☢️☢️☢️</p><!--Tuplarangaistus-->
    <p>🍄🍄🍄</p><!--10min jäähy donaajalle-->
    <p>🧪🧪🧪</p><!--10min jäähy katsojalle-->
    
    <p>🎤🎤🎤</p><!--Voice Changer 15min-->
    <p>🧑🏻‍🦲🧑🏻‍🦲🧑🏻‍🦲</p><!--30min peruukki pois-->
    <p>⏱️⏱️⏱️</p><!--Striimi pitenee 1h-->
    <p>🎁🎁🎁</p><!--Merch Giveaway-->
    <p>⌛⌛⌛</p><!--12h stream-->
    <p style="margin-bottom: 20px">💡💡💡</p><!--Lamps 4 makeup-->

*/

// OLETUSSYMBOLIT, PITÄÄ OLLA 16 SYMBOLIA PER SKENAARIO

  let slotSymbols = [
    ["❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌",],
    ["❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌",],
    ["❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌","❌",],
  ];

  var eivoittoa = "Ei voittoa";
  var striimikaksitoista = "12h stream";
  var lampsformakeup = "Lamps4makeup";
  var merchgiveaway = "Merch Giveaway";
  var striimi1h = "Striimi pitenee 1h";
  var peruukki = "Peruukki pois 30min";
  var voice = "Voice changer 15min";

// RANDOMSKENAARIO

function randomskenaario() {
  var ranNum = Math.random();
  ranNum = ranNum * 70;
  ranNum = Math.ceil(ranNum); //MIN number
  document.getElementById("numero").innerHTML=ranNum;

//EI VOITTOA 1-35
// EMOTEPALETTI: 🪙🎲💰🎯☢️🍄🧪🎤🧑🏻‍🦲⏱️🎁⌛💡
  if (ranNum ==1) {
    slotSymbols = [
      ["🎤","💡","⌛","⏱️","🪙","🎲","🎤","☢️","🪙","🎲","🎤","⌛","🪙","🍄","🧑🏻‍🦲","🎲",],
      ["💰","☢️","🧪","💡","🎯","⌛","🧪","🎯","⏱️","☢️","🎁","💡","💰","⌛","🧪","💡",],
      ["🍄","⏱️","☢️","🧪","🍄","🎁","🍄","💡","🍄","⌛","🍄","🎯","🧑🏻‍🦲","☢️","💡","🎯",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==2) {
    slotSymbols = [
      ["🪙","🍄","🍄","💡","🎯","⌛","🧪","🎯","⏱️","☢️","💡","🪙","🍄","⌛","🧪","🪙",],
      ["🍄","⏱️","🪙","🍄","🍄","🎯","🍄","💡","🍄","⌛","🍄","🎯","🧑🏻‍🦲","🍄","💡","🍄",],
      ["🎤","💡","⌛","⏱️","🪙","🎯","🎤","☢️","🪙","🪙","🎤","⌛","🪙","🍄","💡","🎲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==3) {
    slotSymbols = [
      ["🪙","🍄","🍄","💡","🎯","⌛","🎤","🎯","⏱️","☢️","💡","🪙","🍄","⌛","🧪","⌛",],
      ["🍄","⌛","🪙","🍄","🍄","🎤","🧪","💡","🍄","⏱️","🧪","⏱️","🎤","⌛","💡","🧪",],
      ["⌛","💡","⌛","⏱️","🪙","🎯","🎤","🎤","🪙","⏱️","🎤","⌛","⏱️","🍄","🎤","🧪",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==4) {
    slotSymbols = [
      ["🪙","🍄","🎲","💡","🎯","⌛","🎤","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","💰",],
      ["🍄","⌛","🪙","💡","🍄","🎤","💰","💡","🎁","⏱️","🧪","💰","🎤","⌛","💡","🎲",],
      ["💰","💡","🎁","⏱️","🪙","🎯","🎤","🎲","💰","🎁","🎤","⌛","🎁","🍄","🎤","🧪",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==5) {
    slotSymbols = [
      ["💰","🍄","🎲","💡","🧪","⌛","🎤","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","💰",],
      ["💰","⌛","🪙","💡","🍄","🎤","🧑🏻‍🦲","💡","🧪","⌛","🧑🏻‍🦲","💰","🎤","⌛","💡","⌛",],
      ["💰","🎤","🎁","⏱️","🪙","🎯","🎤","🎲","💰","🎁","💡","⌛","🧪","⌛","💡","⌛",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==6) {
    slotSymbols = [
      ["☢️","🍄","🎲","💡","🎯","⌛","🎤","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","🎲",],
      ["💰","⌛","🪙","☢️","🍄","🎤","☢️","💡","🎲","⌛","🧪","💰","☢️","⌛","💡","⌛",],
      ["☢️","🎤","🎁","🧪","🪙","☢️","🎤","🎲","💰","🎁","🎲","⌛","🎁","☢️","💡","🎲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==7) {
    slotSymbols = [
      ["🎯","🍄","🎲","💡","🎯","⌛","🎤","🎯","⏱️","☢️","💡","🪙","🎁","🎲","🎯","🎲",],
      ["💰","💡","🎯","☢️","🧪","🎤","☢️","💡","💡","⌛","🧑🏻‍🦲","💰","🎯","⌛","💡","💡",],
      ["☢️","🎤","🎁","⏱️","🪙","🎯","🎤","🎲","💰","🧪","🎲","⌛","💡","☢️","🎯","🎯",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==8) {
    slotSymbols = [
      ["🎯","☢️","⌛","💡","🎯","🍄","🎤","🎯","⏱️","☢️","💡","🪙","🎁","🧪","🪙","🍄",],
      ["🪙","💡","🧑🏻‍🦲","☢️","🍄","🧪","🍄","💡","🧑🏻‍🦲","⌛","🧑🏻‍🦲","🪙","🎯","⌛","💡","💡",],
      ["🍄","🪙","🎁","⌛","🪙","🎯","🎤","🎲","💰","⌛","🧪","⌛","💡","🪙","💡","🧑🏻‍🦲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

if (ranNum ==9) {
  slotSymbols = [
    ["🎯","🎤","⌛","💡","🎯","🍄","🎤","🎯","⏱️","☢️","💡","🪙","⌛","🎲","🪙","🍄",],
    ["🪙","💡","🎲","⌛","🍄","🧪","🍄","💡","🧑🏻‍🦲","⌛","⌛","🎲","🎤","⌛","🎤","🎲",],
    ["🍄","🎤","🎁","⌛","🪙","⌛","🎤","⌛","🧪","⌛","💡","⌛","💡","🪙","🎤","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==10) {
  slotSymbols = [
    ["🎯","🎤","⌛","💡","🎯","🍄","🎤","🎯","⏱️","💰","💡","🪙","⌛","🎲","🪙","🎯",],
    ["💰","💡","🎲","💰","🍄","🪙","💰","🧪","🧑🏻‍🦲","⌛","⌛","🎲","🎯","⌛","🧪","🎯",],
    ["💰","🎤","🎁","⌛","🎯","⌛","🎤","⌛","🎯","⌛","💡","⌛","💡","💰","🎤","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==11) {
  slotSymbols = [
    ["🎯","⏱️","⏱️","💡","🎯","🍄","🎤","🎯","⏱️","💰","💡","🪙","🧪","🎲","🪙","☢️",],
    ["⏱️","💡","🎲","💰","🍄","🪙","💰","☢️","🧑🏻‍🦲","⌛","☢️","🎲","🎯","☢️","☢️","🎯",],
    ["🪙","🎤","⏱️","☢️","🎯","⌛","🎤","⌛","🎯","🧪","💡","⌛","💡","💰","🎤","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==12) {
  slotSymbols = [
    ["🎯","⏱️","⏱️","💡","🎯","🍄","🎤","🎯","⏱️","💰","🍄","🧪","⌛","🎲","🍄","🍄",],
    ["⏱️","💡","🎲","💰","🍄","🪙","🧪","☢️","🧑🏻‍🦲","⌛","☢️","🎲","🧪","☢️","🎲","🍄",],
    ["🧪","🎤","⏱️","🧪","🎯","🍄","🎤","⌛","🎯","🪙","🎲","⌛","💡","💰","🎤","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==13) {
  slotSymbols = [
    ["🎁","⏱️","⏱️","💡","🎯","🍄","🎤","🎯","⏱️","💰","🍄","🧪","⌛","🎲","🍄","💡",],
    ["⏱️","🎁","🎲","🎁","🍄","🪙","🧪","☢️","⌛","⌛","☢️","🎲","🧪","💡","🎲","⌛",],
    ["🧪","🎤","🎁","🧪","🎯","🍄","🎤","⌛","🎯","🪙","🎲","⌛","⏱️","💰","💡","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==14) {
  slotSymbols = [
    ["🎁","⏱️","⏱️","💡","🧑🏻‍🦲","🍄","🎤","🧑🏻‍🦲","⏱️","💰","🍄","🎤","⌛","🎲","🍄","🧪",],
    ["🎤","🎤","🎲","🎁","🍄","🪙","🧪","☢️","🎤","⌛","☢️","🎲","🧪","🧑🏻‍🦲","🎲","🧑🏻‍🦲",],
    ["🧪","🎤","🎁","🧪","🎯","🍄","🎤","⌛","🎯","🪙","🧑🏻‍🦲","⌛","⏱️","💰","💡","🧑🏻‍🦲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==15) {
  slotSymbols = [
    ["🎁","⏱️","⏱️","💡","🧑🏻‍🦲","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🍄","🎤","⌛","🎲","🍄","💰",],
    ["🎤","🎤","🎯","🎁","💡","🪙","🧪","☢️","🎤","⌛","☢️","💡","🧪","🧑🏻‍🦲","💰","💡",],
    ["💡","💡","🎁","🧪","🎯","🍄","🎤","⌛","🎯","💰","🧑🏻‍🦲","⌛","⏱️","🎯","💡","🧑🏻‍🦲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==16) {
  slotSymbols = [
    ["☢️","🍄","⏱️","💡","🧑🏻‍🦲","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🧪","🎤","⌛","🎲","🍄","🎯",],
    ["🍄","🍄","🎯","🎁","💡","🪙","🎲","☢️","🎤","⌛","☢️","🎁","🧪","🧑🏻‍🦲","🎲","🧪",],
    ["☢️","💡","🎁","🧪","🎯","🍄","🎤","⌛","🎯","💰","🍄","⌛","⏱️","🎯","💡","🎁",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==17) {
  slotSymbols = [
    ["🧪","🍄","⏱️","💡","🧑🏻‍🦲","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🧪","🎤","🧑🏻‍🦲","🎲","🧑🏻‍🦲","🎤",],
    ["🎤","🍄","🎤","🎁","💡","🪙","🧑🏻‍🦲","⏱️","🎤","🧑🏻‍🦲","☢️","🎁","🧪","🧑🏻‍🦲","🎲","🧪",],
    ["🎤","🧪","🎁","🧪","🎯","🧪","🎤","⌛","⏱️","💰","🧪","⌛","⏱️","🎯","💡","🎤",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==18) {
  slotSymbols = [
    ["🎁","🍄","⏱️","💡","🧑🏻‍🦲","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🧪","🎤","🧑🏻‍🦲","🎲","💡","🎤",],
    ["💡","⏱️","🎤","⏱️","💡","🪙","⏱️","⏱️","🎤","🎁","☢️","💡","🧪","🧑🏻‍🦲","⌛","⌛",],
    ["🎁","🧪","🎁","🧪","🎯","🧪","🎤","⌛","⏱️","💰","⌛","⌛","⏱️","🎯","💡","🎤",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==19) {
  slotSymbols = [
    ["🎁","🧪","⏱️","💡","🎁","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🧪","🍄","⌛","🎲","💡","⌛",],
    ["💡","⏱️","🎤","⏱️","💡","🎁","🧪","🎁","🎤","🎁","☢️","💡","🧪","🧑🏻‍🦲","⌛","⌛",],
    ["🧪","🧪","🎁","🧪","🎯","🧪","🎤","🍄","⏱️","🍄","⌛","⌛","⏱️","⌛","💡","🎤",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==20) {
  slotSymbols = [
    ["⏱️","🎲","⏱️","💡","🎁","🎯","🎤","🧑🏻‍🦲","⏱️","💡","🧪","🍄","⌛","🎲","💡","🧑🏻‍🦲",],
    ["🎲","⏱️","🎤","🧑🏻‍🦲","💡","🎲","🧪","🎁","🎤","🎲","☢️","💡","🎲","🧑🏻‍🦲","⌛","💰",],
    ["🧪","🎲","🎁","🧪","🎯","🧑🏻‍🦲","💰","🍄","⏱️","🍄","🧑🏻‍🦲","⌛","⏱️","⌛","💡","🎤",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==21) {
  slotSymbols = [
    ["🍄","🎲","⏱️","💡","🎁","🎯","🎤","🧑🏻‍🦲","🍄","💡","🧪","🍄","☢️","🎲","💡","🧑🏻‍🦲",],
    ["🎯","🍄","🎤","🧑🏻‍🦲","💡","🎲","🧪","🎁","🎤","🎲","☢️","🎯","🎲","🧑🏻‍🦲","⌛","🎯",],
    ["☢️","🎲","🎁","🧪","☢️","🧑🏻‍🦲","💰","💡","🎯","🍄","🧑🏻‍🦲","⌛","🎤","⌛","🎤","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==22) {
  slotSymbols = [
    ["💡","💰","🧪","💡","💰","🪙","🎤","🧑🏻‍🦲","🍄","💡","🧪","🍄","☢️","🎲","💡","🪙",],
    ["🎲","🍄","🪙","🧑🏻‍🦲","🎲","🎲","🧪","🎁","🪙","🎲","☢️","🎯","🎲","🪙","⌛","🎲",],
    ["🪙","🎲","🎁","🧪","☢️","🧑🏻‍🦲","💰","💡","💰","🍄","🧑🏻‍🦲","🪙","💰","🧪","🎤","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==23) {
  slotSymbols = [
    ["🎁","💰","🎁","💡","💰","🪙","🎤","🧑🏻‍🦲","🍄","💡","🧪","⌛","☢️","🎲","💡","⌛",],
    ["💰","🍄","⌛","🧑🏻‍🦲","🎲","💡","🎁","🎁","🪙","💡","☢️","💰","🎲","🪙","⌛","💡",],
    ["💡","🎲","🎁","🧪","☢️","🧑🏻‍🦲","💰","⌛","💰","🍄","🧑🏻‍🦲","🎁","💡","🧪","🎤","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==24) {
  slotSymbols = [
    ["⏱️","💰","🎁","💡","💰","🪙","🎤","🧑🏻‍🦲","🍄","💡","⏱️","🧑🏻‍🦲","☢️","🎲","💡","⏱️",],
    ["🧑🏻‍🦲","🍄","⏱️","🧑🏻‍🦲","🎤","💡","🧑🏻‍🦲","🎁","⏱️","💡","☢️","🎤","🎲","🪙","⌛","🎤",],
    ["🎤","🎲","🧑🏻‍🦲","🧪","☢️","⏱️","💰","⌛","💰","🍄","🧑🏻‍🦲","🎁","💡","🎤","🎤","🧑🏻‍🦲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==25) {
  slotSymbols = [
    ["🎯","💰","🎁","💡","💰","🪙","🎤","🧑🏻‍🦲","🍄","💡","⏱️","🧑🏻‍🦲","☢️","🎲","💡","🎯",],
    ["🎲","🍄","⏱️","🎯","🎤","💡","🧑🏻‍🦲","🎁","⏱️","💡","🎯","🎤","🎲","🎯","⌛","🪙",],
    ["🪙","🎲","🧑🏻‍🦲","🎲","☢️","⏱️","🎯","⌛","💰","🍄","🧑🏻‍🦲","🎁","🎲","🪙","☢️","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==26) {
  slotSymbols = [
    ["🎤","💰","🎁","🧪","💰","🪙","⌛","🧑🏻‍🦲","🍄","💡","⏱️","🧑🏻‍🦲","☢️","🎲","⌛","🎤",],
    ["🧪","🍄","⌛","🎯","🎤","🎤","🧪","🎁","⏱️","⌛","⏱️","🎤","🎲","🧪","🎤","⏱️",],
    ["⌛","🎲","🧑🏻‍🦲","🎤","☢️","⏱️","🎯","⌛","💰","🎤","🧑🏻‍🦲","🎁","⏱️","🪙","☢️","⌛",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==27) {
  slotSymbols = [
    ["🎯","💰","🎁","🧪","💰","🎯","⌛","🧑🏻‍🦲","🪙","💡","⏱️","🎯","☢️","🎲","⌛","🎯",],
    ["🧪","🍄","⌛","🎯","🪙","🎤","🧪","🎁","⏱️","⌛","⏱️","🎤","🎲","🪙","🎤","⏱️",],
    ["🪙","🎲","🧑🏻‍🦲","🎤","☢️","⏱️","🎯","⌛","🎲","🎤","🧑🏻‍🦲","🎁","⏱️","🪙","☢️","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==28) {
  slotSymbols = [
    ["🎯","💰","🎁","🧪","🧑🏻‍🦲","🎯","⌛","🧑🏻‍🦲","🪙","💡","⏱️","🎯","☢️","🎲","⌛","🧪",],
    ["🧑🏻‍🦲","🎁","⌛","🎯","🧪","🎁","🧪","🎁","🧑🏻‍🦲","⌛","🧪","🎤","🎲","🧪","🎤","🧑🏻‍🦲",],
    ["🧪","🎲","🧑🏻‍🦲","🎤","☢️","⏱️","🎯","⌛","🎁","🎤","🧑🏻‍🦲","🎁","⏱️","🧑🏻‍🦲","🎁","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==29) {
  slotSymbols = [
    ["🎯","💰","💡","🧪","🧑🏻‍🦲","🎯","⌛","🧑🏻‍🦲","🪙","💡","⏱️","🎯","☢️","🎲","⌛","⏱️",],
    ["💡","🎁","⌛","🎯","⏱️","💡","🧪","🎁","🧑🏻‍🦲","⌛","🧪","🎤","🎲","🧪","⏱️","💡",],
    ["⏱️","🎲","🧑🏻‍🦲","🎤","☢️","⏱️","🎯","⌛","🎁","🎤","🧑🏻‍🦲","🎁","💡","🧑🏻‍🦲","🎁","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==30) {
  slotSymbols = [
    ["☢️","💰","💡","☢️","🧑🏻‍🦲","🎯","⌛","🧑🏻‍🦲","🪙","☢️","⏱️","💰","☢️","🎲","🪙","💰",],
    ["🪙","🎁","⌛","🎯","🪙","💡","🧪","💰","🧑🏻‍🦲","⌛","🧪","🎤","🎲","🧪","⏱️","☢️",],
    ["💰","🎲","🧑🏻‍🦲","🎤","☢️","⏱️","🎯","⌛","🪙","🎤","🧑🏻‍🦲","🪙","💡","🧑🏻‍🦲","🎁","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==31) {
  slotSymbols = [
    ["🍄","💰","💡","☢️","🍄","🎯","⌛","🧑🏻‍🦲","🪙","🍄","⏱️","💰","☢️","🍄","🪙","🍄",],
    ["🎲","🎁","⌛","🎯","🎲","💡","🧪","💰","🎲","⌛","🧪","🎤","🍄","🎲","⏱️","🎲",],
    ["⏱️","🎲","🧑🏻‍🦲","🎤","⏱️","⏱️","🎯","⌛","🪙","⏱️","🧑🏻‍🦲","🪙","💡","🧑🏻‍🦲","⏱️","⏱️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==32) {
  slotSymbols = [
    ["💰","💰","💡","☢️","🎯","💰","⌛","🧑🏻‍🦲","🪙","🍄","⏱️","💰","☢️","💰","💰","🎁",],
    ["🎯","🎁","⌛","🎯","🎲","💡","💰","💰","🎯","⌛","🧪","🎤","🍄","🎲","⏱️","🎁",],
    ["⏱️","🎲","🧑🏻‍🦲","🎁","⏱️","⏱️","🎯","⌛","🪙","🎁","🧑🏻‍🦲","🎯","💡","🧑🏻‍🦲","🎁","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==33) {
  slotSymbols = [
    ["🧑🏻‍🦲","💰","💡","☢️","🎯","💰","⌛","🧑🏻‍🦲","🪙","🍄","⏱️","💰","☢️","⌛","💰","🧑🏻‍🦲",],
    ["💡","🎁","⌛","🎯","⌛","💡","🧑🏻‍🦲","💡","🎯","⌛","🧪","🧑🏻‍🦲","🍄","🎲","🧑🏻‍🦲","⌛",],
    ["⏱️","🎲","🧑🏻‍🦲","🎁","⏱️","⏱️","🎯","⌛","🪙","⌛","🧑🏻‍🦲","🎯","💡","💡","🎁","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==34) {
  slotSymbols = [
    ["🧑🏻‍🦲","💰","💡","☢️","🎯","💰","⌛","🎲","🪙","🍄","🎲","💰","☢️","⌛","💰","🎲",],
    ["🧪","🎁","⌛","🎲","⌛","🧪","🧑🏻‍🦲","💡","🎯","⌛","🪙","🧑🏻‍🦲","🍄","🎲","🧑🏻‍🦲","⌛",],
    ["🪙","🎲","🧑🏻‍🦲","🎁","⏱️","⏱️","🎯","⌛","🪙","⌛","🧪","🎯","💡","💡","🎁","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

if (ranNum ==35) {
  slotSymbols = [
    ["🎤","💰","💡","☢️","🎯","💰","⌛","🎲","🪙","🧪","🎲","💰","💡","⌛","🎤","🎤",],
    ["☢️","🎁","🧪","🎤","⌛","💡","🧑🏻‍🦲","☢️","🎯","⌛","🪙","🎤","🍄","🧪","🧑🏻‍🦲","☢️",],
    ["🧪","🎲","🧑🏻‍🦲","💡","⏱️","⏱️","🎯","🎤","🪙","⌛","🧪","🎯","☢️","💡","🎁","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=eivoittoa;
}

// KOLIKONHEITTO

var heittokolikko = "Kolikonheitto";


if (ranNum ==36) {
  slotSymbols = [
    ["🧑🏻‍🦲","💰","💡","⌛","🎯","💰","⌛","🎲","🪙","🧪","🎲","🎁","💡","⌛","🎤","🪙",],
    ["⏱️","🎁","🧪","⏱️","⌛","💡","🧑🏻‍🦲","🧑🏻‍🦲","⏱️","⌛","🪙","🎤","⏱️","🧪","🎁","🪙",],
    ["⌛","🎲","🧑🏻‍🦲","💡","⏱️","🎁","🎯","🎤","⌛","🧑🏻‍🦲","🧪","🎯","☢️","💡","🧑🏻‍🦲","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=heittokolikko;
}

if (ranNum ==37) {
  slotSymbols = [
    ["🎯","💰","💡","⌛","🎯","💰","⌛","🎲","🪙","🧪","💡","🎁","🎤","⌛","🎯","🪙",],
    ["⏱️","🎁","🎤","⏱️","⌛","💡","🧑🏻‍🦲","🎯","⏱️","🎤","🪙","🎤","⏱️","🧪","🎯","🪙",],
    ["⌛","🎲","💡","🎯","⏱️","🎁","🎤","💡","⌛","🧑🏻‍🦲","🧪","🎯","☢️","💡","🧑🏻‍🦲","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=heittokolikko;
}

if (ranNum ==38) {
  slotSymbols = [
    ["💰","💰","💡","⌛","🎯","💰","⌛","🪙","💰","🧪","💡","🎁","🎤","⌛","🎯","🪙",],
    ["🎲","🎲","🎤","🪙","💰","💡","🧑🏻‍🦲","🎯","🎲","🎤","🪙","🪙","🎲","🧪","💰","🪙",],
    ["🪙","💰","💡","🎯","⏱️","🎁","🎤","💡","⌛","🧑🏻‍🦲","🧪","🎯","☢️","🪙","🧑🏻‍🦲","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=heittokolikko;
}

if (ranNum ==39) {
  slotSymbols = [
    ["⏱️","💰","💡","⌛","🎯","💰","⌛","🪙","💰","🧪","💡","⏱️","🎤","⌛","🧪","🪙",],
    ["🎁","🎲","🎤","⏱️","🧪","💡","🎁","🎯","🎲","🎤","🪙","🧪","🎲","🧪","⏱️","🪙",],
    ["🧪","💰","💡","🎁","⏱️","🎁","🎤","🧪","⌛","🧑🏻‍🦲","🧪","🎯","☢️","🪙","🧑🏻‍🦲","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=heittokolikko;
}

if (ranNum ==40) {
  slotSymbols = [
    ["💰","🪙","💡","⌛","🎯","💰","⌛","🎲","💰","🎯","💡","⏱️","🎤","⌛","💰","🪙",],
    ["🎯","🎲","💰","⏱️","🧪","🪙","💰","🎯","🎲","🎤","🪙","💰","🎯","🧪","⏱️","🪙",],
    ["🎲","💰","💡","🎁","⏱️","🎁","🎤","🧪","⌛","🪙","🧪","🎯","🪙","🎲","🧑🏻‍🦲","🪙",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=heittokolikko;
}

//UUSI PYÖRÄYTYS (1-6)

var pyöryli = "Uusi pyöräytys (1-6)";


if (ranNum ==41) {
  slotSymbols = [
    ["🎲","🪙","💡","⌛","☢️","💰","⌛","🎲","💰","🎲","💡","⏱️","🍄","⌛","💰","🎲",],
    ["💰","🎲","💰","⏱️","💰","🪙","💰","🎯","🎲","☢️","🪙","💰","🎲","🧪","☢️","🎲",],
    ["☢️","💰","💡","🎁","🍄","🎲","🎤","🧪","⌛","🪙","🧪","🎯","🪙","🎲","🧑🏻‍🦲","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=pyöryli;
}

if (ranNum ==42) {
  slotSymbols = [
    ["🎯","🪙","💡","⌛","☢️","💰","⌛","🎲","💰","🧪","💡","⏱️","🍄","⌛","🎯","🎲",],
    ["💡","💡","🎯","⏱️","🧪","💡","💰","🎯","🎲","☢️","🪙","💰","🎲","🧪","💡","🎲",],
    ["🍄","💰","💡","🎁","🍄","🎲","🎤","🍄","⌛","🪙","🧪","🎯","🍄","🎲","🍄","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=pyöryli;
}

if (ranNum ==43) {
  slotSymbols = [
    ["🪙","⌛","💡","⏱️","☢️","🎁","⌛","🧪","💰","⏱️","💡","🎁","🍄","⏱️","🧪","🎲",],
    ["🎁","⏱️","🎯","🪙","🧪","💡","💰","🎁","🪙","☢️","🪙","💰","🎲","🧪","🎁","🎲",],
    ["⌛","☢️","💡","🎁","⌛","🎲","🎤","☢️","⌛","🪙","🧪","🎯","🍄","🎲","🪙","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=pyöryli;
}

if (ranNum ==44) {
  slotSymbols = [
    ["🧑🏻‍🦲","⌛","⏱️","🧑🏻‍🦲","☢️","⏱️","⌛","🧑🏻‍🦲","💰","⏱️","💡","🎁","🍄","⏱️","💡","🎲",],
    ["💡","⏱️","🎯","🪙","💡","💡","💰","🎁","🪙","☢️","🧑🏻‍🦲","💡","🎲","🧪","⏱️","🎲",],
    ["⏱️","☢️","💡","🎁","⌛","🎲","🎤","💡","⌛","🪙","🧪","🎯","🍄","🎲","🧑🏻‍🦲","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=pyöryli;
}

if (ranNum ==45) {
  slotSymbols = [
    ["🍄","⌛","⏱️","🧑🏻‍🦲","☢️","⏱️","⌛","🧪","💰","⏱️","💡","🎁","🍄","⏱️","🧪","🎲",],
    ["🎤","⏱️","🎯","🧪","🍄","🎤","💰","🎁","🪙","☢️","🧪","🎤","🎲","🧪","⏱️","🎲",],
    ["🧪","☢️","💡","🎁","⌛","🎲","🎤","💡","⌛","🪙","🍄","🎯","🍄","🎲","🎤","🎲",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=pyöryli;
}

//+100 LUUSERILANTTIA

var sataluuserilanttia = "+100 luuserilanttia";


if (ranNum ==46) {
  slotSymbols = [
    ["🎯","⌛","🧪","🧑🏻‍🦲","☢️","⏱️","💰","🧪","💰","☢️","💡","🎁","🍄","⏱️","☢️","💰",],
    ["☢️","🧪","🎯","🧪","🍄","🎤","🧪","🎁","🍄","💰","🧪","🎤","🎲","🎯","⏱️","💰",],
    ["💰","🍄","💡","🎁","⌛","🎯","☢️","💡","⌛","🎯","🍄","☢️","🍄","💰","🍄","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=sataluuserilanttia;
}

if (ranNum ==47) {
  slotSymbols = [
    ["🎤","🍄","🧪","🧑🏻‍🦲","☢️","⏱️","💰","🧪","🎤","💡","🍄","💡","🍄","⏱️","🎲","💰",],
    ["🧪","💡","🎯","🎤","🍄","⌛","💡","🎁","🍄","⌛","🧪","🎤","🧑🏻‍🦲","🎲","⌛","💰",],
    ["🧑🏻‍🦲","🧪","💡","🎲","⌛","🍄","☢️","🧪","⌛","🎯","🍄","☢️","🧪","💰","🎤","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=sataluuserilanttia;
}

if (ranNum ==48) {
  slotSymbols = [
    ["💡","🍄","🧪","🧑🏻‍🦲","☢️","⏱️","💰","🧪","🎤","🎁","🍄","💡","🍄","⏱️","🎁","💰",],
    ["🎁","⏱️","🎁","🎤","⏱️","⌛","💡","🎁","🍄","⌛","🧪","⏱️","🧑🏻‍🦲","🎲","⏱️","💰",],
    ["⏱️","🧪","💡","🎲","⌛","🎁","☢️","⏱️","⌛","🎯","🍄","☢️","🧪","🎁","🎤","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=sataluuserilanttia;
}

if (ranNum ==49) {
  slotSymbols = [
    ["💰","🎯","🧪","🧑🏻‍🦲","☢️","⏱️","💰","💡","🎤","🎁","🍄","💡","🍄","⏱️","🎯","💰",],
    ["🎯","⏱️","🎁","💡","⏱️","⌛","💡","🎁","🎯","⌛","🧪","⏱️","💡","🎲","⏱️","💰",],
    ["💡","🧪","🎯","💰","⌛","🎁","☢️","💰","⌛","🎯","🍄","☢️","🧪","🎁","💡","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=sataluuserilanttia;
}

if (ranNum ==50) {
  slotSymbols = [
    ["💰","⌛","🧪","🧑🏻‍🦲","☢️","⏱️","💰","💡","🎤","⌛","🍄","💡","🪙","⏱️","💰","💰",],
    ["🪙","⏱️","🎁","💰","🎲","⌛","💡","🎁","🪙","💰","🧪","⏱️","💡","🎲","⏱️","💰",],
    ["🎲","🧪","🎯","🪙","⌛","🎁","☢️","💰","⌛","🎲","🍄","☢️","🧪","🎁","🎲","💰",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=sataluuserilanttia;
}

//RULETTI

var roulette = "Ruletti";


if (ranNum ==51) {
  slotSymbols = [
    ["🪙","⌛","🧪","🧑🏻‍🦲","🎯","⏱️","💰","🎲","🎤","⌛","🍄","💡","🧑🏻‍🦲","🎲","💰","🎯",],
    ["🎲","💡","🎁","💰","🪙","⌛","💡","🎯","🪙","💰","🧪","⏱️","🎯","💡","⏱️","🎯",],
    ["🎯","🧪","🎯","💡","⌛","🎁","☢️","💰","⌛","🎯","🪙","☢️","🧪","🎁","💡","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=roulette;
}

if (ranNum ==52) {
  slotSymbols = [
    ["💰","⌛","🧪","🧑🏻‍🦲","🎯","💰","🍄","🎲","🎤","⌛","🍄","💡","🧑🏻‍🦲","🎲","💰","🎯",],
    ["☢️","💰","🎁","🍄","☢️","⌛","💡","🎯","🍄","💰","🧪","⏱️","☢️","🍄","⏱️","🎯",],
    ["🍄","🧪","🎯","💡","⌛","🎁","☢️","💰","⌛","🎯","🪙","☢️","🧪","🎁","🍄","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=roulette;
}

if (ranNum ==53) {
  slotSymbols = [
    ["🍄","⌛","🧪","🧑🏻‍🦲","🎯","💰","🍄","🎲","💰","⌛","🍄","🧪","🧑🏻‍🦲","🧪","🎲","🎯",],
    ["☢️","🍄","🎁","🎲","☢️","⌛","💡","💰","🎲","💰","🧪","⏱️","☢️","🍄","⏱️","🎯",],
    ["🧪","🧪","🍄","💰","⌛","🎁","💰","🧪","⌛","🎯","🪙","🎲","🧪","🎁","🍄","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=roulette;
}

if (ranNum ==54) {
  slotSymbols = [
    ["🍄","🎲","🎯","🧑🏻‍🦲","🎯","🎲","🍄","🪙","💰","⌛","🍄","🧪","🧑🏻‍🦲","🧪","🎯","🎯",],
    ["🪙","💡","🎁","🎲","☢️","💡","🎯","💰","🎲","💰","💡","⏱️","🎯","🍄","💡","🎯",],
    ["🧪","🪙","🍄","💰","⌛","🪙","💰","🧪","⌛","🎯","🪙","🎲","🧪","🎁","🍄","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=roulette;
}

if (ranNum ==55) {
  slotSymbols = [
    ["🎁","🎲","🎯","🧑🏻‍🦲","🎯","🎲","🍄","🪙","💰","⌛","🍄","🧪","🧑🏻‍🦲","🧪","🎤","🎯",],
    ["🎤","💡","🎤","🎲","🎁","🧑🏻‍🦲","🎯","🎤","🎲","💰","🎁","🧑🏻‍🦲","🎤","🍄","💡","🎯",],
    ["🧑🏻‍🦲","🪙","🍄","💰","⌛","🪙","💰","🧪","⌛","🎯","🪙","🎲","🧪","🎁","🧑🏻‍🦲","🎯",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=roulette;
}

//TUPLARANGAISTUS

var tuplarankku = "Tuplarangaistus";


if (ranNum ==56) {
  slotSymbols = [
    ["🧪","🧑🏻‍🦲","🧪","🧑🏻‍🦲","🎯","🎲","🍄","☢️","💰","⌛","🍄","🧪","🧑🏻‍🦲","🎯","⌛","☢️",],
    ["🧑🏻‍🦲","💡","🎤","☢️","🎁","⌛","🎯","🎤","🎲","💰","🎁","🧑🏻‍🦲","☢️","🍄","🎯","☢️",],
    ["☢️","🧪","🍄","💰","🧑🏻‍🦲","🪙","💰","🧪","⌛","🎯","🪙","🎯","🧪","🎁","🧑🏻‍🦲","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=tuplarankku;
}

if (ranNum ==57) {
  slotSymbols = [
    ["⌛","🪙","🧪","🧑🏻‍🦲","🎯","🎲","🍄","☢️","💰","⏱️","🍄","🪙","🧑🏻‍🦲","⌛","⏱️","☢️",],
    ["⏱️","💡","🎲","⌛","🪙","⌛","🎲","🎤","🪙","💰","⏱️","🎲","☢️","⏱️","🎯","☢️",],
    ["🎲","⌛","🍄","💰","🧑🏻‍🦲","⌛","💰","🧪","🎲","🎯","⌛","🎯","⏱️","🪙","🧑🏻‍🦲","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=tuplarankku;
}

if (ranNum ==58) {
  slotSymbols = [
    ["🎤","🪙","🧪","🧑🏻‍🦲","🎯","🎲","🍄","☢️","💰","🧪","🍄","🪙","🎤","⌛","⏱️","☢️",],
    ["⏱️","🎤","🎲","⌛","🪙","⌛","🎲","🎤","🪙","💰","🧑🏻‍🦲","🎲","☢️","🎤","🧪","☢️",],
    ["🎲","🧪","🎤","💰","🧪","⌛","💰","🧪","🎲","🎯","⌛","🎯","🧑🏻‍🦲","🪙","🎤","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=tuplarankku;
}

if (ranNum ==59) {
  slotSymbols = [
    ["⏱️","🪙","🧪","🍄","🎯","🧑🏻‍🦲","🍄","☢️","💰","🧪","🎯","🪙","🎤","⌛","⏱️","☢️",],
    ["🎯","🎯","🧑🏻‍🦲","⌛","🪙","⏱️","🎲","🎯","🪙","🍄","🧑🏻‍🦲","🎲","☢️","🧑🏻‍🦲","🧪","☢️",],
    ["🍄","🧪","🎤","💰","🎯","⌛","💰","🧪","🎲","🧑🏻‍🦲","⌛","🎯","🍄","🪙","⏱️","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=tuplarankku;
}

if (ranNum ==60) {
  slotSymbols = [
    ["☢️","🪙","🧪","🍄","🪙","🧑🏻‍🦲","💰","☢️","💰","🎲","💰","🪙","🎤","⌛","🪙","☢️",],
    ["💰","🎯","🧑🏻‍🦲","🎲","💰","🪙","🎲","🎯","🪙","🍄","🧑🏻‍🦲","☢️","🎲","☢️","🎲","☢️",],
    ["🍄","💰","🎤","💰","🎯","⌛","💰","🧪","🎲","🪙","⌛","🎯","🍄","🪙","⏱️","☢️",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=tuplarankku;
}

//10MIN JÄÄHY DONAAJALLE

var donaajajäähy = "10min jäähy donaajalle";

// EMOTEPALETTI: 🪙🎲💰🎯☢️🧪🍄🎤🧑🏻‍🦲⏱️🎁⌛💡
if (ranNum ==61) {
  slotSymbols = [
    ["🍄","🪙","🧪","🍄","🪙","🎤","💰","☢️","🧪","🎯","💰","🪙","🎤","⌛","🪙","🍄",],
    ["💰","🎤","🎯","🎲","🧪","🎯","🎲","🎯","🪙","🍄","🧑🏻‍🦲","🍄","🧪","☢️","🧪","🍄",],
    ["🎯","💰","🎤","💰","🎯","⌛","🎤","🧪","🎲","🪙","🎤","🎯","🍄","🪙","⏱️","🍄",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=donaajajäähy;
}

if (ranNum ==62) {
  slotSymbols = [
    ["🍄","🎯","🎁","🍄","🪙","🎤","💰","☢️","⏱️","🎯","💰","🪙","🎤","⌛","⏱️","🍄",],
    ["⌛","🎤","🎯","🎲","🧪","🎁","🎲","⌛","🪙","🍄","⏱️","🍄","🧪","☢️","⌛","🍄",],
    ["⏱️","💰","⏱️","💰","🎯","⏱️","🎤","🧪","🎁","🪙","⌛","🎯","⏱️","🪙","⏱️","🍄",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=donaajajäähy;
}

if (ranNum ==63) {
  slotSymbols = [
    ["☢️","🎯","🎁","🍄","🪙","🎤","💰","☢️","⏱️","🎯","💰","🪙","🎤","⌛","⌛","🍄",],
    ["🧑🏻‍🦲","🎤","🎯","☢️","🧪","🎁","🎲","⌛","🪙","🎤","⏱️","⌛","🧪","☢️","🎤","🍄",],
    ["🎤","💰","⏱️","🧑🏻‍🦲","🎯","⏱️","🎤","🧑🏻‍🦲","🎁","🪙","☢️","🧑🏻‍🦲","⏱️","🪙","🧑🏻‍🦲","🍄",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=donaajajäähy;
}

if (ranNum ==64) {
  slotSymbols = [
    ["🎲","🍄","🎁","🧪","🪙","🎤","💰","☢️","🍄","🎯","💰","🪙","🎲","🍄","⌛","🍄",],
    ["🧪","🎤","🎯","🎲","🍄","🎁","🎲","⌛","🪙","🎤","⏱️","⌛","🧪","☢️","🍄","🍄",],
    ["🍄","🎲","⏱️","🧑🏻‍🦲","🎯","⏱️","🎤","🧪","🍄","🪙","☢️","🎲","⏱️","🪙","🧑🏻‍🦲","🍄",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=donaajajäähy;
}

if (ranNum ==65) {
  slotSymbols = [
    ["🧑🏻‍🦲","🍄","🎁","🧪","🪙","🎤","💰","☢️","🍄","🎯","💰","🪙","🎲","🍄","☢️","🍄",],
    ["💰","🎤","🧑🏻‍🦲","🎯","🍄","🎁","🧑🏻‍🦲","⌛","🪙","🎤","⏱️","⌛","🧪","☢️","🧑🏻‍🦲","🍄",],
    ["🎯","☢️","⏱️","🧑🏻‍🦲","☢️","⏱️","🎤","🧪","🎯","🪙","🧑🏻‍🦲","🎲","💰","🪙","🧑🏻‍🦲","🍄",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=donaajajäähy;
}

//10MIN JÄÄHY KATSOJALLE

var katsojajäähy = "10min jäähy katsojalle";


if (ranNum ==66) {
  slotSymbols = [
    ["🧑🏻‍🦲","🎯","🎁","💡","🧪","🎤","💰","☢️","🍄","🎯","💰","🪙","💡","🎲","☢️","🧪",],
    ["🪙","🎤","🧑🏻‍🦲","🎯","💡","🎁","🪙","⌛","🧪","🎤","⏱️","⌛","🪙","💡","🎲","🧪",],
    ["💡","💡","⏱️","🧑🏻‍🦲","☢️","💡","🎤","🧪","🎯","🎲","🧑🏻‍🦲","🎯","💰","🪙","💡","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=katsojajäähy;
}

if (ranNum ==67) {
  slotSymbols = [
    ["🧑🏻‍🦲","💡","🎁","🍄","⌛","🎤","💰","☢️","🎤","🎯","💰","🪙","💡","🍄","☢️","🧪",],
    ["🪙","🍄","🎤","🎯","💡","🍄","🪙","⌛","🧪","🎤","🍄","⌛","🎤","💡","🎲","🧪",],
    ["🎤","☢️","🪙","🧑🏻‍🦲","☢️","💡","🎤","🪙","🍄","🎲","🧑🏻‍🦲","🎯","💰","🪙","⌛","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=katsojajäähy;
}

if (ranNum ==68) {
  slotSymbols = [
    ["🎯","🪙","🧪","🍄","⌛","🧑🏻‍🦲","⏱️","☢️","🎤","🎯","💰","🧑🏻‍🦲","💡","🧑🏻‍🦲","☢️","🧪",],
    ["⏱️","🍄","🎤","⏱️","💡","🍄","🪙","⏱️","🧪","🧪","🍄","⌛","🧪","💡","🎯","🧪",],
    ["🧪","💡","🪙","🧑🏻‍🦲","☢️","💡","🎤","🪙","⏱️","🎲","🧑🏻‍🦲","🎯","⏱️","🧪","⌛","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=katsojajäähy;
}

if (ranNum ==69) {
  slotSymbols = [
    ["🎯","🪙","🧪","🍄","⌛","🎯","⏱️","☢️","🎤","🎯","🎁","💰","☢️","🧑🏻‍🦲","🎁","🧪",],
    ["💰","💰","🎤","💰","💡","🍄","🪙","⏱️","🎁","🧪","🍄","⌛","🧪","💰","🎯","🧪",],
    ["🧪","☢️","🎯","🧑🏻‍🦲","☢️","💡","🎤","💰","⏱️","🎲","🎤","🎯","⏱️","🧪","💰","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=katsojajäähy;
}
// EMOTEPALETTI: 🪙🎲💰🎯☢️🧪🍄🎤🧑🏻‍🦲⏱️🎁⌛💡
if (ranNum ==70) {
  slotSymbols = [
    ["🎯","🪙","🎲","🍄","⌛","🎯","⏱️","☢️","🎤","🎯","🪙","💰","☢️","🧑🏻‍🦲","💡","🧪",],
    ["🎲","💡","🪙","💰","💡","🍄","💰","⏱️","🎁","💡","🍄","⌛","🪙","💰","🎯","🧪",],
    ["💰","💰","🎯","🧑🏻‍🦲","☢️","💡","🎤","💰","🪙","🎲","🎤","🎯","🎲","🧪","💰","🧪",],
  ];
  document.getElementById("numero").style.color="#00AA00";
  document.getElementById("voitto").style.color="#00AA00";
  document.getElementById("voitto").innerHTML=katsojajäähy;
}

  } // RANDOMSKENAARION PÄÄTY

//KULTAPALKINNOT

//12H STREAM

function stream12h() {
  var ranNum = Math.random();
  ranNum = ranNum + 400;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum ==401) {
    slotSymbols = [
      ["🪙","🍄","🪙","💡","🎲","⌛","☢️","🍄","⏱️","🎯","☢️","⌛","⏱️","⏱️","☢️","⌛",],
      ["🎁","💡","☢️","🧑🏻‍🦲","🍄","💡","⌛","🪙","🧑🏻‍🦲","🧪","💡","🎁","🧪","🍄","💡","⌛",],
      ["⌛","🧑🏻‍🦲","🎁","💰","⌛","🍄","💡","🎯","⌛","🍄","🧑🏻‍🦲","🪙","💡","🧪","🪙","⌛",],
    ];
    document.getElementById("numero").style.color="#FFB600";
    document.getElementById("voitto").style.color="#FFB600";
    document.getElementById("voitto").innerHTML=striimikaksitoista;
  }
  }

// MERCH GIVEAWAY 402

function hesselmerch() {
  var ranNum = Math.random();
  ranNum = 402;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum ==402) {
    slotSymbols = [
      ["💡","💰","☢️","🪙","🍄","🎁","⌛","🪙","🧑🏻‍🦲","💡","⏱️","🎁","💰","💡","🧪","🎁",],
      ["🪙","🍄","💰","⏱️","🎯","☢️","💡","💰","💡","🎯","💰","⌛","💡","🎲","💡","🎁",],
      ["⌛","💡","🎁","💡","⏱️","🍄","⏱️","🎯","☢️","🎲","💡","🪙","🎲","🧪","🎲","🎁",],
    ];
    document.getElementById("numero").style.color="#FFB600";
    document.getElementById("voitto").style.color="#FFB600";
    document.getElementById("voitto").innerHTML=merchgiveaway;
  }
  }

 // LAMPS FOR MAKEUP 403

 function Lamps4makeup() {
  var ranNum = Math.random();
  ranNum = 403;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum ==403) {
    slotSymbols = [
      ["🎤","🍄","⏱️","🎯","🧑🏻‍🦲","🎤","🍄","🧑🏻‍🦲","🎯","🧑🏻‍🦲","☢️","🎯","☢️","☢️","🎯","💡",],
      ["🎯","🧪","💡","🎤","🍄","⏱️","🎤","⏱️","🎤","🧪","💡","🎤","💡","🍄","🎤","💡",],
      ["🧪","🎯","🍄","💡","🎯","💡","🍄","🎯","⏱️","🧪","🧑🏻‍🦲","🎯","🎤","⏱️","🧪","💡",],
    ];
    document.getElementById("numero").style.color="#FFB600";
    document.getElementById("voitto").style.color="#FFB600";
    document.getElementById("voitto").innerHTML=lampsformakeup;
  }
  }

// HOPEAPALKINNOT

// Striimi pitenee 1h 501

function tunninpidennys() {
  var ranNum = Math.random();
  ranNum = 501;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum ==501) {
    slotSymbols = [
      ["💡","🍄","⏱️","🎁","🧪","🍄","🍄","🧑🏻‍🦲","🎯","🧑🏻‍🦲","☢️","🎯","☢️","🧪","💡","⏱️",],
      ["🎁","💡","🎤","🧪","🎯","⏱️","🎤","🧪","🎁","🎤","💡","🍄","🎤","🍄","🎯","⏱️",],
      ["⏱️","🎯","⏱️","💡","💡","🧪","🎯","🎁","⏱️","💡","🧪","🎯","💡","🧪","🎁","⏱️",],
    ];
    document.getElementById("numero").style.color="#a7a7a7";
    document.getElementById("voitto").style.color="#a7a7a7";
    document.getElementById("voitto").innerHTML=striimi1h;
  }
  }

// Peruukki pois 30min 502

function peruukkipois() {
  var ranNum = Math.random();
  ranNum = 502;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum ==502) {
    slotSymbols = [
      ["🧪","🎯","⏱️","🎯","🧑🏻‍🦲","🧑🏻‍🦲","🎯","🧑🏻‍🦲","🎯","🎲","☢️","🎯","🎲","☢️","🎯","🧑🏻‍🦲",],
      ["🎯","🎲","💡","🎲","🍄","⏱️","🧑🏻‍🦲","🍄","🧑🏻‍🦲","🎯","🎲","⏱️","🧪","💡","🧪","🧑🏻‍🦲",],
      ["🎲","🎯","⏱️","🧪","🎯","🎲","🎯","🎲","🍄","🧪","🧑🏻‍🦲","🧪","🎯","⏱️","🎲","🧑🏻‍🦲",],
    ];
    document.getElementById("numero").style.color="#a7a7a7";
    document.getElementById("voitto").style.color="#a7a7a7";
    document.getElementById("voitto").innerHTML=peruukki;
  }
  }  

// Voice changer 15min (503)

  function voicechanger() {
    var ranNum = Math.random();
    ranNum = 503;
    ranNum = Math.ceil(ranNum);
    document.getElementById("numero").innerHTML=ranNum;
    
    if (ranNum ==503) {
      slotSymbols = [
        ["🧪","☢️","⏱️","🍄","🧑🏻‍🦲","🍄","💰","🧑🏻‍🦲","🎯","🧑🏻‍🦲","☢️","🍄","☢️","💰","🍄","🎤",],
        ["💰","💡","💰","☢️","🎲","☢️","💰","🍄","🧑🏻‍🦲","🎯","💡","⏱️","🧪","🎲","🧪","🎤",],
        ["⏱️","🎯","☢️","🧪","🎯","🎲","☢️","🎯","🍄","🧪","💰","☢️","🎯","⏱️","🎲","🎤",],
      ];
      document.getElementById("numero").style.color="#a7a7a7";
      document.getElementById("voitto").style.color="#a7a7a7";
      document.getElementById("voitto").innerHTML=voice;
    }
    }  

// KOLME VAIHTOEHTOA

/*
function displayNumber() {
  var ranNum = Math.random();
  ranNum = ranNum *10;
  ranNum = Math.ceil(ranNum);
  document.getElementById("numero").innerHTML=ranNum;
  
  if (ranNum >5) {
    slotSymbols = [
      ['⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️',],
      ['⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️',],
      ['⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️','⭐️',],
    ];
  }
  
  else if (ranNum <5) {
    slotSymbols = [
      ['🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎',],
      ['🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎',],
      ['🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎','🍎',],
    ];
  }
  
   else {
    slotSymbols = [
      ['🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐',],
      ['🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐',],
      ['🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐','🍐',],
    ];
  }
}

*/

function createSymbolElement(symbol) {
  const div = document.createElement('div');
  div.classList.add('symbol');
  div.textContent = symbol;
  return div;
}

let spun = false;
function spin() {
  if (spun) {
    reset();
  }
  const slots = document.querySelectorAll('.slot');
  let completedSlots = 0;

  slots.forEach((slot, index) => {
    const symbols = slot.querySelector('.symbols');
    const symbolHeight = symbols.querySelector('.symbol')?.clientHeight;
    const symbolCount = symbols.childElementCount;

    symbols.innerHTML = '';

    symbols.appendChild(createSymbolElement('❓'));

    for (let i = 0; i < 1; i++) {
      slotSymbols[index].forEach(symbol => {
        symbols.appendChild(createSymbolElement(symbol));
      });
    }

    const totalDistance = symbolCount * symbolHeight;
    const randomOffset = -Math.floor(16) * symbolHeight;
    symbols.style.top = `${randomOffset}px`;

    symbols.addEventListener('transitionend', () => {
      completedSlots++;
      if (completedSlots === slots.length) {
        logDisplayedSymbols();
      }
    }, { once: true });
  });

  spun = true;
}

function reset() {
  const slots = document.querySelectorAll('.slot');

  slots.forEach(slot => {
    const symbols = slot.querySelector('.symbols');
    symbols.style.transition = 'none';
    symbols.style.top = '0';
    symbols.offsetHeight;
    symbols.style.transition = '';
  });
  document.getElementById("spin").disabled = false;
}

function logDisplayedSymbols() {
  const slots = document.querySelectorAll('.slot');
  const displayedSymbols = [];

  slots.forEach((slot, index) => {
    const symbols = slot.querySelector('.symbols');
    const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
    const displayedSymbol = slotSymbols[index][symbolIndex];
    displayedSymbols.push(displayedSymbol);
  });

  console.log(displayedSymbols);
}

spin();

    let spinner = new Audio();
    spinner.src = "./spin.mp3"

    let kolikko = new Audio();
    kolikko.src = "./kolikkoääni.mp3"

    let noppa = new Audio();
    noppa.src = "./noppaääni.mp3"