/*

// EMOTEPALETTI: 🪙🎲💰🎯☢️🍄🧪🎙️🧑🏻‍🦲⏱️🎁⌛💡

    <p>🪙🪙🪙</p><!--Kolikonheitto-->
    <p>🎲🎲🎲</p><!--Uusi pyöräytys-->
    <p>💰💰💰</p><!--+100 luuserilanttia-->
    <p>🎯🎯🎯</p><!--Ruletti-->
    <p>☢️☢️☢️</p><!--Tuplarangaistus-->
    <p>🍄🍄🍄</p><!--10min jäähy donaajalle-->
    <p>🧪🧪🧪</p><!--10min jäähy katsojalle-->
    
    <p>🎙️🎙️🎙️</p><!--Voice Changer 15min-->
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
  ranNum = ranNum * 8;
  ranNum = Math.ceil(ranNum); //MIN number
  document.getElementById("numero").innerHTML=ranNum;

//EI VOITTOA 1-35
// EMOTEPALETTI: 🪙🎲💰🎯☢️🍄🧪🎙️🧑🏻‍🦲⏱️🎁⌛💡
  if (ranNum ==1) {
    slotSymbols = [
      ["🎙️","💡","⌛","⏱️","🪙","🎲","🎙️","☢️","🪙","🎲","🎙️","⌛","🪙","🍄","🧑🏻‍🦲","🎲",],
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
      ["🎙️","💡","⌛","⏱️","🪙","🎯","🎙️","☢️","🪙","🪙","🎙️","⌛","🪙","🍄","💡","🎲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==3) {
    slotSymbols = [
      ["🪙","🍄","🍄","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🍄","⌛","🧪","⌛",],
      ["🍄","⌛","🪙","🍄","🍄","🎙️","🧪","💡","🍄","⏱️","🧪","⏱️","🎙️","⌛","💡","🧪",],
      ["⌛","💡","⌛","⏱️","🪙","🎯","🎙️","🎙️","🪙","⏱️","🎙️","⌛","⏱️","🍄","🎙️","🧪",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==4) {
    slotSymbols = [
      ["🪙","🍄","🎲","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","💰",],
      ["🍄","⌛","🪙","💡","🍄","🎙️","💰","💡","🎁","⏱️","🧪","💰","🎙️","⌛","💡","🎲",],
      ["💰","💡","🎁","⏱️","🪙","🎯","🎙️","🎲","💰","🎁","🎙️","⌛","🎁","🍄","🎙️","🧪",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==5) {
    slotSymbols = [
      ["💰","🍄","🎲","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","💰",],
      ["💰","⌛","🪙","💡","🍄","🎙️","🧑🏻‍🦲","💡","🎁","⌛","🧑🏻‍🦲","💰","🎙️","⌛","💡","⌛",],
      ["💰","🎙️","🎁","⏱️","🪙","🎯","🎙️","🎲","💰","🎁","💡","⌛","🎁","⌛","💡","⌛",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==6) {
    slotSymbols = [
      ["☢️","🍄","🎲","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🎁","🎲","💰","🎲",],
      ["💰","⌛","🪙","☢️","🍄","🎙️","☢️","💡","🎲","⌛","🧑🏻‍🦲","💰","☢️","⌛","💡","⌛",],
      ["☢️","🎙️","🎁","⏱️","🪙","☢️","🎙️","🎲","💰","🎁","🎲","⌛","🎁","☢️","💡","🎲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }

  if (ranNum ==7) {
    slotSymbols = [
      ["🎯","🍄","🎲","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🎁","🎲","🎯","🎲",],
      ["💰","💡","🎯","☢️","🍄","🎙️","☢️","💡","💡","⌛","🧑🏻‍🦲","💰","🎯","⌛","💡","💡",],
      ["☢️","🎙️","🎁","⏱️","🪙","🎯","🎙️","🎲","💰","💡","🎲","⌛","💡","☢️","🎯","🎯",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
  }
// EMOTEPALETTI: 🪙🎲💰🎯☢️🍄🧪🎙️🧑🏻‍🦲⏱️🎁⌛💡
  if (ranNum ==8) {
    slotSymbols = [
      ["🎯","☢️","🎲","💡","🎯","⌛","🎙️","🎯","⏱️","☢️","💡","🪙","🎁","🎲","🪙","🎲",],
      ["🪙","💡","🧑🏻‍🦲","☢️","🍄","🪙","☢️","💡","🧑🏻‍🦲","⌛","🧑🏻‍🦲","🪙","🎯","⌛","💡","💡",],
      ["☢️","🪙","🎁","⌛","🪙","🎯","🎙️","🎲","💰","⌛","🎲","⌛","💡","🪙","🧑🏻‍🦲","🧑🏻‍🦲",],
    ];
    document.getElementById("numero").style.color="#00AA00";
    document.getElementById("voitto").style.color="#00AA00";
    document.getElementById("voitto").innerHTML=eivoittoa;
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
      ["🎙️","🍄","⏱️","🎯","🧑🏻‍🦲","🎙️","🍄","🧑🏻‍🦲","🎯","🧑🏻‍🦲","☢️","🎯","☢️","☢️","🎯","💡",],
      ["🎯","🧪","💡","🎙️","🍄","⏱️","🎙️","⏱️","🎙️","🧪","💡","🎙️","💡","🍄","🎙️","💡",],
      ["🧪","🎯","🍄","💡","🎯","💡","🍄","🎯","⏱️","🧪","🧑🏻‍🦲","🎯","🎙️","⏱️","🧪","💡",],
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
      ["🎁","💡","🎙️","🧪","🎯","⏱️","🎙️","🧪","🎁","🎙️","💡","🍄","🎙️","🍄","🎯","⏱️",],
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
        ["🧪","☢️","⏱️","🍄","🧑🏻‍🦲","🍄","💰","🧑🏻‍🦲","🎯","🧑🏻‍🦲","☢️","🍄","☢️","💰","🍄","🧑🏻‍🦲",],
        ["💰","💡","💰","☢️","🎲","☢️","💰","🍄","🧑🏻‍🦲","🎯","💡","⏱️","🧪","🎲","🧪","🧑🏻‍🦲",],
        ["⏱️","🎯","☢️","🧪","🎯","🎲","☢️","🎯","🍄","🧪","💰","☢️","🎯","⏱️","🎲","🧑🏻‍🦲",],
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