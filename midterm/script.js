var memberDataObject = {
    callie: {
        name: 'Mori Calliope',
        img: 'images/callie.webp',
        generation: 'Myth',
        youtube: 'https://www.youtube.com/channel/UCL_qhgtOy0dy1Agp8vkySQg',        
        emoji: '💀'
    },
    kiara: {
        name: 'Takanashi Kiara',
        img: 'images/kiara.webp',
        generation: 'Myth',
        youtube: 'https://www.youtube.com/channel/UCHsx4Hqa-1ORjQTh9TYDhww',        
        emoji: '🐔'
    },
    ina: {
        name: "Ninomae Ina'nis",
        img: 'images/ina.webp',
        generation: 'Myth',
        youtube: 'https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg',        
        emoji: '🐙'
    },
    gura: {
        name: "Gawr Gura",
        img: 'images/gura.webp',
        generation: 'Myth',
        youtube: 'https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g',        
        emoji: '🔱'
    },
    ame: {
        name: "Watson Amelia",
        img: 'images/watson.webp',
        generation: 'Myth',
        youtube: 'https://www.youtube.com/channel/UCyl1z3jo3XHR1riLFKG5UAg',        
        emoji: '🔎'
    },
    irys: {
        name: "IRyS",
        img: 'images/irys.webp',
        generation: 'HOPE',
        youtube: 'https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g',        
        emoji: '💎'
    },
    sana: {
        name: "Tsukumo Sana",
        img: 'images/sana.webp',
        generation: 'Council',
        youtube: 'https://www.youtube.com/channel/UCsUj0dszADCGbF3gNrQEuSQ',        
        emoji: '🪐'
    },
    fauna: {
        name: "Ceres Fauna",
        img: 'images/fauna.webp',
        generation: 'Council',
        youtube: 'https://www.youtube.com/channel/UCO_aKKYxn4tvrqPjcTzZ6EQ',        
        emoji: '🌿'
    },
    kronii: {
        name: "Ouro Kronii",
        img: 'images/kronii.webp',
        generation: 'Council',
        youtube: 'https://www.youtube.com/c/OuroKroniiCh',        
        emoji: '⏳'
    },
    mumei: {
        name: "Nanashi Mumei",
        img: 'images/mumei.webp',
        generation: 'Council',
        youtube: 'https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA',        
        emoji: '🪶 (Should be the feather emoji here)'
    },
    bae: {
        name: "Hakos Baelz",
        img: 'images/bae.webp',
        generation: 'Council',
        youtube: 'https://www.youtube.com/channel/UCgmPnx-EEeOrZSg5Tiw7ZRQ',        
        emoji: '🎲'
    }
}

function listOfVtubers() {
    vtubers = ["Tokino Sora", "Roboco-san", "Sakura Miko", "Hoshimachi Suisei", "AZKi", "Yozora Mel", "Shirakami Fubuki", "Natsuiro Matsuri", "Akai Haato", "Aki Rosenthal", "Minato Aqua", "Murasaki Shion", "Nakiri Ayame", 
    "Yuzuki Choco", "Oozora Subaru", "Ookami Mio", "Nekomata Okayu", "Inugami Korone", "Usada Pekora", "Shiranui Flare", "Shirogane Noel", "Houshou Marine", "Uruha Rushia", "Amane Kanata", "Tsunomaki Watame", 
    "Tokoyami Towa", "Himemori Luna", "Yukihana Lamy", "Momosuzu Nene", "Shishiro Botan", "Omaru Polka", "La+ Darknesss", "Takane Lui", "Hakui Koyori", "Sakamata Chloe", "Kazama Iroha"]
    for (let i = 0; i < vtubers.length; i++) {
        document.getElementById("vtuberList").innerHTML += "<li>" + vtubers[i] + "</li>";
    }
}

// Random chooses video from a list of array.
function nextVideo() {
    let songs = ["https://www.youtube.com/embed/Ud73fm4Uoq0", "https://www.youtube.com/embed/IKKar5SS29E", "https://www.youtube.com/embed/mBuHQeL-OO8", "https://www.youtube.com/embed/6bnaBnd4kyU", "https://www.youtube.com/embed/Py21QCndbxc", "https://www.youtube.com/embed/_VIeV_LZXHM", "https://www.youtube.com/embed/6VGkeUaX-zk"]
    document.getElementById("songVideo").src = songs[Math.floor(Math.random() * songs.length)];
}
// Checks for selected member and gives data from object.
function memberList() {
    let currMember = document.getElementById("members").value;
    if (currMember !== "none") {
        document.getElementById("memberData").style.display = "block";
    }
    if (currMember === "none") {
        document.getElementById("memberData").style.display = "none";
    }
    if (currMember === "callie") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.callie.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.callie.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.callie.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.callie.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.callie.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "kiara") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.kiara.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.kiara.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.kiara.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.kiara.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.kiara.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "ina") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.ina.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.ina.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.ina.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.ina.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.ina.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "gura") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.gura.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.gura.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.gura.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.gura.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.gura.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "ame") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.ame.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.ame.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.ame.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.ame.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.ame.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "irys") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.irys.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.irys.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.irys.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.irys.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.irys.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "sana") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.sana.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.sana.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.sana.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.sana.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.sana.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "fauna") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.fauna.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.fauna.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.fauna.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.fauna.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.fauna.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "kronii") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.kronii.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.kronii.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.kronii.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.kronii.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.kronii.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "mumei") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.mumei.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.mumei.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.mumei.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.mumei.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.mumei.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
    else if (currMember === "bae") {
        document.getElementById("memberData").innerHTML = "<h2> Name: " + memberDataObject.bae.name + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<img src=" + memberDataObject.bae.img + ' "/>'; 
        document.getElementById("memberData").innerHTML += "<h2> Generation: " + memberDataObject.bae.generation + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<h2> Emoji: " + memberDataObject.bae.emoji + "</h2>"; 
        document.getElementById("memberData").innerHTML += "<a href=" + memberDataObject.bae.youtube + "><h2>Click here for their YouTube Channel!</h2></a>" ; 
    }
}

function sendMessage() {
    alert("Message has been sent!");
}