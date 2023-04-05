import random

breed_list = ["Thoroughbred", "Arabian", "QuarterHorse", "PaintHorse", "Appaloosa",
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
                   "Taishuh", "Tawleed", "Tchernomor", "Waler", "Wielkopolski", "Knugget"]

related_words = ["Mare", "Stallion", "Filly", "Foal", "Colt", "Pony", "Plinko", "Horse"]

locations = ["Helsinki", "Lexington", "BuenosAires", "Dubai", "Paris", "Tokyo", "Orlando", "Aachen", "Sydney"]

password_list = []
for i in range(10):
    breed1, breed2 = random.sample(breed_list, 2)
    related_word = random.choice(related_words)
    location = random.choice(locations)
    password = f"{breed1}-{location}-{related_word}-{random.randint(0, 99):02}"
    password_list.append(password)

print(password_list)
