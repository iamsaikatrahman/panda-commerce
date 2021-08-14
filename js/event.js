// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const sectionTitle = document.getElementsByClassName('section-title');
for(const title of sectionTitle){ 
    title.style.color = 'lightblue'; 
}
// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
document.getElementById('backpack').style.backgroundColor = 'tomato';

//৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const cardRadius = document.getElementsByClassName('card');
for(const radius of cardRadius){
    radius.style.borderRadius = '30px';
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
function pressFunction(){
    console.log('Solved the problem no 5. Create a function. and click handler. ✌✌🎉🥂')
}

//৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
const buyNowBtn = document.getElementsByClassName('buy-now-button');
for(const btnremove of buyNowBtn){
    btnremove.addEventListener('click', removeBtn);
    function removeBtn(){
        btnremove.remove();
    }
}

//৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 
document.getElementById('email-field').addEventListener('keyup', function(event){
    const btnsend = document.getElementById('send-btn');
    if(event.target.value == 'email'){
        btnsend.removeAttribute('disabled');
    } else{
        btnsend.setAttribute('disabled', true);
    }
})

//৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
const cardImage = document.getElementsByClassName('card-img-top');
for(const changeImage of cardImage){
    changeImage.addEventListener('mouseenter',function(){
        changeImage.src = 'https://randomwordgenerator.com/img/picture-generator/55e7d745435ba914f1dc8460962e33791c3ad6e04e507441722872d5954ec1_640.jpg';
    })
}


//৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
const bgfooter = document.getElementById('double-click');
bgfooter.ondblclick=Background_change_color_dbl;

function Background_change_color_dbl ()
{bgfooter.style.backgroundColor="lightgreen"}
