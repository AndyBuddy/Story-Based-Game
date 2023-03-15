//Add Main character name
document.getElementById('game').addEventListener('submit',
    function(e){
        
        //Assign value to name
        const mainChar = document.getElementById('char-name').value
        
        //instantiate UI
        const ui = new UI();

        //Checks if name field is empty; if name is empty sets alert, if not empty then tells user to confirm name.
        if(mainChar === ''){
            ui.showAlert('Please create a name', 'error')
        }else {
        document.getElementById('change').innerHTML = `<p class="characterConfirm">Are you sure you want your name to be <u>${mainChar}</u>?</p>`;
            //Removes submit button and typing field.
            ui.deleteElements();
            //Makes new buttons taking in yes or no.
            ui.addYesAndNo();
            ui.mainChar(mainChar);
        }

        e.preventDefault();
    });

    //Instead of creating a div for each function, I am using my "universal" div creator 
    const divMaker = document.createElement('div');
    //Same as above variable, used to grab body
    const grab = document.querySelector('body');

class UI {
    //reusable code that restarts at the opening scene
    restart() {

        divMaker.id = "gameOver"
        
        divMaker.innerHTML = `<center><h1>It appears you have failed.</h1>
        <button id="reset" type="submit">Restart<i class="fa-solid fa-arrow-right"></i></button></center>`
        grab.appendChild(divMaker);
        
        const ui = new UI();

        const newDiv = document.querySelector('#gameOver')

        const reset = document.querySelector('#reset');
        reset.addEventListener('click', function(e){
            divMaker.remove();
            ui.pageThree();

        e.preventDefault();
        }
        );
    }

    showAlert(message, className){
        
        //creating div
        const div = document.createElement('div');
        //Add class
        div.className = `alert ${className}`;
        //div.appendChild(document.createTextNode(message));
        div.innerHTML = `<center>Please create a name</center>`
        //Getting parent
        const container = document.querySelector('.container2');
        //Getting form = document,.
        const location = document.querySelector('.new-submit');
        //Insert alert
        container.insertBefore(div, location);
        //Timeout
        setTimeout(function() {
            document.querySelector('.alert').remove() }, 2500);
            
    }
    
    mainChar(mainChar) {
        //Fix!!
    }

   addYesAndNo() {
        const yesAndNo = document.getElementById('yes-no');
        
        divMaker.innerHTML = `<center><button id="yes-button" type="submit">Yes</button>
                            <button id="no-button" type="submit">No</button></center>`
        yesAndNo.appendChild(divMaker);
        const yesButton = document.querySelector('#yes-button');
        yesButton.addEventListener('click', function(e){
            
            const yesClearPage =  document.querySelector('#entirePage');
            yesClearPage.remove();
            
            const ui = new UI();
            
            ui.pageTwo();
            });
        const noButton = document.querySelector('#no-button');
        noButton.addEventListener('click', function(e){
            window.location.reload();
        });
           
    }

   deleteElements() {
       const clearNameAndSubmit = document.querySelector('#name-and-submit');
       clearNameAndSubmit.remove();
    }

    pageTwo() {
        
        //Removes background 
        grab.style.backgroundImage="none";
        
        divMaker.innerHTML = `<h2>Welcome to a world of magic and adventure, 
                where the fate of an entire kingdom rests in the hands of four brave 
                mercenaries. I am Hubert, I can see all that is happening in the kingdom. 
                I invite you to embark on a journey filled with danger and excitement.
                <hr>
                The story begins with a request from the queen herself, who hires the 
                mercenaries to eliminate a group of terrorists who have been causing 
                chaos and destruction in the kingdom. However, as the mercenaries delve 
                deeper into their mission, they begin to uncover a darker truth. 
                <hr>
                I implore you to join the mercenaries in their quest to uncover the 
                truth and save the kingdom from destruction. 
                </h2>
                                    <div class="backAndContinue"><button id="back-button" type="submit">Restart</button>
                                    <button id="continue-button" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button></div>`
        
        grab.appendChild(divMaker);
        
        const back = document.querySelector('#back-button');
        const forward = document.querySelector('#continue-button');
        
        back.addEventListener('click', function(e){

            window.location.reload();
        });
        forward.addEventListener('click', function(e){

            const ui =  new UI();
            divMaker.remove();
            ui.pageThree();
        });
    }

    pageThree(){
        //sets id as guide.
        divMaker.id = "guide";

        //grab.style.backgroudImage="url()";

        divMaker.innerHTML = `<div id="text-box"><h3 id="change">
        The scene opens in the grand hall of the palace, where the queen is 
        seated on her throne, flanked by her loyal guards. The room is adorned
        with exquisite paintings and lavish decor, giving it an air of opulence and power.
        </h3></div>
        <button id="continue-button" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button>`
        
        grab.appendChild(divMaker);
                        
        const textBox = document.querySelector('#continue-button');
        
        const introText = [`As the mercenaries enter the hall, they can feel the weight 
        of the queen's gaze upon them. They are a motley crew, each with their own
        unique set of skills and strengths. They have been hired for this mission due 
        to their reputation as some of the best fighters in the land.`,
        `The queen speaks, her voice cold and commanding. "Mercenaries, 
        I have summoned you here today for a most urgent task. A radical movement 
        of terrorists has been causing chaos and destruction in our kingdom. They 
        must be stopped before they cause any more harm to our people and our lands."`,
        `She pauses for a moment, her eyes scanning each of the mercenaries before 
        continuing. "I am offering a generous reward for the successful elimination
         of these terrorists. Bring me their heads, and you will be richly rewarded."`,
        `The mercenaries exchange glances, some nodding in agreement while others remain stoic. 
        They know that taking on such a dangerous mission could mean putting their own lives at 
        risk. But the promise of riches is too great to ignore.`,
        `As they prepare to leave, the queen issues a final warning. 
        "Do not fail me, mercenaries. Failure is not an option." And with that, 
        the mercenaries depart from the grand hall, ready to face whatever dangers 
        lie ahead in their quest to eliminate the so-called "terrorists".`
        ];
        
        const ui = new UI();
        
        textBox.addEventListener('click', function(e){
            
            //Goes through array using if else. Removes each element after button is pressed
            //Once all elements have been removed it goes to the next page.
            if (introText.length === 0){
                divMaker.remove();
                ui.pageFour();
            } else {
            document.querySelector('#change').innerHTML = `${introText[0]}`;
            introText.shift();
            }
            //
        e.preventDefault(); 
         });  
    }

