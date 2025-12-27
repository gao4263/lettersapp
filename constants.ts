import { PhonicsItem } from './types';

// Helper to generate placeholder images based on the word
const getImg = (text: string) => `https://picsum.photos/seed/${text}/400/400`;

// --- 1. ALPHABET (26 Letters) ---
export const LETTER_DATA: PhonicsItem[] = [
  {
    id: 'a', symbol: 'Aa', name: 'Letter A', category: 'Vowel',
    soundPrompt: 'The letter A makes the sound æ, as in Apple.',
    examples: [
      { word: 'Apple', phonetic: '/ˈæp.əl/', image: getImg('apple') },
      { word: 'Ant', phonetic: '/ænt/', image: getImg('ant') },
      { word: 'Axe', phonetic: '/æks/', image: getImg('axe') },
      { word: 'Alligator', phonetic: '/ˈæl.ɪ.ɡeɪ.tər/', image: getImg('alligator') }
    ]
  },
  {
    id: 'b', symbol: 'Bb', name: 'Letter B', category: 'Consonant',
    soundPrompt: 'The letter B makes the sound b, as in Ball.',
    examples: [
      { word: 'Ball', phonetic: '/bɔːl/', image: getImg('ball') },
      { word: 'Bear', phonetic: '/ber/', image: getImg('bear') },
      { word: 'Bed', phonetic: '/bed/', image: getImg('bed') },
      { word: 'Bus', phonetic: '/bʌs/', image: getImg('bus') }
    ]
  },
  {
    id: 'c', symbol: 'Cc', name: 'Letter C', category: 'Consonant',
    soundPrompt: 'The letter C makes the sound k, as in Cat.',
    examples: [
      { word: 'Cat', phonetic: '/kæt/', image: getImg('cat') },
      { word: 'Car', phonetic: '/kɑːr/', image: getImg('car') },
      { word: 'Cup', phonetic: '/kʌp/', image: getImg('cup') },
      { word: 'Cake', phonetic: '/keɪk/', image: getImg('cake') }
    ]
  },
  {
    id: 'd', symbol: 'Dd', name: 'Letter D', category: 'Consonant',
    soundPrompt: 'The letter D makes the sound d, as in Dog.',
    examples: [
      { word: 'Dog', phonetic: '/dɔːɡ/', image: getImg('dog') },
      { word: 'Duck', phonetic: '/dʌk/', image: getImg('duck') },
      { word: 'Doll', phonetic: '/dɒl/', image: getImg('doll') },
      { word: 'Door', phonetic: '/dɔːr/', image: getImg('door') }
    ]
  },
  {
    id: 'e', symbol: 'Ee', name: 'Letter E', category: 'Vowel',
    soundPrompt: 'The letter E makes the sound eh, as in Elephant.',
    examples: [
      { word: 'Elephant', phonetic: '/ˈel.ɪ.fənt/', image: getImg('elephant') },
      { word: 'Egg', phonetic: '/eɡ/', image: getImg('egg') },
      { word: 'Eye', phonetic: '/aɪ/', image: getImg('eye') },
      { word: 'Ear', phonetic: '/ɪər/', image: getImg('ear') }
    ]
  },
  {
    id: 'f', symbol: 'Ff', name: 'Letter F', category: 'Consonant',
    soundPrompt: 'The letter F makes the sound fff, as in Fish.',
    examples: [
      { word: 'Fish', phonetic: '/fɪʃ/', image: getImg('fish') },
      { word: 'Fan', phonetic: '/fæn/', image: getImg('fan') },
      { word: 'Frog', phonetic: '/frɒɡ/', image: getImg('frog') },
      { word: 'Five', phonetic: '/faɪv/', image: getImg('five') }
    ]
  },
  {
    id: 'g', symbol: 'Gg', name: 'Letter G', category: 'Consonant',
    soundPrompt: 'The letter G makes the sound g, as in Goat.',
    examples: [
      { word: 'Goat', phonetic: '/ɡəʊt/', image: getImg('goat') },
      { word: 'Girl', phonetic: '/ɡɜːl/', image: getImg('girl') },
      { word: 'Gate', phonetic: '/ɡeɪt/', image: getImg('gate') },
      { word: 'Gift', phonetic: '/ɡɪft/', image: getImg('gift') }
    ]
  },
  {
    id: 'h', symbol: 'Hh', name: 'Letter H', category: 'Consonant',
    soundPrompt: 'The letter H makes the sound hhh, as in Hat.',
    examples: [
      { word: 'Hat', phonetic: '/hæt/', image: getImg('hat') },
      { word: 'House', phonetic: '/haʊs/', image: getImg('house') },
      { word: 'Horse', phonetic: '/hɔːs/', image: getImg('horse') },
      { word: 'Hand', phonetic: '/hænd/', image: getImg('hand') }
    ]
  },
  {
    id: 'i', symbol: 'Ii', name: 'Letter I', category: 'Vowel',
    soundPrompt: 'The letter I makes the sound ih, as in Igloo.',
    examples: [
      { word: 'Igloo', phonetic: '/ˈɪɡ.luː/', image: getImg('igloo') },
      { word: 'Insect', phonetic: '/ˈɪn.sekt/', image: getImg('insect') },
      { word: 'Ink', phonetic: '/ɪŋk/', image: getImg('ink') },
      { word: 'Iguana', phonetic: '/ɪˈɡwɑː.nə/', image: getImg('iguana') }
    ]
  },
  {
    id: 'j', symbol: 'Jj', name: 'Letter J', category: 'Consonant',
    soundPrompt: 'The letter J makes the sound j, as in Jelly.',
    examples: [
      { word: 'Jelly', phonetic: '/ˈdʒel.i/', image: getImg('jelly') },
      { word: 'Jar', phonetic: '/dʒɑːr/', image: getImg('jar') },
      { word: 'Jet', phonetic: '/dʒet/', image: getImg('jet') },
      { word: 'Juice', phonetic: '/dʒuːs/', image: getImg('juice') }
    ]
  },
  {
    id: 'k', symbol: 'Kk', name: 'Letter K', category: 'Consonant',
    soundPrompt: 'The letter K makes the sound k, as in Kite.',
    examples: [
      { word: 'Kite', phonetic: '/kaɪt/', image: getImg('kite') },
      { word: 'Key', phonetic: '/kiː/', image: getImg('key') },
      { word: 'King', phonetic: '/kɪŋ/', image: getImg('king') },
      { word: 'Koala', phonetic: '/kəʊˈɑː.lə/', image: getImg('koala') }
    ]
  },
  {
    id: 'l', symbol: 'Ll', name: 'Letter L', category: 'Consonant',
    soundPrompt: 'The letter L makes the sound lll, as in Lion.',
    examples: [
      { word: 'Lion', phonetic: '/ˈlaɪ.ən/', image: getImg('lion') },
      { word: 'Leaf', phonetic: '/liːf/', image: getImg('leaf') },
      { word: 'Lamp', phonetic: '/læmp/', image: getImg('lamp') },
      { word: 'Lemon', phonetic: '/ˈlem.ən/', image: getImg('lemon') }
    ]
  },
  {
    id: 'm', symbol: 'Mm', name: 'Letter M', category: 'Consonant',
    soundPrompt: 'The letter M makes the sound mmm, as in Moon.',
    examples: [
      { word: 'Moon', phonetic: '/muːn/', image: getImg('moon') },
      { word: 'Mouse', phonetic: '/maʊs/', image: getImg('mouse') },
      { word: 'Monkey', phonetic: '/ˈmʌŋ.ki/', image: getImg('monkey') },
      { word: 'Milk', phonetic: '/mɪlk/', image: getImg('milk') }
    ]
  },
  {
    id: 'n', symbol: 'Nn', name: 'Letter N', category: 'Consonant',
    soundPrompt: 'The letter N makes the sound nnn, as in Nest.',
    examples: [
      { word: 'Nest', phonetic: '/nest/', image: getImg('nest') },
      { word: 'Net', phonetic: '/net/', image: getImg('net') },
      { word: 'Nose', phonetic: '/nəʊz/', image: getImg('nose') },
      { word: 'Nine', phonetic: '/naɪn/', image: getImg('nine') }
    ]
  },
  {
    id: 'o', symbol: 'Oo', name: 'Letter O', category: 'Vowel',
    soundPrompt: 'The letter O makes the sound ah, as in Octopus.',
    examples: [
      { word: 'Octopus', phonetic: '/ˈɒk.tə.pəs/', image: getImg('octopus') },
      { word: 'Orange', phonetic: '/ˈɒr.ɪndʒ/', image: getImg('orange') },
      { word: 'Owl', phonetic: '/aʊl/', image: getImg('owl') },
      { word: 'Ox', phonetic: '/ɒks/', image: getImg('ox') }
    ]
  },
  {
    id: 'p', symbol: 'Pp', name: 'Letter P', category: 'Consonant',
    soundPrompt: 'The letter P makes the sound p, as in Pig.',
    examples: [
      { word: 'Pig', phonetic: '/pɪɡ/', image: getImg('pig') },
      { word: 'Pen', phonetic: '/pen/', image: getImg('pen') },
      { word: 'Pan', phonetic: '/pæn/', image: getImg('pan') },
      { word: 'Pizza', phonetic: '/ˈpiːt.sə/', image: getImg('pizza') }
    ]
  },
  {
    id: 'q', symbol: 'Qq', name: 'Letter Q', category: 'Consonant',
    soundPrompt: 'The letter Q makes the sound kw, as in Queen.',
    examples: [
      { word: 'Queen', phonetic: '/kwiːn/', image: getImg('queen') },
      { word: 'Quilt', phonetic: '/kwɪlt/', image: getImg('quilt') },
      { word: 'Quiet', phonetic: '/ˈkwaɪ.ət/', image: getImg('quiet') },
      { word: 'Question', phonetic: '/ˈkwes.tʃən/', image: getImg('question') }
    ]
  },
  {
    id: 'r', symbol: 'Rr', name: 'Letter R', category: 'Consonant',
    soundPrompt: 'The letter R makes the sound rrr, as in Rabbit.',
    examples: [
      { word: 'Rabbit', phonetic: '/ˈræb.ɪt/', image: getImg('rabbit') },
      { word: 'Robot', phonetic: '/ˈrəʊ.bɒt/', image: getImg('robot') },
      { word: 'Rain', phonetic: '/reɪn/', image: getImg('rain') },
      { word: 'Rose', phonetic: '/rəʊz/', image: getImg('rose') }
    ]
  },
  {
    id: 's', symbol: 'Ss', name: 'Letter S', category: 'Consonant',
    soundPrompt: 'The letter S makes the sound sss, as in Sun.',
    examples: [
      { word: 'Sun', phonetic: '/sʌn/', image: getImg('sun') },
      { word: 'Snake', phonetic: '/sneɪk/', image: getImg('snake') },
      { word: 'Star', phonetic: '/stɑːr/', image: getImg('star') },
      { word: 'Sock', phonetic: '/sɒk/', image: getImg('sock') }
    ]
  },
  {
    id: 't', symbol: 'Tt', name: 'Letter T', category: 'Consonant',
    soundPrompt: 'The letter T makes the sound t, as in Tiger.',
    examples: [
      { word: 'Tiger', phonetic: '/ˈtaɪ.ɡər/', image: getImg('tiger') },
      { word: 'Tree', phonetic: '/triː/', image: getImg('tree') },
      { word: 'Table', phonetic: '/ˈteɪ.bəl/', image: getImg('table') },
      { word: 'Ten', phonetic: '/ten/', image: getImg('ten') }
    ]
  },
  {
    id: 'u', symbol: 'Uu', name: 'Letter U', category: 'Vowel',
    soundPrompt: 'The letter U makes the sound uh, as in Umbrella.',
    examples: [
      { word: 'Umbrella', phonetic: '/ʌmˈbrel.ə/', image: getImg('umbrella') },
      { word: 'Up', phonetic: '/ʌp/', image: getImg('up') },
      { word: 'Under', phonetic: '/ˈʌn.dər/', image: getImg('under') },
      { word: 'Uncle', phonetic: '/ˈʌŋ.kəl/', image: getImg('uncle') }
    ]
  },
  {
    id: 'v', symbol: 'Vv', name: 'Letter V', category: 'Consonant',
    soundPrompt: 'The letter V makes the sound vvv, as in Van.',
    examples: [
      { word: 'Van', phonetic: '/væn/', image: getImg('van') },
      { word: 'Violin', phonetic: '/ˌvaɪ.əˈlɪn/', image: getImg('violin') },
      { word: 'Vest', phonetic: '/vest/', image: getImg('vest') },
      { word: 'Vase', phonetic: '/vɑːz/', image: getImg('vase') }
    ]
  },
  {
    id: 'w', symbol: 'Ww', name: 'Letter W', category: 'Consonant',
    soundPrompt: 'The letter W makes the sound w, as in Watch.',
    examples: [
      { word: 'Watch', phonetic: '/wɒtʃ/', image: getImg('watch') },
      { word: 'Water', phonetic: '/ˈwɔː.tər/', image: getImg('water') },
      { word: 'Wolf', phonetic: '/wʊlf/', image: getImg('wolf') },
      { word: 'Web', phonetic: '/web/', image: getImg('web') }
    ]
  },
  {
    id: 'x', symbol: 'Xx', name: 'Letter X', category: 'Consonant',
    soundPrompt: 'The letter X makes the sound ks, as in Box.',
    examples: [
      { word: 'Box', phonetic: '/bɒks/', image: getImg('box') },
      { word: 'Fox', phonetic: '/fɒks/', image: getImg('fox') },
      { word: 'Six', phonetic: '/sɪks/', image: getImg('six') },
      { word: 'X-ray', phonetic: '/ˈeks.reɪ/', image: getImg('x-ray') }
    ]
  },
  {
    id: 'y', symbol: 'Yy', name: 'Letter Y', category: 'Consonant',
    soundPrompt: 'The letter Y makes the sound y, as in Yo-yo.',
    examples: [
      { word: 'Yo-yo', phonetic: '/ˈjəʊ.jəʊ/', image: getImg('yoyo') },
      { word: 'Yarn', phonetic: '/jɑːn/', image: getImg('yarn') },
      { word: 'Yellow', phonetic: '/ˈjel.əʊ/', image: getImg('yellow') },
      { word: 'Yak', phonetic: '/jæk/', image: getImg('yak') }
    ]
  },
  {
    id: 'z', symbol: 'Zz', name: 'Letter Z', category: 'Consonant',
    soundPrompt: 'The letter Z makes the sound zzz, as in Zebra.',
    examples: [
      { word: 'Zebra', phonetic: '/ˈzeb.rə/', image: getImg('zebra') },
      { word: 'Zoo', phonetic: '/zuː/', image: getImg('zoo') },
      { word: 'Zero', phonetic: '/ˈzɪə.rəʊ/', image: getImg('zero') },
      { word: 'Zipper', phonetic: '/ˈzɪp.ər/', image: getImg('zipper') }
    ]
  }
];

