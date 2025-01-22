const questions: Record<string, string> = {
  "Arthur Conan Doyle":
    "“Adventure of Sherlock Holmes” was written by which writer?",
  Andes: "Which mountain range is the longest in the world?",
  Beetle: "What vehicle is Volkswagen best known for in the world?",
  Beyonce: "Which musical legend is Jay-Z married to?",
  Cotton: "According to the commercial, “what is the fabric of our lives”?",
  Chameleon:
    "What animal is known for its ability to change color to match its surroundings?",
  "Coca-Cola":
    "Which popular soft drink was originally created as a medicine in the 19th century?",
  Durian:
    "What fruit is known as the “king of fruits” and is banned in many hotels and public transportation in Southeast Asia due to its strong smell?",
  Dallas:
    "What prime time soap opera aired on CBS about the saga of the Ewing family and its massive oil empire based in a major city of Texas?",
  Earthquakes: "Which natural disaster is measured with a Richter scale?",
  Ear: "The smallest bone in the human body can be found in which body part?",
  "Elon Musk": "Who is the richest person in the world as of 2021?",
  "Florence Nightingale":
    "Who was the famous nurse known for her work during the Crimean War and is considered the founder of modern nursing?",
  Femur: "What is the largest bone in the human body?",
  Google: "Larry Page is the CEO of which company?",
  Greenland: "What is the largest island in the world?",
  Gucci:
    "Which fashion brand made the “Genius Jeans” that became part of the Guinness World Records?",
  Horse: "Which animal can be seen on the Porsche logo?",
  Hippopotamus: "What animal’s milk is pink?",
  Illinois:
    "Before becoming President, Barack Obama served as a U.S. Senator from which state?",
  Iliad:
    "What is the title of the classic Greek epic attributed to Homer, telling the story of the Trojan War?",
  Isthmus:
    "A narrow strip of land with sea on either side, forming a link between two larger areas of land is known as an",
  "Joaquin Phoenix":
    "Who won the Academy Award for Best Actor for his role in the 2020 film 'Joker'?",
  Japan: "Which country is known as the Land of the Rising Sun?",
  Kale: "What vegetable used to be known as 'Peasants Cabbage', reflecting its status as a common food for the poor in many parts of Europe?",
  "Kal-El": "What was Superman’s birth name?",
  "Kylie Jenner":
    "Who did Forbes name the youngest self-made billionaire in 2019?",
  Legwarmers: "What fashion fad did the 1983 film 'Flashdance' make popular?",
  "Leonardo da Vinci": "Who painted the Mona Lisa?",
  "Marie Curie": "Who was the first woman to win a Nobel Prize (in 1903)?",
  Monopoly:
    "Which of these games includes the phrase 'Do not pass go, do not collect $200'?",
  "Neil Armstrong": "Who was the first man to moon walk?",
  Nike: "What is the world’s largest supplier of athletic shoes and apparel and is named after the Greek goddess of victory?",
  Olympus: "What is the name of the home of the Greek Gods?",
  Odin: "Thor was the son of which God?",
  Onion: "What is the state vegetable of Texas?",
  "Pac-Man":
    "What classic video game requires you to eat all the dots throughout a maze?",
  "P. Diddy": "Which name is rapper Sean Combs better known by?",
  Quench:
    "What word shares its meaning for putting out a fire and satisfying one’s thirst?",
  Quill:
    "What writing tool preceded the invention of the metal-nibbed pen and is made from a moulted flight feather?",
  Reddit:
    "This social news and discussion website is known for their community building characterized by 'r/'",
  "Reykjavik, Iceland": "What is the northernmost capital city in the world?",
  Rolex: "Which watch company has a pointed crown as its logo?",
  School: "What do you call a group of fish?",
  "Spongebob Squarepants":
    "Which cartoon character lives in a pineapple under the sea?",
  Tequila: "What type of alcohol is traditionally used in a margarita?",
  Twin: "What is the smallest size bed available in the United States?",
  Tulips:
    "What type of flowers are often associated with Holland and most commonly symbolize deep love?",
  Unicorn: "What is the official animal of Scotland?",
  "Uncanny valley":
    "This is a psychological phenomenon that describes the feeling of unease when confronted with something that is almost human but not quite",
  "Vatican City": "What is the smallest country in the world?",
  Venison: "What name does deer meat go by?",
  Vertebrae: "What are the bones in your spine called?",
  Wellington: "What is the capital of New Zealand?",
  Waterloo:
    "On Sunday 18th June 1815, which famous battle took place and also shares a name with a brand of sparkling water?",
  "Where’s Waldo":
    "What popular children’s puzzle book consisted of detailed pages of crowds where one must look for a red and white striped man?",
  "X-Ray":
    "This is an example of an imaging procedure that uses radiation to produce pictures of the inside of the body",
  "X-men":
    "What Marvel Comics features a superhero team of mutants with superhuman abilities generally manifesting during puberty?",
  Yogurt:
    "What food item is made when combining heated milk with bacteria in incubation at warm temperatures?",
  Yugoslavia:
    "What was the name of the country in Central and Southeast Europe that translates to 'Land of the South Slavs'?",
  Zombies:
    "What creature do most players first encounter in the popular kids game Minecraft?",
  Zootopia:
    "What 2016 Disney Animated buddy cop comedy film features Nick Wilde and Judy Hopps?",
  Zimbabwe:
    "What country features the 355-foot Victoria Falls and is also known for their hyperinflation crisis?",
  Muppets: "Who are famous puppet characters created by Jim Henson?",
  "Apollo 11": "What was the first manned moon landing mission?",
  "Eiffel Tower": "What is a famous iron tower in Paris?",
  "Great Wall of China": "What is a historic fortification in China?",
  "Jurassic Park": "What is a famous dinosaur-themed movie?",
  "Mount Everest": "What is the tallest mountain in the world?",
  Shakespeare: "Who wrote 'Romeo and Juliet'?",
  Titanic: "What was the name of the famous sunken ship from 1912?",
  "Walt Disney": "Who founded Disneyland?",
  "World War II": "What was a major global conflict from 1939 to 1945?",
  "Harry Potter": "Who is the boy wizard in J.K. Rowling's books?",
  "Albert Einstein":
    "Who is the famous physicist known for the theory of relativity?",
  Rome: "What is the capital city of Italy?",
  Cleopatra: "Who was the last active ruler of Ancient Egypt?",
  "Amazon Rainforest": "What is the largest rainforest in the world?",
  Chernobyl: "Where did a nuclear disaster occur in 1986?",
  "Statue of Liberty": "What is the famous statue in New York Harbor?",
  "Pyramids of Giza": "What are the ancient Egyptian tomb structures called?",
  "Napoleon Bonaparte":
    "Who was the French military leader who became emperor?",
  "Martin Luther King Jr.": "Who delivered the 'I Have a Dream' speech?",
  Stonehenge: "What ancient stone circle is located in England?",
  "Alexander the Great": "Who was the ancient Macedonian king and conqueror?",
  "Mona Lisa": "What is the famous painting housed in the Louvre?",
  "Nelson Mandela":
    "Who was the South African leader who fought against apartheid?",
  Colosseum: "What is the famous ancient amphitheater in Rome?",
  "Big Bang Theory": "What theory explains the origin of the universe?",
  "Wright Brothers":
    "Who were the aviation pioneers who achieved the first powered flight?",
  "Sahara Desert": "What is the largest desert in the world?",
  "George Washington": "Who was the first President of the United States?",
  "Nile River": "What is the longest river in the world?",
  "Isaac Newton": "Who developed the theory of gravity?",
  "Mandarin Chinese": "What is the most spoken language in the world?",
  "Vincent van Gogh": "Who painted 'Starry Night'?",
  "Pacific Ocean": "What is the largest ocean on Earth?",
  "Alexander Fleming": "Who discovered penicillin?",
  Au: "What is the chemical symbol for gold?",
  Monaco: "Which country has the highest life expectancy? (as of 2024)",
  Smith: "What is the most common surname in the United States?",
  Apollo: "Who was the Greek god of music, poetry, and healing?",
  Delta: "What is the 4th letter of the Greek alphabet?",
  Calligraphy:
    "What art form is described as 'decorative handwriting or handwritten lettering'?",
  Microsoft: "What software company is headquartered in Redmond, Washington?",
  Heights: "What is acrophobia a fear of?",
  "Saint Stephen's Day": "December 26 is known by what names in Ireland?",
  Nokia: "What phone company produced the 3310?",
  Walmart: "What is the world’s largest retailer?",
  Friday: "Which day of the week does the Jewish Sabbath begin?",
  Palindrome:
    "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
  Taoism:
    "What is the name of the Chinese philosophical system that emphasizes harmony with nature?",
  Tanzania: "In which country would you find Mount Kilimanjaro?",
  True: "True or false: Halloween originated as an ancient Irish festival.",
  "Mexico City": "What is the largest Spanish-speaking city in the world?",
  Sweden: "Which country has the most islands?",
  Georgia: "In which U.S. state is the country's busiest airport located?",
  Africa: "Which is the only continent with land in all four hemispheres?",
  "Colorado River": "Which river flows through the Grand Canyon?",
  Venezuela: "Where is Angel Falls, the world’s largest waterfall, located?",
  Albany: "What is the state capital of New York?",
  Antarctica: "On which continent would you find the world’s largest desert?",
  Dublin: "What is the capital of Ireland?",
  "Rhode Island": "What is the smallest U.S. state by area?",
  Redwood: "What is the tallest type of tree?",
  Holland:
    "Another name for The Netherlands, derived from 'Houtland', or “Wooded Land”",
  Superior: "What is the biggest of the five Great Lakes?",
  Sofia: "Fill in the blanks: The capital of Bulgaria is _ofi_.",
  Ottawa: "What is the capital of Canada?",
  Copenhagen: "In what capital would you find The Little Mermaid statue?",
  Asia: "On which continent would you find the city of Baku?",
  Nepal: "What is the only flag that does not have four sides?",
  Bermuda: "What country features a shipwreck on its national flag?",
  Ukraine: "In what country is the Chernobyl nuclear plant located?",
  "Sargasso Sea": "Which is the only sea without any coastlines?",
  "Ural Mountains": "What mountain range separates Europe and Asia?",
  Prunes: "What is the common name for dried plums?",
  Maize: "What other name does “corn” go by?",
  Chickpeas: "What’s the primary ingredient in hummus?",
  Brazil: "Which country produces the most coffee in the world?",
  China: "Which country invented tea?",
  Vodka: "Which kind of alcohol is Russia notoriously known for?",
  Paella: "What is the national dish of Spain?",
  Germany: "Which European nation was said to invent hot dogs?",
  Italy: "Which country is responsible for giving us pizza and pasta?",
  "Rice noodles": "What is the main ingredient in the Vietnamese soup pho?",
  Tiramisu:
    "What is the name of the Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese?",
  Tempura:
    "This Japanese dish consists of battered and fried seafood or vegetables.",
  Switzerland:
    "Which country is famous for its chocolate and is home to brands like Lindt and Toblerone?",
  Heart: "Which organ has four chambers?",
  Leg: "In which body part can you find the femur?",
  Skin: "What is your body’s largest organ?",
  Neurons: "What kind of cells are found in the brain?",
  "Knee cap": "Which bone are babies born without?",
  Calcium: "Which element is said to keep bones strong?",
  Chile:
    "What is the name of the thin and long country that spans more than half of the western coast of South America?",
  Alaska: "Which American state is the largest (by area)?",
  "Canada and the USA":
    "Which two countries share the longest international border?",
  "New Zealand": "Wellington is the capital of which country?",
  Nile: "What is the name of the world’s longest river?",
  Agra: "Which city in India would you find the Taj Mahal in?",
  Sicily: "What is the largest island in the Mediterranean Sea?",
  Rising: "Japan is known as the Land of the _____ Sun?",
  Uganda: "Which African country is known as the “Pearl of Africa”?",
  "Yangtze River": "Which Asian river is considered the longest?",
  Pharaohs: "By what name were the Egyptian kings/rulers known?",
  Three: "How many Pyramids of Giza were made?",
  Gaul: "Where did the Franks settle after defeating the Romans?",
  Catholicism: "Which religion dominated the Middle Ages?",
  Austria: "In which country Adolph Hitler was born?",
  "Joseph Stalin":
    "Who was the leader of the Soviet Union during World War II?",
  Mayflower:
    "What was the name of the ship that brought the Pilgrims to America in 1620?",
  "N’ SYNC":
    "What was the name of the group Justin Timberlake used to be part of?",
  "Led Zeppelin": "What was the name of the rock band formed by Jimmy Page?",
  Australia: "Which country did AC/DC originate in?",
  Country: "What genre of music did Taylor Swift start in?",
  "Boy George":
    "Who was the lead singer of the iconic ‘80s band, Culture Club?",
  Ten: "How many Grammys does John Legend have?",
  "Spice Girls": "Which British girl group had a member by the name of Mel B?",
  "Michael Jackson":
    "Who is often referred to as the “King of Pop” and is known for iconic hits like “Thriller” and “Billie Jean”?",
  Achilles: "Which warrior’s weakness was their heel?",
  Hermes: "Who was the messenger of the gods?",
  Valhalla: "What’s the name of the paradise warriors go to after death?",
  "She-wolf": "Romulus and Remus were raised by what animal?",
  Mars: "The Roman God of War inspired the name of which planet?",
  Ra: "What was the name of the Egyptian God of the Sun?",
  Jackal: "Anubis, the God of Death, had the head of a…",
};

export default questions;
