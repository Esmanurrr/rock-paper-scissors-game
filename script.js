//definitions
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = docement.querySelectorAll(".option_image");

optionImages.forEach((image, index) =>{
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) =>{
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
           gameContainer.classList.remove("start"); 
            let imgSrc = e.target.querySelector("img").src;
            userResult.src = imgSrc;

            let randomNumber = Math.floor(Math.random()*3);//0 - 1 - 2
            let cpuImages = ["rock.png","paper.png","scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R","P","S"][index];

            let outcomes = {
                RR : "Draw",
                PP : "Draw",
                SS : "Draw",
                RP : "Computer",
                PS : "Computer",                
                SR : "Computer",
                PR : "User",
                SP : "User",
                RS : "User"
            };
            
            let outComeValue = outcomes[userValue + cpuValue];

            result.textContent = userValue === cpuValue ? "Draw" : `${outComeValue} Won!`; //altgr + comma

        }, 2500);
    });
});
