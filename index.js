//Whole Haiku line IDs
const title = document.getElementById('title')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

const haikuButton = document.getElementById('getHaiku')

//Random Haiku line IDs 
const rline1 = document.getElementById('r-line1')
const rline2 = document.getElementById('r-line2')
const rline3 = document.getElementById('r-line3')

const printRandomHaikuButton = document.getElementById('getRandomHaiku')

const haikuData = 

    {
        "haiku": [
            {
                "title": "horizon",
                "line1": "like oil and water",
                "line2": "clouds and sunshine",
                "line3": "slide across the sky"
            },
            {
                "title": "speed limit",
                "line1": "on my drive there were so many",
                "line2": "cacti, mountains, and trees",
                "line3": "that I didn’t notice"
            },
            {
                "title": "unrequited",
                "line1": "the artichoke crowns extend forth",
                "line2": "on craned and brittle stems",
                "line3": "they died reaching for the sun"
            },
            {
                "title": "puzzle",
                "line1": "mesquite leaves",
                "line2": "almost tessellating",
                "line3": "against empty blue sky"
            },

            {
                "title": "taunting",
                "line1": "wary of earthlings",
                "line2": "the clouds gather up their skirts",
                "line3": "withholding drops of rain"
            },
            {
                "title": "rhythm",
                "line1": "like the echo in a shell",
                "line2": "the current of desert wind",
                "line3": "reflects the flow of my blood"
            },
            {
                "title": "I got honked at",
                "line1": "the stoplight arrests my attention",
                "line2": "mesquites frame the blocks of sandstone",
                "line3": "Papago’s red curves tower gently away"
            },
            {
                "title": "detail-oriented",
                "line1": "a pod’s outline",
                "line2": "dangling from a bush",
                "line3": "too clear in the sun"
            },
            {
                "title": "funeral",
                "line1": "a bed of grass",
                "line2": "receives the golden yolk",
                "line3": "of a crushed dove’s egg"
            },
            {
                "title": "thirst",
                "line1": "far above the palo verde",
                "line2": "luscious rolling clouds",
                "line3": "suspend the promise of rain"
            },
            {
                "title": "dry",
                "line1": "settling in between spines and upon rocks",
                "line2": "a second skin of dust",
                "line3": "cloaks even the horizon"
            },
            {
                "title": "the true gurus",
                "line1": "vrksasana",
                "line2": "the mesquite stretch forth their limbs",
                "line3": "yogis in the sun"
            },
            {
                "title": "I just wanted to use 'petrichor'",
                "line1": "rain plops down on",
                "line2": "fuzzy creosote",
                "line3": "wafting through the petrichor"
            },
            {
                "title": "relief",
                "line1": "clouds hold back rain",
                "line2": "before releasing it upon plains of saguaro",
                "line3": "a new earth"
            },
            {
                "title": "up north",
                "line1": "the shape of the wind",
                "line2": "before and after",
                "line3": "it brushes by a pine"
            }
        ]
    }


    const firstLines = haikuData.haiku.map((x) =>  {return x.line1})
    const secondLines = haikuData.haiku.map((x) =>  {return x.line2})
    const thirdLines = haikuData.haiku.map((x) =>  {return x.line3})

    
    function getRandom (x) {
        const random = Math.floor(Math.random() * x.length) // returns random index from given array
        return x[random]  
    }

    function getHaiku () {
        const haiku = getRandom(haikuData.haiku)
        title.innerHTML = haiku.title
        line1.innerHTML = haiku.line1
        line2.innerHTML = haiku.line2
        line3.innerHTML = haiku.line3
        console.log(haiku)
    }

    //getHaiku()


    const args = {firstLines, secondLines, thirdLines}  

    function getRandomHaiku (args) {
        const haiku = {line1: getRandom(args.firstLines), line2: getRandom(args.secondLines), line3: getRandom(args.thirdLines)}
        console.log(haiku)
        return haiku
    }

    const printRandomHaiku = () => {
        const haiku = getRandomHaiku(args) 
        rline1.innerHTML = haiku.line1
        rline2.innerHTML = haiku.line2
        rline3.innerHTML = haiku.line3
        return haiku
    }

    const haikuEvent = haikuButton.addEventListener('click', getHaiku)
    const printRandomHaikuEvent = printRandomHaikuButton.addEventListener('click', printRandomHaiku) 

 