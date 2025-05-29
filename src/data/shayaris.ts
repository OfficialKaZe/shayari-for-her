interface Shayari {
  text: string;
  category: string;
}

const shayaris: Shayari[] = [
  // Love Shayaris
  {
    category: "Love",
    text: "Tere saath bitaaye har lamhe ki yaad hai mujhe, Tere bina jaise har saans adhuri lagti hai, Kuch is tarah se tu mere dil mein basi hai, Ki tere bina zindagi hi bekaar si lagti hai."
  },
  {
    category: "Love",
    text: "Chaand ki roshni mein teri yaad aati hai, Har khushi mein teri tasveer nazar aati hai, Kaise bataaun tujhe mere pyaar ki gehraai, Har dhadkan pe bas tera hi naam doharaati hai."
  },
  {
    category: "Love",
    text: "Tum ho toh har manzil aasaan lagti hai, Har mushkil rasta bhi meherbaan lagta hai, Kya karisma hai tumhare pyaar ka, Ki tumhare saath jeena ek armaan lagta hai."
  },
  
  // Relationship Shayaris
  {
    category: "Relationship",
    text: "Rishte nibhaane ka hunar sabko nahi aata, Dil se chaahat ka izhar sabko nahi aata, Tum ho mere liye khaas is duniya mein, Tumhare jaisa pyaar karna sabko nahi aata."
  },
  {
    category: "Relationship",
    text: "Rishtey nibhaane ke liye waqt nahi lagta, Rishtey todne ke liye lamha hi kaafi hai, Par tum se jo rishta hai hamara, Woh umr bhar ke liye hai, sirf lamhon ke liye nahi."
  },
  {
    category: "Relationship",
    text: "Zindagi ke safar mein hum tum mile aise, Jaise do nadiyan milti hain samandar mein, Ab na tu alag hai, na main alag hoon, Ek dusre ke dil mein ham aise base hain."
  },
  
  // Friendship Shayaris
  {
    category: "Friendship",
    text: "Dosti ka rishta bhi kitna ajeeb hai, Jitna nibhao utna hi gehra ho jata hai, Tumhari dosti ne mujhe jeena sikhaya, Yeh ehsaan main zindagi bhar nahi bhula paunga."
  },
  {
    category: "Friendship",
    text: "Dost woh nahi jo mushkil mein saath de, Dost woh hai jo mushkil ko aane hi na de, Tum ho mere sabse khaas dost, Jiski wajah se har mushkil aasan ho gayi."
  },
  {
    category: "Friendship",
    text: "Ek pal ki judai bhi sehen nahi hoti, Tere bina har saans bhi kathin ho jati hai, Dosti se badh kar yeh rishta kya hai, Tere bina meri kahani adhuri hai."
  },
  
  // Nostalgia Shayaris
  {
    category: "Nostalgia",
    text: "Wo bachpan ke din, wo purani yaadein, Jab hum saath the har pal har lamhe mein, Ab bhi dil mein zinda hai wo pal, Jab hum hanste the, khelte the, misjudge karte the."
  },
  {
    category: "Nostalgia",
    text: "Yaad hai mujhe wo pehla mulaqat, Jis din tumne muskura ke mera dil chura liya tha, Ab bhi dil dhadakta hai usi tarah, Jab tum saamne hoti ho, jaise pehli baar."
  },
  {
    category: "Nostalgia",
    text: "Beetey huey lamhon ki yaad mein, Aksar khud ko dhoondhta hoon, Tere saath guzare wo pal, Aankhon mein aansu bankar chhup jaate hain."
  },
  
  // Betrayal Shayaris
  {
    category: "Betrayal",
    text: "Toota hai dil par fir bhi sambhal gaya hoon main, Dhokha khaya hai par fir bhi chal pada hoon main, Ab in zakhmon ko chupakar, Tujhse mohabbat ki nayi ibaraat likhne aaya hoon."
  },
  {
    category: "Betrayal",
    text: "Dard ke raaste se guzar kar bhi, Main aaj phir muskuraata hoon, Har zakham se seekh ke aage badhna, Yahi zindagi ka sabak hai jo nibhaata hoon."
  },
  {
    category: "Betrayal",
    text: "Dhokhe ke baad bhi pyaar karna sikha hai maine, Toote huye dil ko phir se jodna sikha hai, Tumhari yaad mein ab bhi jeeta hoon, Kyunki sachcha pyaar karna sikha hai maine."
  },
  
  // Additional Love Shayaris
  {
    category: "Love",
    text: "Aankhon mein teri jhalak hai, Saanson mein teri khushboo hai, Dil mein tera hi naam hai, Jaan se zyada chahta hoon tujhe."
  },
  {
    category: "Love",
    text: "Tum mere khayalon mein raat din rehti ho, Meri har saans tumhare liye behti hai, Kaise kahoon main tumse, Ki tum mere liye kya ho, Jaan ho tum meri, jo mujhme rehti hai."
  },

  // Additional Relationship Shayaris
  {
    category: "Relationship",
    text: "Pyaar ka rishta hai yeh nazuk sa, Sambhal ke rakhna hai ise hamesha, Tumhare saath har lamha khoobsurat hai, Chahe khushi ho ya gham ka pehra."
  },
  {
    category: "Relationship", 
    text: "Zindagi mein aaye ho tum aise, Jaise barish ke baad khushboo aati hai, Tumhare saath har pal mehakta hai, Tumhare bina sab adhura sa lagta hai."
  },
];

export const getRandomShayari = (): Shayari => {
  const randomIndex = Math.floor(Math.random() * shayaris.length);
  return shayaris[randomIndex];
};

export default shayaris;