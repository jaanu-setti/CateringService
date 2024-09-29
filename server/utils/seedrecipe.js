const Recipe = require('../models/recipe')
const recipes = [
   {
    name : "Aavakai pachadi",
    type : "maincourse",
    specialtype : "south indian veg thali",
    price : 5,
    image : '/images/aavakaipachadi.jpg'
   },{
    name : "aloo paratha",
    type  : "starters",
    specialtype : "north indian thali",
    price : 8,
    image :'/images/alooparatha.jpg'
   },{
    name : "bagara rice",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    price : 20,
    image :'/images/bagararice.jpg'
   },{
    name : "bread halwa",
    type  : "sweets",
    specialtype : "south indian veg thali",
    price : 20,
    image :'/images/breadhalwa.jpg'
   },{
    name : "bread sweet",
    type  : "sweets",
    price : 10,
    image :'/images/breadsweet.jpg'
   },{
    name : "butterscotch icecream",
    type  : "desserts",
    specialtype : "south indian veg thali",
    price : 20,
    image :'/images/butterscotchicecream.jpg'
   },{
    name : "cantonese sprinrolls",
    type  : "starters",
    specialtype : "chinese special thali",
    price : 20,
    image :'/images/cantonese-sprinrolls.jpg'
   },{
    name : "carrot halwa",
    type  : "sweets",
    price : 15,
    image :'/images/carrothalwa.jpg'
   },{
    name : "chicken friedrice",
    type  : "maincourse",
    specialtype : "chinese special thali",
    price : 50,
    image :'/images/chickenfriedrice.jpg'
   },{
    name : "chicken fry",
    type  : "starters",
    price : 40,
    image :'/images/chickenfry.jpg'
   },{
    name : "chicken noodles",
    type  : "maincourse",
    specialtype : "chinese special thali",
    price : 50,
    image :'/images/chickennoodles.jpg'
   },{
    name : "chicken springroll",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 20,
    image :'/images/chickensprinroll.jpg'
   },{
    name : "choclate icecream",
    type  : "desserts",
    price : 20,
    image :'/images/choclateicecream.jpg'
   },{
    name : "chole bhature",
    type  : "tiffins",
    price : 30,
    image :'/images/cholebhature.jpg'
   },{
    name : "corn samosa",
    type  : "starters",
    specialtype : "south indian veg thali",
    price : 10,
    image :'/images/corn samosa.jpg'
   },{
    name : "dal makhani",
    type  : "maincourse",
    specialtype : "north indian thali",
    price : 10,
    image :'/images/dalmakhani.jpg'
   },{
    name : "dosa",
    type  : "maincourse",
    price : 30,
    image :'/images/dosa.jpeg'
   },{
    name : "drumstick curry",
    type  : "maincourse",
    specialtype : "south indian thali",
    package : 'gold',
    price : 25,
    image :'/images/drumstickcurry.jpg'
   },{
    name : "dryfruit halwa",
    type  : "sweets",
    specialtype : "south indian thali",
    package : 'gold',
    price : 50,
    image :'/images/dryfruithalwa.jpg'
   },{
    name : "dryfruit icecream",
    type  : "desserts",
    specialtype : "south indian thali",
    package : 'gold',
    price : 60,
    image :'/images/dryfruiticecream.jpg'
   },{
    name : "fish fry",
    type  : "starters",
    specialtype : "south indian nonveg thali",
    price : 25,
    image :'/images/fishfry.jpg'
   },{
    name : "ginger lemonade",
    type  : "bewarages",
    price : 15,
    image :'/images/gingerlemonade.jpg'
   },{
    name : "gobi 65",
    type  : "starters",
    specialtype : "south indian thali",
    package : 'gold',
    price : 15,
    image :'/images/gobi65.jpg'
   },{
    name : "gulab jamun",
    type  : "desserts",
    specialtype : "south indian thali",
    package : 'gold',
    price : 35,
    image :'/images/gulabjamun.jpg'
   },{
    name : "idly",
    type  : "tiffins",
    price : 25,
    image :'/images/idly.jpeg'
   },{
    name : "jackfruit biryani",
    type  : "maincourse",
    specialtype : "south indian thali",
    package : 'gold',
    price : 55,
    image :'/images/jackfruitbiryani.jpg'
   },{
    name : "kiwi icecream",
    type  : "desserts",
    price : 45,
    image :'/images/kiwiicecream.jpg'
   },{
    name : "kobbaritamata pachadi",
    type  : "maincourse",
    specialtype : "south indian thali",
    package : 'gold',
    price : 8,
    image :'/images/kobbaritamata.jpg'
   },{
    name : "kung pao chicken",
    type  : "maincourse",
    specialtype : "chinese thali",
    price : 40,
    image :'/images/kung-pao-chicken.jpg'
   },{
    name : "malai kofta",
    type  : "maincourse",
    specialtype : "north indian thali",
    price : 40,
    image :'/images/malaikofta.jpg'
   },{
    name : "mamidikaya pappu",
    type  : "maincourse",
    specialtype : "south indian thali",
    package : 'gold',
    price : 8,
    image :'/images/mamidikayipappu.jpg'
   },{
    name : "mango punch",
    type  : "bewarages",
    specialtype : "south indian veg thali",
    price : 30,
    image :'/images/mangopunch.jpg'
   },{
    name : "mapotofu",
    type  : "maincourse",
    specialtype : "chinese thali",
    price : 20,
    image :'/images/mapotofu.jpg'
   },
   {
    name : "momos",
    type  : "maincourse",
    specialtype : "chinese thali",
    price : 10,
    image :'/images/momos.jpg'
   },{
    name : "mushroom samosa",
    type  : "maincourse",
    specialtype : "south indian thali",
    package : 'gold',
    price : 15,
    image :'/images/mushroomsamosa.jpg'
   },{
    name : "mysore bhajji",
    type  : "maincourse",
    price : 30,
    image :'/images/mysore bhajji.jpeg'
   }, {
    name : "north indian biryani",
    type  : "maincourse",
    specialtype : "north indian thali",
    price : 60,
    image :'/images/northindianbiryani.jpg'
   },{
    name : "papads",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    package : 'gold',
    price : 5,
    image :'/images/papads.jpg'
   },{
    name : "papaya halwa",
    type  : "maincourse",
    specialtype : "south indian  thali",
    package : 'gold',
    price : 25,
    image :'/images/papads.jpg'
   },{
    name : "pineapple mango punch",
    type  : "bewarages",
    specialtype : "south indian veg thali",
    price : 35,
    image :'/images/pineapple-mango-punch.jpg'
   },{
    name : "pomegranate punch",
    type  : "bewarages",
    price : 25,
    image :'/images/pomegranatepunch.jpg'
   },{
    name : "potato 65",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    price : 10,
    image :'/images/potato65.jpg'
   },{
    name : "pudina rice",
    type  : "maincourse",
    specialtype : "south indian  thali",
    package : 'gold',
    price : 35,
    image :'/images/pudinarice.jpg'
   },{
    name : "rasam",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 10,
    image :'/images/rasam.jpg'
   },{
    name : "raspberry mojito",
    type  : "bewarages",
    specialtype : "south indian  thali",
    package : 'gold',
    price : 65,
    image :'/images/raspberrymojito.jpg'
   },{
    name : "roohafza milk",
    type  : "bewarages",
    price : 40,
    image :'/images/roohafzamilk.jpg'
   },{
    name : "rumali roti",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 25,
    image :'/images/rumaliroti.jpg'
   },{
    name : "singori",
    type  : "maincourse",
    specialtype : "north indian thali",
    price : 35,
    image :'/images/singori.jpg'
   },{
    name : "soda lime punch",
    type  : "bewarages",
    price : 25,
    image :'/images/sodalimepunch.png'
   },{
    name : "strawberry icecream",
    type  : "desserts",
    price : 25,
    image :'/images/strawberryicecream.jpg'
   },{
    name : "strawberry punch",
    type  : "bewarages",
    price : 45,
    image :'/images/strawberrypunch.jpg'
   },{
    name : "tandoori chicken",
    type  : "starters",
    price : 60,
    image :'/images/tandoorichicken.jpg'
   },{
    name : "tangyoun",
    type  : "sweets",
    price : 40,
    image :'/images/tangyoun.jpeg'
   },{
    name : "tomato pappu",
    type  : "maincourse",
    price : 20,
    image :'/images/tomatopappu.jpg'
   },{
    name : "upma",
    type  : "tiffins",
    price : 30,
    image :'/images/upma.jpeg'
   },{
    name : "vada",
    type  : "tiffins",
    price : 30,
    image :'/images/vada.jpeg'
   },{
    name : "veg lollipop",
    type  : "starters",
    price : 15,
    image :'/images/veglollipop.jpg'
   },{
    name : "veg springroll",
    type  : "starters",
    price : 15,
    image :'/images/vegspringroll.jpg'
   },{
    name : "vennela icecream",
    type  : "desserts",
    price : 20,
    image :'/images/vennelaicecream.jpg'
   },{
    name : "white rice",
    type  : "rice",
    price : 30,
    image :'/images/whiterice.jpg'
   },{
    name : "brinjal curry",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    price : 25,
    image :'/images/brinjalcurry.jpeg'
   },{
    name : "chicken biryani",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 100,
    image :'/images/chickenbiryani.jpg'
   },{
    name : "chicken curry",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 40,
    image :'/images/chickencurry.jpg'
   },{
    name : "chicken lollipop",
    type  : "starters",
    specialtype : "south indian nonveg thali",
    price : 30,
    image :'/images/chickenlollipop.jpg'
   },{
    name : "chicken majestic",
    type  : "starters",
    price : 45,
    image :'/images/chickenmajestic.jpg'
   },{
    name : "chicken manchuria",
    type  : "starters",
    price : 45,
    image :'/images/chickenmanchuria.jpg'
   },{
    name : "fish curry",
    type  : "maincourse",
    price : 45,
    image :'/images/fishcurry.jpeg'
   },{
    name : "mushroom curry",
    type  : "maincourse",
    specialtype : "south indian  thali",
    package : 'gold',
    price : 35,
    image :'/images/mushroom curry.jpeg'
   },{
    name : "mushroom biryani",
    type  : "maincourse",
    price : 50,
    image :'/images/mushroombiryani.jpeg'
   },{
    name : "mushroom chilli",
    type  : "starters",
    price : 40,
    image :'/images/mushroomchilli.jpg'
   },{
    name : "mutton biryani",
    type  : "maincoarse",
    price : 250,
    image :'/images/muttonbiryani.jpg'
   },{
    name : "mutton curry",
    type  : "maincoarse",
    price : 150,
    image :'/images/muttoncurry.jpg'
   },{
    name : "paneer curry",
    type  : "maincoarse",
    price : 60,
    image :'/images/paneercurry.jpeg'
   },{
    name : "paneer biryani",
    type  : "maincoarse",
    specialtype : "south indian  thali",
    package : 'gold',
    price : 100,
    image :'/images/paneerbiryani.jpeg'
   },{
    name : "paneer tikka",
    type  : "starters",
    price : 60,
    image :'/images/paneer-tikka.jpg'
   },{
    name : "potato curry",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    price : 20,
    image :'/images/potatocurry.jpeg'
   },{
    name : "prawns curry",
    type  : "maincourse",
    specialtype : "south indian nonveg thali",
    price : 60,
    image :'/images/prawnscurry.jpeg'
   },{
    name : "sambar",
    type  : "maincourse",
    specialtype : "south indian veg thali",
    package :"gold",
    price : 20,
    image :'/images/sambar.jpeg'
   },

]
const Recipelist =async()=>{
    try{
        for(const recipe of recipes){
            const existingrecipe = await Recipe.findOne({ name : recipe.name});
            if(!existingrecipe){
                await Recipe.create(recipe);
                console.log(`Added : ${recipe.name}`)
            }
        }
    }catch(err){
           console.log('error from seedrecipe component')
    } 
}
module.exports = Recipelist;