// --- 2. LETTER COMBINATIONS (Digraphs, Blends, Vowel Teams) ---
export const COMBO_DATA: PhonicsItem[] = [
  // Digraphs
  {
    id: 'sh', symbol: 'sh', name: 'Digraph SH',
    soundPrompt: 'The letters S and H together make the sound shhh.',
    examples: [
      { word: 'Ship', phonetic: '/ʃɪp/', image: getImg('ship') },
      { word: 'Sheep', phonetic: '/ʃiːp/', image: getImg('sheep') },
      { word: 'Fish', phonetic: '/fɪʃ/', image: getImg('fish') },
      { word: 'Shoe', phonetic: '/ʃuː/', image: getImg('shoe') }
    ]
  },
  {
    id: 'ch', symbol: 'ch', name: 'Digraph CH',
    soundPrompt: 'The letters C and H together make the sound ch, like choo choo.',
    examples: [
      { word: 'Chair', phonetic: '/tʃer/', image: getImg('chair') },
      { word: 'Cheese', phonetic: '/tʃiːz/', image: getImg('cheese') },
      { word: 'Chick', phonetic: '/tʃɪk/', image: getImg('chick') },
      { word: 'Beach', phonetic: '/biːtʃ/', image: getImg('beach') }
    ]
  },
  {
    id: 'th_unvoiced', symbol: 'th', name: 'Unvoiced TH',
    soundPrompt: 'The letters T and H together make the soft sound th, as in Thumb.',
    examples: [
      { word: 'Thumb', phonetic: '/θʌm/', image: getImg('thumb') },
      { word: 'Three', phonetic: '/θriː/', image: getImg('three') },
      { word: 'Bath', phonetic: '/bɑːθ/', image: getImg('bath') },
      { word: 'Teeth', phonetic: '/tiːθ/', image: getImg('teeth') }
    ]
  },
  {
    id: 'th_voiced', symbol: 'th', name: 'Voiced TH',
    soundPrompt: 'The letters T and H can also make the buzzing sound th, as in That.',
    examples: [
      { word: 'This', phonetic: '/ðɪs/', image: getImg('pointing') },
      { word: 'That', phonetic: '/ðæt/', image: getImg('that') },
      { word: 'Feather', phonetic: '/ˈfeð.ər/', image: getImg('feather') },
      { word: 'Mother', phonetic: '/ˈmʌð.ər/', image: getImg('mother') }
    ]
  },
  {
    id: 'ph', symbol: 'ph', name: 'Digraph PH',
    soundPrompt: 'The letters P and H together make the sound fff.',
    examples: [
      { word: 'Phone', phonetic: '/fəʊn/', image: getImg('phone') },
      { word: 'Photo', phonetic: '/ˈfəʊ.təʊ/', image: getImg('photo') },
      { word: 'Dolphin', phonetic: '/ˈdɒl.fɪn/', image: getImg('dolphin') },
      { word: 'Elephant', phonetic: '/ˈel.ɪ.fənt/', image: getImg('elephant') }
    ]
  },
  {
    id: 'wh', symbol: 'wh', name: 'Digraph WH',
    soundPrompt: 'The letters W and H make the sound w, as in Whale.',
    examples: [
      { word: 'Whale', phonetic: '/weɪl/', image: getImg('whale') },
      { word: 'Wheel', phonetic: '/wiːl/', image: getImg('wheel') },
      { word: 'White', phonetic: '/waɪt/', image: getImg('white') },
      { word: 'Whistle', phonetic: '/ˈwɪs.əl/', image: getImg('whistle') }
    ]
  },
  {
    id: 'ck', symbol: 'ck', name: 'Digraph CK',
    soundPrompt: 'The letters C and K together make the sound k at the end of a word.',
    examples: [
      { word: 'Duck', phonetic: '/dʌk/', image: getImg('duck') },
      { word: 'Sock', phonetic: '/sɒk/', image: getImg('sock') },
      { word: 'Clock', phonetic: '/klɒk/', image: getImg('clock') },
      { word: 'Truck', phonetic: '/trʌk/', image: getImg('truck') }
    ]
  },
  {
    id: 'qu', symbol: 'qu', name: 'Blend QU',
    soundPrompt: 'The letters Q and U together make the sound kw.',
    examples: [
      { word: 'Queen', phonetic: '/kwiːn/', image: getImg('queen') },
      { word: 'Quack', phonetic: '/kwæk/', image: getImg('duck') },
      { word: 'Quiet', phonetic: '/ˈkwaɪ.ət/', image: getImg('shh') },
      { word: 'Quick', phonetic: '/kwɪk/', image: getImg('run') }
    ]
  },
  {
    id: 'ng', symbol: 'ng', name: 'Digraph NG',
    soundPrompt: 'The letters N and G make the sound ng, found at the end of words.',
    examples: [
      { word: 'Ring', phonetic: '/rɪŋ/', image: getImg('ring') },
      { word: 'King', phonetic: '/kɪŋ/', image: getImg('king') },
      { word: 'Sing', phonetic: '/sɪŋ/', image: getImg('sing') },
      { word: 'Wing', phonetic: '/wɪŋ/', image: getImg('wing') }
    ]
  },
  // Vowel Teams
  {
    id: 'ai', symbol: 'ai', name: 'Vowel Team AI',
    soundPrompt: 'A and I together make the long A sound.',
    examples: [
      { word: 'Rain', phonetic: '/reɪn/', image: getImg('rain') },
      { word: 'Train', phonetic: '/treɪn/', image: getImg('train') },
      { word: 'Snail', phonetic: '/sneɪl/', image: getImg('snail') },
      { word: 'Tail', phonetic: '/teɪl/', image: getImg('tail') }
    ]
  },
  {
    id: 'ay', symbol: 'ay', name: 'Vowel Team AY',
    soundPrompt: 'A and Y together make the long A sound at the end of a word.',
    examples: [
      { word: 'Hay', phonetic: '/heɪ/', image: getImg('hay') },
      { word: 'Play', phonetic: '/pleɪ/', image: getImg('play') },
      { word: 'Day', phonetic: '/deɪ/', image: getImg('sun') },
      { word: 'Tray', phonetic: '/treɪ/', image: getImg('tray') }
    ]
  },
  {
    id: 'ee', symbol: 'ee', name: 'Vowel Team EE',
    soundPrompt: 'Two E letters together make the long E sound.',
    examples: [
      { word: 'Tree', phonetic: '/triː/', image: getImg('tree') },
      { word: 'Bee', phonetic: '/biː/', image: getImg('bee') },
      { word: 'Feet', phonetic: '/fiːt/', image: getImg('feet') },
      { word: 'Green', phonetic: '/ɡriːn/', image: getImg('green') }
    ]
  },
  {
    id: 'ea', symbol: 'ea', name: 'Vowel Team EA',
    soundPrompt: 'E and A together often make the long E sound.',
    examples: [
      { word: 'Leaf', phonetic: '/liːf/', image: getImg('leaf') },
      { word: 'Eat', phonetic: '/iːt/', image: getImg('eat') },
      { word: 'Tea', phonetic: '/tiː/', image: getImg('tea') },
      { word: 'Sea', phonetic: '/siː/', image: getImg('sea') }
    ]
  },
  {
    id: 'oa', symbol: 'oa', name: 'Vowel Team OA',
    soundPrompt: 'O and A together make the long O sound.',
    examples: [
      { word: 'Boat', phonetic: '/bəʊt/', image: getImg('boat') },
      { word: 'Coat', phonetic: '/kəʊt/', image: getImg('coat') },
      { word: 'Soap', phonetic: '/səʊp/', image: getImg('soap') },
      { word: 'Road', phonetic: '/rəʊd/', image: getImg('road') }
    ]
  },
  // R-Controlled
  {
    id: 'ar', symbol: 'ar', name: 'R-Controlled AR',
    soundPrompt: 'A and R together make the pirate sound, ar!',
    examples: [
      { word: 'Car', phonetic: '/kɑːr/', image: getImg('car') },
      { word: 'Star', phonetic: '/stɑːr/', image: getImg('star') },
      { word: 'Jar', phonetic: '/dʒɑːr/', image: getImg('jar') },
      { word: 'Shark', phonetic: '/ʃɑːk/', image: getImg('shark') }
    ]
  },
  {
    id: 'or', symbol: 'or', name: 'R-Controlled OR',
    soundPrompt: 'O and R together make the sound or.',
    examples: [
      { word: 'Fork', phonetic: '/fɔːk/', image: getImg('fork') },
      { word: 'Corn', phonetic: '/kɔːn/', image: getImg('corn') },
      { word: 'Horn', phonetic: '/hɔːn/', image: getImg('horn') },
      { word: 'Storm', phonetic: '/stɔːm/', image: getImg('storm') }
    ]
  }
];

