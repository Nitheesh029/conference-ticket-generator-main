const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imageView = document.getElementById('img-view');
const inputName = document.getElementById('input-name');
const inputMail = document.getElementById('input-mail');
const inputGithub = document.getElementById('input-github-user');
const submitBtn = document.getElementById('submit-btn');
const ticketForm = document.getElementById('ticket-form');
const ticketContainer = document.getElementById('ticket-container');
const errorMessage = document.getElementById('errorMessage');

const today = dayjs();
const dateAfterThreeDays = today.add(3, 'day');
const formattedDate = dateAfterThreeDays.format('D MMM, YYYY');

inputFile.addEventListener('change', uploadImage);

let profileImg ='';
function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.style.backgroundSize = '130px';
    imageView.textContent = '';
    profileImg = imgLink;
}

dropArea.addEventListener('dragover', function(e){
    e.preventDefault();
});

dropArea.addEventListener('drop', function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});

let fullName = '';
let emailAddress = '';
let githubUsername = '';

ticketForm.addEventListener('input', ()=>{
    const isFormValid = ticketForm.checkValidity();
    submitBtn.disabled = !isFormValid;
});

function randomNum(){
    let number = "12345678910";
    let fullstr = number;
    let randomNumber ='#';
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * fullstr.length);
        randomNumber += fullstr[randomIndex];
    }
    return randomNumber;
}

inputMail.addEventListener('input', validateEmail);
function validateEmail() {
    const emailAddress = inputMail.value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (emailPattern.test(emailAddress)) {
        errorMessage.textContent = ''; 
        inputMail.style.borderColor = 'green'; 
        submitBtn.disabled = false; 
    } else {
        errorMessage.textContent = 'Please enter a valid email address'; 
        inputMail.style.borderColor = 'red'; 
        submitBtn.disabled = true; 
    }

    return emailAddress;
}


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fullName = inputName.value.trim();

    githubUsername = inputGithub.value.trim();
    
    ticketForm.classList.add('form-hidden');
    ticketContainer.classList.add('ticket-visible');
    
    let ticketHTML = `
    <div class="text-white pt-200px">
      <p class="text-5xl font-bold text-center">Congrats, <span class="text-red-500">${fullName}!</span> <br> Your ticket is ready.</p>
      <br>
      <p class="text-center sm:text-xl opacity-50 text-lg">
        We've emailed your ticket to <br> <span class="text-red-500">${validateEmail()}</span> and will send updates in <br>
        the run up to the event.
      </p>
    </div>
    <div id="ticket" class="bg-ticketBg z-10 h-[280px] w-[600px] sm:mt-20 mt-[170px] flex flex-col justify-around relative -rotate-90 sm:-rotate-0">
      <div>
         <a href="index.html">
          <p class="text-3xl flex gap-2 pt-5 pl-8"><img src="assets/images/logo-mark.svg" alt="" class="w-[30px]"> Coding Conf</p>
             </a>
          <p class="pl-12 leading-10 opacity-50">${formattedDate} / Chennai IND</p>
      </div>
      <div class="pt-5 pl-8 flex gap-5 items-center">
          <div>
          <img src="${profileImg}" alt="" class="w-20 rounded-xl object-cover
          h-20" id="profile-image">
          </div>
          <div>
          <p class="text-2xl">${fullName}</p>
          <p class="text-md opacity-50 flex gap-1"><img src="assets/images/icon-github.svg" alt="">@${validateEmail()}</p>
          </div>
      </div>
      <p class="absolute opacity-30 text-2xl right-0 -rotate-90">${randomNum()}</p>
      </div>    
    `

    ticketContainer.innerHTML = ticketHTML;
});


