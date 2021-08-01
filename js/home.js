// Set Information
const review = [{
    id : 1,
    img :"/imgs/016.jpg",
    name : "Morad Maichel",
    text : ` I absolutely loved working with Jen and her amazing business Ounce of Salt Jewelry. 
    Jen is so friendly and professional and made the entire process so pleasant and fun. She had great suggestions 
    and encouraged me to be open minded to new pieces and designs. We had a consultation via zoom and communicated 
    easily through emails and texts. Her website is also great and very user friendly. I received amazing, personalized 
    service. The earrings I bought from Jen are totally gorgeous and classy. I loved all of her pieces, which are also 
    elegant and timeless. I know I will buy more jewelry from Ounce of Salt Jewelry in the future. `
},
{
    id : 2,
    img :"/imgs/017.jpg",
    name : "Mario Samuel",
    text : ` You literally made my whole entire life with this piece. I couldn't be happier with how it 
    turned out. EXACTLY as I imagined and more. Thank you for helping make my dreams come true and creating what 
    truly represents the new phase in my life. I love it! Thank you so much Jen!!`
},
// {
//     id : 3,
//     img :"/imgs/018.jpg",
//     name: ""
//     text : ` I took in some heirloom vintage jewelry 
//     that I hadn’t worn for decades, and Jen was able to create beautiful, updated pieces with the precious stone and gold. 
//     Now I can wear them instead of having them stored away. She has such a creative eye for detail. 
//     The settings she created were not only beautiful but really well made. I also bought some new pieces From her as well 
//     and have to say her prices were so much better 
//     than most jewelers I went to.`
// },
{
    id : 3,
    img :"/imgs/019.jpg",
    name: "Linda Arcon",
    text : ` I’m not a fan of chain store jewelry so I was thrilled to find Ounce of Salt Jewelry. 
    Jen’s designs are beautiful, elegant and original. 
    The photos, videos and information on the website are thorough and easily accessible. The customer service I received was outstanding. 
    Jen answered my questions and confirmed details from the start. She kept me apprised as my pieces were being crafted and delivered. 
    I am very happy with my jewelry purchase and look forward to ordering my next piece of beautiful jewelry from Ounce of Salt.`
}];

// Variables

const img = document.getElementById('img');
const name = document.getElementById('name');
const myText = document.getElementById('test-text');
const btnRight = document.getElementById('right-btn');
const btnLeft = document.getElementById('left-btn');


// Set Count
let currentItem = 0;

// Function For Change
function changePerson (person){
    const item = review[person];
    img.src = item.img;
    myText.textContent = item.text;
    name.textContent = item.name;

}

btnRight.addEventListener("click", function(){
    currentItem++;
    if (currentItem > review.length -1){
        currentItem = 0;
    }
    changePerson(currentItem);
});

btnLeft.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = review.length - 1;
    }
    changePerson(currentItem);
});