// --- 3. IPA (International Phonetic Alphabet - ~44-48 sounds) ---
export const IPA_DATA: PhonicsItem[] = [
  // --- Vowels (Monophthongs) ---
  {
    id: 'i_long', symbol: '/i:/', name: 'Long i', category: 'Vowel',
    description: 'Smile wide and say EEEE!',
    soundPrompt: 'This is the long vowel sound, ee.',
    examples: [
      { word: 'See', phonetic: '/siː/', image: getImg('eye') },
      { word: 'Tree', phonetic: '/triː/', image: getImg('tree') },
      { word: 'Me', phonetic: '/miː/', image: getImg('child') },
      { word: 'Eat', phonetic: '/iːt/', image: getImg('eating') }
    ]
  },
  {
    id: 'i_short', symbol: '/ɪ/', name: 'Short i', category: 'Vowel',
    description: 'Relax your mouth and say ih.',
    soundPrompt: 'This is the short vowel sound, ih.',
    examples: [
      { word: 'Sit', phonetic: '/sɪt/', image: getImg('chair') },
      { word: 'Pig', phonetic: '/pɪɡ/', image: getImg('pig') },
      { word: 'Big', phonetic: '/bɪɡ/', image: getImg('elephant') },
      { word: 'In', phonetic: '/ɪn/', image: getImg('box') }
    ]
  },
  {
    id: 'u_short', symbol: '/ʊ/', name: 'Short u', category: 'Vowel',
    description: 'Round your lips a little and say uh like in look.',
    soundPrompt: 'This is the sound uh.',
    examples: [
      { word: 'Look', phonetic: '/lʊk/', image: getImg('eyes') },
      { word: 'Book', phonetic: '/bʊk/', image: getImg('book') },
      { word: 'Foot', phonetic: '/fʊt/', image: getImg('foot') },
      { word: 'Good', phonetic: '/ɡʊd/', image: getImg('thumbsup') }
    ]
  },
  {
    id: 'u_long', symbol: '/u:/', name: 'Long u', category: 'Vowel',
    description: 'Make a tight circle with your lips and say oooo.',
    soundPrompt: 'This is the long sound, ooo.',
    examples: [
      { word: 'Moon', phonetic: '/muːn/', image: getImg('moon') },
      { word: 'Blue', phonetic: '/bluː/', image: getImg('blue') },
      { word: 'Shoe', phonetic: '/ʃuː/', image: getImg('shoe') },
      { word: 'Two', phonetic: '/tuː/', image: getImg('number2') }
    ]
  },
  {
    id: 'e_short', symbol: '/e/', name: 'Short e', category: 'Vowel',
    description: 'Open your mouth a little and say eh.',
    soundPrompt: 'This is the sound eh, as in egg.',
    examples: [
      { word: 'Egg', phonetic: '/eɡ/', image: getImg('egg') },
      { word: 'Bed', phonetic: '/bed/', image: getImg('bed') },
      { word: 'Red', phonetic: '/red/', image: getImg('red') },
      { word: 'Pen', phonetic: '/pen/', image: getImg('pen') }
    ]
  },
  {
    id: 'schwa', symbol: '/ə/', name: 'Schwa', category: 'Vowel',
    description: 'Relax your mouth completely and make a lazy uh sound.',
    soundPrompt: 'This is the schwa sound, uh.',
    examples: [
      { word: 'Teacher', phonetic: '/ˈtiː.tʃər/', image: getImg('teacher') },
      { word: 'About', phonetic: '/əˈbaʊt/', image: getImg('question') },
      { word: 'Banana', phonetic: '/bəˈnɑː.nə/', image: getImg('banana') },
      { word: 'Zebra', phonetic: '/ˈzeb.rə/', image: getImg('zebra') }
    ]
  },
  {
    id: 'bird_vowel', symbol: '/ɜ:/', name: 'Long er', category: 'Vowel',
    description: 'Open your mouth a bit and say errr.',
    soundPrompt: 'This is the long sound, err.',
    examples: [
      { word: 'Bird', phonetic: '/bɜːd/', image: getImg('bird') },
      { word: 'Girl', phonetic: '/ɡɜːl/', image: getImg('girl') },
      { word: 'Nurse', phonetic: '/nɜːs/', image: getImg('nurse') },
      { word: 'Turn', phonetic: '/tɜːn/', image: getImg('arrow') }
    ]
  },
  {
    id: 'o_long', symbol: '/ɔ:/', name: 'Long o', category: 'Vowel',
    description: 'Make your lips round and say awww.',
    soundPrompt: 'This is the sound aww.',
    examples: [
      { word: 'Door', phonetic: '/dɔːr/', image: getImg('door') },
      { word: 'Four', phonetic: '/fɔːr/', image: getImg('four') },
      { word: 'Walk', phonetic: '/wɔːk/', image: getImg('walking') },
      { word: 'Saw', phonetic: '/sɔː/', image: getImg('saw') }
    ]
  },
  {
    id: 'ae_ash', symbol: '/æ/', name: 'Ash', category: 'Vowel',
    description: 'Open your mouth wide like biting an apple and say ae.',
    soundPrompt: 'This is the sound ae.',
    examples: [
      { word: 'Cat', phonetic: '/kæt/', image: getImg('cat') },
      { word: 'Apple', phonetic: '/ˈæp.əl/', image: getImg('apple') },
      { word: 'Hat', phonetic: '/hæt/', image: getImg('hat') },
      { word: 'Map', phonetic: '/mæp/', image: getImg('map') }
    ]
  },
  {
    id: 'caret', symbol: '/ʌ/', name: 'Caret', category: 'Vowel',
    description: 'Open your mouth and make a short uh sound.',
    soundPrompt: 'This is the short sound, uh.',
    examples: [
      { word: 'Up', phonetic: '/ʌp/', image: getImg('up') },
      { word: 'Cup', phonetic: '/kʌp/', image: getImg('cup') },
      { word: 'Bus', phonetic: '/bʌs/', image: getImg('bus') },
      { word: 'Run', phonetic: '/rʌn/', image: getImg('run') }
    ]
  },
  {
    id: 'a_far', symbol: '/ɑ:/', name: 'Long a', category: 'Vowel',
    description: 'Open your mouth wide like at the dentist and say ahhh.',
    soundPrompt: 'This is the sound ahhh.',
    examples: [
      { word: 'Car', phonetic: '/kɑːr/', image: getImg('car') },
      { word: 'Far', phonetic: '/fɑːr/', image: getImg('road') },
      { word: 'Star', phonetic: '/stɑːr/', image: getImg('star') },
      { word: 'Park', phonetic: '/pɑːk/', image: getImg('park') }
    ]
  },
  {
    id: 'o_short', symbol: '/ɒ/', name: 'Short o', category: 'Vowel',
    description: 'Round your lips slightly and say oh.',
    soundPrompt: 'This is the short sound, oh.',
    examples: [
      { word: 'On', phonetic: '/ɒn/', image: getImg('switch') },
      { word: 'Hot', phonetic: '/hɒt/', image: getImg('fire') },
      { word: 'Box', phonetic: '/bɒks/', image: getImg('box') },
      { word: 'Dog', phonetic: '/dɒɡ/', image: getImg('dog') }
    ]
  },

  // --- Diphthongs ---
  {
    id: 'dip_ear', symbol: '/ɪə/', name: 'Ear', category: 'Diphthong',
    soundPrompt: 'Say ear.',
    examples: [
      { word: 'Ear', phonetic: '/ɪər/', image: getImg('ear') },
      { word: 'Near', phonetic: '/nɪər/', image: getImg('near') },
      { word: 'Here', phonetic: '/hɪər/', image: getImg('map') },
      { word: 'Year', phonetic: '/jɪər/', image: getImg('calendar') }
    ]
  },
  {
    id: 'dip_ei', symbol: '/eɪ/', name: 'Ay', category: 'Diphthong',
    soundPrompt: 'Say ay, like in day.',
    examples: [
      { word: 'Day', phonetic: '/deɪ/', image: getImg('sun') },
      { word: 'Say', phonetic: '/seɪ/', image: getImg('speak') },
      { word: 'Cake', phonetic: '/keɪk/', image: getImg('cake') },
      { word: 'Eight', phonetic: '/eɪt/', image: getImg('eight') }
    ]
  },
  {
    id: 'dip_ure', symbol: '/ʊə/', name: 'Ure', category: 'Diphthong',
    soundPrompt: 'Say ure, like in tourist.',
    examples: [
      { word: 'Cure', phonetic: '/kjʊər/', image: getImg('doctor') },
      { word: 'Tourist', phonetic: '/ˈtʊə.rɪst/', image: getImg('travel') },
      { word: 'Pure', phonetic: '/pjʊər/', image: getImg('water') },
      { word: 'Sure', phonetic: '/ʃʊər/', image: getImg('thumbsup') }
    ]
  },
  {
    id: 'dip_oi', symbol: '/ɔɪ/', name: 'Oy', category: 'Diphthong',
    soundPrompt: 'Say oy, like in boy.',
    examples: [
      { word: 'Boy', phonetic: '/bɔɪ/', image: getImg('boy') },
      { word: 'Toy', phonetic: '/tɔɪ/', image: getImg('toy') },
      { word: 'Coin', phonetic: '/kɔɪn/', image: getImg('coin') },
      { word: 'Oil', phonetic: '/ɔɪl/', image: getImg('oil') }
    ]
  },
  {
    id: 'dip_oh', symbol: '/əʊ/', name: 'Oh', category: 'Diphthong',
    soundPrompt: 'Say oh, like in go.',
    examples: [
      { word: 'Go', phonetic: '/ɡəʊ/', image: getImg('go') },
      { word: 'No', phonetic: '/nəʊ/', image: getImg('stop') },
      { word: 'Coat', phonetic: '/kəʊt/', image: getImg('coat') },
      { word: 'Hello', phonetic: '/həˈləʊ/', image: getImg('wave') }
    ]
  },
  {
    id: 'dip_air', symbol: '/eə/', name: 'Air', category: 'Diphthong',
    soundPrompt: 'Say air.',
    examples: [
      { word: 'Air', phonetic: '/eər/', image: getImg('cloud') },
      { word: 'Hair', phonetic: '/heər/', image: getImg('hair') },
      { word: 'Chair', phonetic: '/tʃeər/', image: getImg('chair') },
      { word: 'Bear', phonetic: '/beər/', image: getImg('bear') }
    ]
  },
  {
    id: 'dip_ai', symbol: '/aɪ/', name: 'Eye', category: 'Diphthong',
    soundPrompt: 'Say eye, like in my.',
    examples: [
      { word: 'My', phonetic: '/maɪ/', image: getImg('me') },
      { word: 'Fly', phonetic: '/flaɪ/', image: getImg('fly') },
      { word: 'High', phonetic: '/haɪ/', image: getImg('mountain') },
      { word: 'Eye', phonetic: '/aɪ/', image: getImg('eye') }
    ]
  },
  {
    id: 'dip_ow', symbol: '/aʊ/', name: 'Ow', category: 'Diphthong',
    soundPrompt: 'Say ow, like in cow.',
    examples: [
      { word: 'Cow', phonetic: '/kaʊ/', image: getImg('cow') },
      { word: 'Now', phonetic: '/naʊ/', image: getImg('clock') },
      { word: 'Mouth', phonetic: '/maʊθ/', image: getImg('mouth') },
      { word: 'House', phonetic: '/haʊs/', image: getImg('house') }
    ]
  },

  // --- Consonants ---
  {
    id: 'p', symbol: '/p/', name: 'Sound P', category: 'Consonant',
    soundPrompt: 'Pop your lips and say p.',
    examples: [{ word: 'Pen', phonetic: '/pen/', image: getImg('pen') }, { word: 'Pig', phonetic: '/pɪɡ/', image: getImg('pig') }]
  },
  {
    id: 'b', symbol: '/b/', name: 'Sound B', category: 'Consonant',
    soundPrompt: 'Say b.',
    examples: [{ word: 'Ball', phonetic: '/bɔːl/', image: getImg('ball') }, { word: 'Bed', phonetic: '/bed/', image: getImg('bed') }]
  },
  {
    id: 't', symbol: '/t/', name: 'Sound T', category: 'Consonant',
    soundPrompt: 'Tap your tongue and say t.',
    examples: [{ word: 'Tea', phonetic: '/tiː/', image: getImg('tea') }, { word: 'Ten', phonetic: '/ten/', image: getImg('ten') }]
  },
  {
    id: 'd', symbol: '/d/', name: 'Sound D', category: 'Consonant',
    soundPrompt: 'Say d.',
    examples: [{ word: 'Dog', phonetic: '/dɒɡ/', image: getImg('dog') }, { word: 'Dad', phonetic: '/dæd/', image: getImg('dad') }]
  },
  {
    id: 'k', symbol: '/k/', name: 'Sound K', category: 'Consonant',
    soundPrompt: 'Say k.',
    examples: [{ word: 'Cat', phonetic: '/kæt/', image: getImg('cat') }, { word: 'Key', phonetic: '/kiː/', image: getImg('key') }]
  },
  {
    id: 'g', symbol: '/g/', name: 'Sound G', category: 'Consonant',
    soundPrompt: 'Say g.',
    examples: [{ word: 'Go', phonetic: '/ɡəʊ/', image: getImg('go') }, { word: 'Get', phonetic: '/ɡet/', image: getImg('box') }]
  },
  {
    id: 'f', symbol: '/f/', name: 'Sound F', category: 'Consonant',
    soundPrompt: 'Bite your lip and blow, fff.',
    examples: [{ word: 'Fish', phonetic: '/fɪʃ/', image: getImg('fish') }, { word: 'Fun', phonetic: '/fʌn/', image: getImg('smile') }]
  },
  {
    id: 'v', symbol: '/v/', name: 'Sound V', category: 'Consonant',
    soundPrompt: 'Bite your lip and buzz, vvv.',
    examples: [{ word: 'Van', phonetic: '/væn/', image: getImg('van') }, { word: 'Very', phonetic: '/ˈver.i/', image: getImg('star') }]
  },
  {
    id: 'theta', symbol: '/θ/', name: 'Sound Th (soft)', category: 'Consonant',
    soundPrompt: 'Stick your tongue out and blow softly, th.',
    examples: [{ word: 'Thin', phonetic: '/θɪn/', image: getImg('line') }, { word: 'Three', phonetic: '/θriː/', image: getImg('three') }]
  },
  {
    id: 'eth', symbol: '/ð/', name: 'Sound Th (hard)', category: 'Consonant',
    soundPrompt: 'Stick your tongue out and buzz, th.',
    examples: [{ word: 'This', phonetic: '/ðɪs/', image: getImg('hand') }, { word: 'Mother', phonetic: '/ˈmʌð.ər/', image: getImg('mother') }]
  },
  {
    id: 's', symbol: '/s/', name: 'Sound S', category: 'Consonant',
    soundPrompt: 'Hiss like a snake, sss.',
    examples: [{ word: 'Sun', phonetic: '/sʌn/', image: getImg('sun') }, { word: 'Sea', phonetic: '/siː/', image: getImg('sea') }]
  },
  {
    id: 'z', symbol: '/z/', name: 'Sound Z', category: 'Consonant',
    soundPrompt: 'Buzz like a bee, zzz.',
    examples: [{ word: 'Zoo', phonetic: '/zuː/', image: getImg('zoo') }, { word: 'Zebra', phonetic: '/ˈzeb.rə/', image: getImg('zebra') }]
  },
  {
    id: 'esh', symbol: '/ʃ/', name: 'Sound Sh', category: 'Consonant',
    soundPrompt: 'Shhh, be quiet.',
    examples: [{ word: 'Shoe', phonetic: '/ʃuː/', image: getImg('shoe') }, { word: 'Fish', phonetic: '/fɪʃ/', image: getImg('fish') }]
  },
  {
    id: 'yogh', symbol: '/ʒ/', name: 'Sound Zh', category: 'Consonant',
    soundPrompt: 'The sound in treasure, zh.',
    examples: [{ word: 'Television', phonetic: '/ˈtel.ɪ.vɪʒ.ən/', image: getImg('tv') }, { word: 'Treasure', phonetic: '/ˈtreʒ.ər/', image: getImg('gold') }]
  },
  {
    id: 'm', symbol: '/m/', name: 'Sound M', category: 'Consonant',
    soundPrompt: 'Press your lips and hum, mmm.',
    examples: [{ word: 'Man', phonetic: '/mæn/', image: getImg('man') }, { word: 'Mum', phonetic: '/mʌm/', image: getImg('mum') }]
  },
  {
    id: 'n', symbol: '/n/', name: 'Sound N', category: 'Consonant',
    soundPrompt: 'Say nnn.',
    examples: [{ word: 'No', phonetic: '/nəʊ/', image: getImg('stop') }, { word: 'Nine', phonetic: '/naɪn/', image: getImg('nine') }]
  },
  {
    id: 'angma', symbol: '/ŋ/', name: 'Sound Ng', category: 'Consonant',
    soundPrompt: 'Back of throat sound, ng.',
    examples: [{ word: 'Sing', phonetic: '/sɪŋ/', image: getImg('sing') }, { word: 'King', phonetic: '/kɪŋ/', image: getImg('king') }]
  },
  {
    id: 'h', symbol: '/h/', name: 'Sound H', category: 'Consonant',
    soundPrompt: 'Breathe out, hhh.',
    examples: [{ word: 'Hat', phonetic: '/hæt/', image: getImg('hat') }, { word: 'Hello', phonetic: '/həˈləʊ/', image: getImg('wave') }]
  },
  {
    id: 'l', symbol: '/l/', name: 'Sound L', category: 'Consonant',
    soundPrompt: 'Lll, like lion.',
    examples: [{ word: 'Love', phonetic: '/lʌv/', image: getImg('heart') }, { word: 'Leg', phonetic: '/leɡ/', image: getImg('leg') }]
  },
  {
    id: 'r', symbol: '/r/', name: 'Sound R', category: 'Consonant',
    soundPrompt: 'Rrr, like red.',
    examples: [{ word: 'Red', phonetic: '/red/', image: getImg('red') }, { word: 'Run', phonetic: '/rʌn/', image: getImg('run') }]
  },
  {
    id: 'w', symbol: '/w/', name: 'Sound W', category: 'Consonant',
    soundPrompt: 'Wuh, like water.',
    examples: [{ word: 'Wet', phonetic: '/wet/', image: getImg('water') }, { word: 'Win', phonetic: '/wɪn/', image: getImg('trophy') }]
  },
  {
    id: 'j', symbol: '/j/', name: 'Sound Y', category: 'Consonant',
    soundPrompt: 'Yuh, like yes.',
    examples: [{ word: 'Yes', phonetic: '/jes/', image: getImg('check') }, { word: 'Yellow', phonetic: '/ˈjel.əʊ/', image: getImg('yellow') }]
  },
  {
    id: 'ch_ipa', symbol: '/tʃ/', name: 'Sound Ch', category: 'Consonant',
    soundPrompt: 'Ch, like cheese.',
    examples: [{ word: 'Cheese', phonetic: '/tʃiːz/', image: getImg('cheese') }, { word: 'Church', phonetic: '/tʃɜːtʃ/', image: getImg('church') }]
  },
  {
    id: 'dj', symbol: '/dʒ/', name: 'Sound J', category: 'Consonant',
    soundPrompt: 'J, like jam.',
    examples: [{ word: 'Jam', phonetic: '/dʒæm/', image: getImg('jam') }, { word: 'Juice', phonetic: '/dʒuːs/', image: getImg('juice') }]
  }
];
