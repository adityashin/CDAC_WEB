jokes=[
    " guy was sitting in a bar when a stranger walked up to him and asked: If you woke up in the woods and scratched your arse and felt Vaseline, would you tell anyone? Of course not! the guy said. The stranger then asked: If you felt further into your crack and pulled out a used condom, would you tell anyone? Nope. Great, said the stranger. Fancy going camping then",
    ` couple was getting frisky in a field. After giving her oral sex he said, Wow, I wish I had a torch. So do I, she said. Youve been eating grass for the past  ten minutes.`,
    "Whats the difference between oral sex and anal sex? Oral sex makes your day; anal sex makes your hole weak.",
    "What’s the difference between oral sex and anal sex? Oral sex makes your day; anal sex makes your hole weak.",
    "Why is it that if you donate a kidney, people love you. But if you donate five kidneys, they call the police.",
    "My grief counselor died. He was so good, I don’t even care.",
];

function nextjoke() {
    let randomnumber = Math.floor(Math.random()*6);
    document.getElementById("jokes").innerHTML = jokes[randomnumber];
}
function reload(){
    window.location.reload();
}