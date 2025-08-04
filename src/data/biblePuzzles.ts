export interface WordSearchPuzzle {
  id: number;
  title: string;
  theme: string;
  verse: string;
  words: string[];
  grid: string[][];
  size: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
}

// Eight directions for word placement in word search grid
const DIRECTIONS = [
  { dr:  0, dc:  1 }, // → (right)
  { dr:  1, dc:  0 }, // ↓ (down)
  { dr:  0, dc: -1 }, // ← (left)
  { dr: -1, dc:  0 }, // ↑ (up)
  { dr:  1, dc:  1 }, // ↘ (down-right)
  { dr:  1, dc: -1 }, // ↙ (down-left)
  { dr: -1, dc:  1 }, // ↗ (up-right)
  { dr: -1, dc: -1 }, // ↖ (up-left)
];

// KJV Bible-based word search puzzles
export const biblePuzzles: WordSearchPuzzle[] = [
  {
    id: 1,
    title: "Creation Story",
    theme: "Genesis 1",
    verse: "In the beginning God created the heaven and the earth. - Genesis 1:1",
    words: ["HEAVEN", "EARTH", "LIGHT", "DARKNESS", "WATERS", "FIRMAMENT", "BEAST", "FOWL"],
    grid: [],
    size: 12,
    difficulty: 'Easy',
    description: "Find words from the creation account in Genesis"
  },
  {
    id: 2,
    title: "Noah's Ark",
    theme: "Genesis 6-9",
    verse: "And Noah builded an altar unto the LORD. - Genesis 8:20",
    words: ["NOAH", "ARK", "FLOOD", "DOVE", "OLIVE", "RAINBOW", "COVENANT", "ALTAR"],
    grid: [],
    size: 12,
    difficulty: 'Easy',
    description: "Discover the animals and elements from Noah's great adventure"
  },
  {
    id: 3,
    title: "Garden of Eden",
    theme: "Genesis 2-3",
    verse: "And the LORD God planted a garden eastward in Eden. - Genesis 2:8",
    words: ["EDEN", "TREE", "FRUIT", "SERPENT", "ADAM", "EVE", "GARDEN", "CHERUBIM"],
    grid: [],
    size: 12,
    difficulty: 'Easy',
    description: "Explore the first paradise and its inhabitants"
  },
  {
    id: 4,
    title: "Moses and Exodus",
    theme: "Exodus",
    verse: "And Moses stretched out his hand over the sea. - Exodus 14:21",
    words: ["MOSES", "PHARAOH", "EGYPT", "PLAGUES", "PASSOVER", "MANNA", "TABLETS", "SINAI"],
    grid: [],
    size: 14,
    difficulty: 'Medium',
    description: "Journey through the great exodus from Egypt"
  },
  {
    id: 5,
    title: "David the Shepherd",
    theme: "1 Samuel 17",
    verse: "And David said unto Saul, Thy servant kept his father's sheep. - 1 Samuel 17:34",
    words: ["DAVID", "GOLIATH", "SHEPHERD", "SHEEP", "STONE", "SLING", "GIANT", "VALLEY"],
    grid: [],
    size: 14,
    difficulty: 'Medium',
    description: "Follow young David's courage and faith"
  },
  {
    id: 6,
    title: "Daniel's Faith",
    theme: "Daniel 6",
    verse: "Now when Daniel knew that the writing was signed. - Daniel 6:10",
    words: ["DANIEL", "LIONS", "DEN", "PRAYER", "BABYLON", "KING", "FAITH", "ANGEL"],
    grid: [],
    size: 14,
    difficulty: 'Medium',
    description: "Witness Daniel's unwavering faith in the lion's den"
  },
  {
    id: 7,
    title: "Fruits of the Spirit",
    theme: "Galatians 5:22",
    verse: "But the fruit of the Spirit is love, joy, peace. - Galatians 5:22",
    words: ["LOVE", "JOY", "PEACE", "PATIENCE", "KINDNESS", "GOODNESS", "FAITH", "MEEKNESS", "TEMPERANCE"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Find the beautiful fruits that grow in a believer's heart"
  },
  {
    id: 8,
    title: "The Nativity",
    theme: "Luke 2",
    verse: "And she brought forth her firstborn son. - Luke 2:7",
    words: ["JESUS", "MARY", "JOSEPH", "BETHLEHEM", "MANGER", "SHEPHERDS", "ANGELS", "STAR"],
    grid: [],
    size: 14,
    difficulty: 'Easy',
    description: "Celebrate the birth of our Savior"
  },
  {
    id: 9,
    title: "Miracles of Jesus",
    theme: "New Testament",
    verse: "And Jesus went about all Galilee, teaching. - Matthew 4:23",
    words: ["HEALING", "BLIND", "LAME", "WATER", "WINE", "BREAD", "FISH", "MIRACLE"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Witness the amazing works of Christ"
  },
  {
    id: 10,
    title: "The Lord's Prayer",
    theme: "Matthew 6:9-13",
    verse: "Our Father which art in heaven, Hallowed be thy name. - Matthew 6:9",
    words: ["FATHER", "HEAVEN", "HALLOWED", "KINGDOM", "BREAD", "TRESPASSES", "TEMPTATION", "EVIL"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Pray with the words Jesus taught us"
  },
  {
    id: 11,
    title: "Armor of God",
    theme: "Ephesians 6:11-17",
    verse: "Put on the whole armour of God. - Ephesians 6:11",
    words: ["TRUTH", "RIGHTEOUSNESS", "GOSPEL", "FAITH", "SALVATION", "SWORD", "SPIRIT", "HELMET"],
    grid: [],
    size: 16,
    difficulty: 'Hard',
    description: "Equip yourself with God's mighty armor"
  },
  {
    id: 12,
    title: "Psalm 23",
    theme: "Psalm 23",
    verse: "The LORD is my shepherd; I shall not want. - Psalm 23:1",
    words: ["SHEPHERD", "PASTURES", "WATERS", "SOUL", "RIGHTEOUSNESS", "VALLEY", "SHADOW", "DEATH"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Walk through the beloved shepherd's psalm"
  },
  {
    id: 13,
    title: "Beatitudes",
    theme: "Matthew 5:3-12",
    verse: "Blessed are the poor in spirit. - Matthew 5:3",
    words: ["BLESSED", "POOR", "SPIRIT", "MOURN", "MEEK", "HUNGER", "THIRST", "MERCIFUL"],
    grid: [],
    size: 16,
    difficulty: 'Hard',
    description: "Find blessing in Christ's teachings"
  },
  {
    id: 14,
    title: "Parables of Jesus",
    theme: "Gospel Parables",
    verse: "And he spake many things unto them in parables. - Matthew 13:3",
    words: ["SOWER", "SEED", "MUSTARD", "PEARL", "TREASURE", "VINEYARD", "TALENTS", "PRODIGAL"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Discover wisdom in Jesus' parables"
  },
  {
    id: 15,
    title: "The Resurrection",
    theme: "Matthew 28",
    verse: "He is not here: for he is risen. - Matthew 28:6",
    words: ["RISEN", "TOMB", "STONE", "ANGEL", "MARY", "DISCIPLES", "GALILEE", "GLORY"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Celebrate Christ's victory over death"
  },
  {
    id: 16,
    title: "Acts of the Apostles",
    theme: "Acts",
    verse: "But ye shall receive power, after that the Holy Ghost. - Acts 1:8",
    words: ["PETER", "PAUL", "PENTECOST", "SPIRIT", "CHURCH", "BAPTISM", "MIRACLES", "GENTILES"],
    grid: [],
    size: 18,
    difficulty: 'Hard',
    description: "Follow the early church's amazing growth"
  },
  {
    id: 17,
    title: "Revelation Glory",
    theme: "Revelation",
    verse: "Holy, holy, holy, Lord God Almighty. - Revelation 4:8",
    words: ["HOLY", "THRONE", "LAMB", "CROWN", "ELDERS", "ANGELS", "GLORY", "WORSHIP"],
    grid: [],
    size: 18,
    difficulty: 'Hard',
    description: "Behold the heavenly throne room"
  },
  {
    id: 18,
    title: "Love Chapter",
    theme: "1 Corinthians 13",
    verse: "Though I speak with the tongues of men and of angels. - 1 Corinthians 13:1",
    words: ["LOVE", "CHARITY", "PATIENT", "KIND", "ENVY", "BOAST", "HOPE", "ENDURE"],
    grid: [],
    size: 16,
    difficulty: 'Medium',
    description: "Experience the greatest gift of all"
  },
  {
    id: 19,
    title: "Prophets of Old",
    theme: "Old Testament Prophets",
    verse: "The word of the LORD came unto me. - Ezekiel 1:3",
    words: ["ISAIAH", "JEREMIAH", "EZEKIEL", "DANIEL", "HOSEA", "JOEL", "AMOS", "JONAH"],
    grid: [],
    size: 18,
    difficulty: 'Hard',
    description: "Meet God's faithful messengers"
  },
  {
    id: 20,
    title: "Proverbs Wisdom",
    theme: "Book of Proverbs",
    verse: "The fear of the LORD is the beginning of wisdom. - Proverbs 9:10",
    words: ["WISDOM", "UNDERSTANDING", "KNOWLEDGE", "PRUDENCE", "DISCRETION", "COUNSEL", "INSTRUCTION", "CORRECTION"],
    grid: [],
    size: 18,
    difficulty: 'Hard',
    description: "Gain wisdom from Solomon's teachings"
  }
];

// Generate word search grid with words placed randomly
export function generateWordSearchGrid(puzzle: WordSearchPuzzle): string[][] {
  const N = puzzle.size;
  // 1. init empty grid
  const grid = Array.from({ length: N }, () => Array(N).fill(''));

  // 2. sort words longest→shortest
  const sortedWords = [...puzzle.words].sort((a, b) => b.length - a.length);

  // 3. place each word
  for (const word of sortedWords) {
    const placed = placeWord(grid, word);
    if (!placed) {
      console.error(`Failed to place word: ${word}`);
      // You can throw here or retry the entire grid
    }
  }

  // 4. fill blanks with random letters
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!grid[r][c]) {
        grid[r][c] = letters.charAt(Math.floor(Math.random() * letters.length));
      }
    }
  }

  return grid;
}function placeWord(grid: string[][], word: string): boolean {
  const N = grid.length;
  for (let attempt = 0; attempt < 100; attempt++) {
    const { dr, dc } = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    const r0 = Math.floor(Math.random() * N);
    const c0 = Math.floor(Math.random() * N);
    
    // Compute end position:
    const rEnd = r0 + dr * (word.length - 1);
    const cEnd = c0 + dc * (word.length - 1);
    if (rEnd < 0 || rEnd >= N || cEnd < 0 || cEnd >= N) continue;

    // Check for conflicts (only allow overlap on same letter)
    let fits = true;
    for (let i = 0; i < word.length; i++) {
      const r = r0 + dr * i;
      const c = c0 + dc * i;
      if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
        fits = false;
        break;
      }
    }
    if (!fits) continue;

    // Commit placement
    for (let i = 0; i < word.length; i++) {
      const r = r0 + dr * i;
      const c = c0 + dc * i;
      grid[r][c] = word[i];
    }
    return true;
  }
  return false;
}