const breedList = ["Thoroughbred", "Arabian", "QuarterHorse", "PaintHorse", "Appaloosa",
                   "Walking", "Standardbred", "Andalusian", "Percheron", "Morgan", "Friesian",
                   "PasoFino", "Welsh", "Shetland", "Clydesdale", "Palomino", "Haflinger",
                   "Mustang", "AkhalTeke", "GypsyVanner", "Pegasus", "Lusitano", "Connemara",
                   "Trakehner", "Hanoverian", "Oldenburg", "SelleFrancais", "Holsteiner",
                   "IrishSport", "Lipizzan", "Freiberger", "Knabstrupper", "RockyMountain",
                   "TennesseeWalking", "AmericanSaddlebred", "Icelandic", "Peruvian", "Canadian",
                   "DutchWarmblood", "Fjord", "NorwegianFjord", "BelgianWarmblood", "SwedishWarmblood",
                   "DanishWarmblood", "GermanWarmblood", "AustralianStock", "Criollo",
                   "SuffolkPunch", "NewForest", "WelshCob", "Hackney", "Highland",
                   "ThuringianWarmblood", "Westphalian", "Fell", "Galician",
                   "ArabianCross", "Trotter", "Gelderlander", "OrlovTrotter", "Pintabian",
                   "Morab", "Warlander", "IrishCob", "Dartmoor", "Exmoor",
                   "BashkirCurly", "BlackForest", "Brandenburger", "HaflingerCross",
                   "IrishDraught", "Jutland", "Karabakh", "LipizzanCross", "Mecklenburger",
                   "Miniature", "Mule", "MustangCross", "NormanCob", "Pleven", "Sanhe",
                   "SchleswigerHeavyDraft", "Schwarzwald", "Senner", "SpanishJennet",
                   "Taishuh", "Tawleed", "Tchernomor", "Waler", "Wielkopolski", "Knugget"];

const relatedWords = ["Mare", "Stallion", "Filly", "Foal", "Colt", "Pony", "Plinko", "Horse"];

let locations = ["Helsinki", "Lexington", "BuenosAires", "Dubai", "Paris", "Tokyo", "Orlando", "Aachen", "Sydney"];

const numPasswords = 10;

const generatePasswordsButton = document.getElementById("generateButton");
generatePasswordsButton.addEventListener("click", generatePasswords);

const passwordContainer = document.getElementById("passwords");

function generatePasswords() {
  passwordContainer.innerHTML = "";
  for (let i = 0; i < numPasswords; i++) {
    const [breed1, breed2] = pickRandomElements(breedList, 2);
    const relatedWord = pickRandomElement(relatedWords);
    const location = pickRandomElement(locations);
    const password = `${breed1}-${relatedWord}-${location}-${padNumber(getRandomInt(0, 99))}`;
    const passwordElement = document.createElement("div");
    passwordElement.onclick = (evt) => {
      copyToClipboard(password);
    }
    passwordElement.classList.add("password");
    passwordElement.title = "Click to copy password to clipboard!";
    passwordElement.textContent = password;
    passwordContainer.appendChild(passwordElement);
  }
}

function pickRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickRandomElements(arr, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(pickRandomElement(arr));
  }
  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

generatePasswords()
