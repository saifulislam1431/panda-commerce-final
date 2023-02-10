/**
 ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?

২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 


৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 


৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 

.

৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 


৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে চেষ্টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

.

৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
 */


// 2nd problem

const headingsTwo = document.getElementsByTagName('h2');
for (const headingTwo of headingsTwo) {
    headingTwo.style.color = 'lightblue';
}




// 3rd problem
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';
backPack.style.padding = '30px';




// 4th problem

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}



// 5th problem

const clickHandler = document.getElementById('click-handler');

clickHandler.onclick = buttonForLog;

function buttonForLog() {
    console.log('Button Clicked!');
}



// 6th problem
const buttons = document.getElementsByClassName('panda-btn-buy-now');
for (const button of buttons) {
    button.addEventListener('click', function() {
        for (const card of cards) {
            card.addEventListener('click', function() {
                card.style.display = 'none';
            })
        }
    })
}




// 7th Problem

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event) {
    const myButton = document.getElementById('submit');
    const text = event.target.value;
    myButton.setAttribute('disabled', true)
    if (text === 'email') {
        myButton.removeAttribute('disabled');
    }

})





// 8th problem

const imgs = document.getElementsByTagName('img');
for (const img of imgs) {
    img.addEventListener('mouseenter', function() {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform .3s linear';
    })
    img.style.transform = 'scale(1)';
}





// 9th problem

document.getElementById('subscribe').addEventListener('dblclick', function() {
    document.style.background = 'red'
})