    //Decision Page
    pageFour(){
        
        divMaker.innerHTML = `<div id="text-box"><h3 id="change">As the mercenaries leave the castle, 
        they find themselves standing at a crossroads. They know that the 
        journey ahead will be perilous, but they are determined to complete 
        their mission and earn the queen's reward.</h3></div>
        <button id="continue-button" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button></div>`

        grab.appendChild(divMaker);
        
        const ui = new UI();

        const textBox = document.querySelector('#continue-button');
        
        textBox.addEventListener('click', function(e){
            
            divMaker.remove();
            ui.decisionPage();

        e.preventDefault(); 
        });  
    }

    decisionPage() {

        const decision = document.createElement('div')
        
        grab.appendChild(decision);

        const decisionText = [`One of the mercenaries, a grizzled veteran 
        with a no-nonsense attitude, suggests taking the direct route through 
        the forest. "It may be dangerous," he says, "but it's the fastest way
        to get to the terrorists' hideout."`,`Another mercenary, a quiet and 
        reserved archer, suggests taking a longer, more winding route that will 
        take them through the mountains. "It may take us longer," she says, "but 
        we'll be able to avoid any potential ambushes and get a better view of the 
        land."`,`A third mercenary, a young and reckless fighter, suggests taking a 
        more aggressive approach. "Let's charge straight through them!" he exclaims, 
        drawing his sword. "We'll catch them off guard and take them down before they 
        know what hit them."`]
        
        decision.innerHTML = `<div id="decision"> <div id="decision-box"><h1 id="change">${decisionText[0]}</h1></div> <button class="option" id="option1" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button>
        <div id="decision-box"><h1 id="change">${decisionText[1]}</h1></div> <button class="option" id="option2" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button>
        <div id="decision-box"><h1 id="change">${decisionText[2]}</h1></div> <button class="option" id="option3" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button>
        </div>`       
        
        const decisionButtons = document.querySelectorAll('.option')
        
        const ui = new UI();

        for (let i=0; i < decisionButtons.length; i++) {
            decisionButtons[i].addEventListener('click', function(e){
            
            if (this.id === 'option1'){
                decision.remove();
                ui.path1()
            } else if (this.id === 'option2'){
                decision.remove();
                ui.path2()
            } else if (this.id === 'option3'){
                decision.remove();
                ui.path3()
            }
            e.preventDefault();
        });
        }
        
    }

    path1() {        
        const storyProgress = [
        `After days of tracking through the dense forest, the mercenaries 
        finally arrive at the terrorists' camp. But to their surprise, the 
        camp does not seem to be filled with the bloodthirsty killers they 
        were expecting. Instead, they see men, women, and children living in 
        simple tents and tending to crops and livestock.`,
        `The mercenaries are taken aback, unsure of what to make of the situation. 
        They had been expecting to find hardened criminals, not a peaceful community.`,
        `The young and reckless fighter is the first to draw his sword, ready to 
        attack the so-called "terrorists" on sight. But the other two mercenaries 
        hesitate, unsure of whether these people truly deserve to be labeled as evil.`,
        `As they debate their next move, a man steps forward from the camp. 
        He introduces himself as the leader of the community and offers to speak with the mercenaries.`,
        `The mercenaries are skeptical, but they agree to hear him out. The leader explains that their 
        community has been fighting against the queen's corrupt regime, which has been attempting to 
        seize their land for their own gain. He pleads with the mercenaries to see their side of the 
        story and to consider joining their cause.`,
        `The mercenaries are torn, unsure of what to do. They had been hired by the queen to 
        eliminate these people, but now they see that there may be more to the situation than they 
        initially thought. They must decide whether to greet the terrorists and hear their side of the 
        story or to attack them as they were originally hired to do. The fate of the kingdom rests in their hands.`
        ] 
        
        divMaker.innerHTML = `<div id="text-box"><h3 id="change">As the mercenaries continue through the forest, they 
        encounter a band of ruthless bandits. The ensuing battle is fierce, and despite 
        their best efforts, the mercenaries lose one of their own. The remaining three 
        mercenaries press on, determined to avenge their fallen comrade.</h3></div>
        <button id="continue-button" type="submit">Continue <i class="fa-solid fa-arrow-right"></i></button>` 
        grab.appendChild(divMaker);
        
        const textBox = document.querySelector('#continue-button');
    
        const ui = new UI();

        textBox.addEventListener('click', function(e){
            
            //Goes through array using if else. Removes each element after button is pressed
            //Once all elements have been removed it goes to the next page.
            if (storyProgress.length === 0){
                divMaker.remove();
                ui.path1Decisions();
            } else {
            document.querySelector('#change').innerHTML = `${storyProgress[0]}`;
            storyProgress.shift();
            }
            
        e.preventDefault(); 
         });  
    }

    path1Decisions() {
        console.log('decisions....decisions')
    }
    
    
    path2() { 
        divMaker.innerHTML = ``
    }

    path3() { 
        this.restart();
    }


    //this.restart() --> restarts game.
}