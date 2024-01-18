const btnCard = document.getElementById("btnCard");

const divBaru = document.createElement("div");
const divBaru2 = document.createElement("div");
btnCard.addEventListener("click", () => {
  // play music
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("timeupdate", function () {
    if (audio.currentTime >= 360) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  });
  let divBaru3 = document.createElement('div');
  let header = document.querySelector('header');
  document.body.insertBefore(divBaru3, header);

  divBaru3.classList.add('notification');
  divBaru3.setAttribute("id", "notification");
  divBaru3.innerHTML=`<span class="kotak"></span>
  <span class="text">Stop Music</span>`;

  // stop music
  let notif = document.getElementById("notification");
  notif.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    document.body.removeChild(notif);
  });


  function addCard() {
    const script = document.getElementsByTagName("script")[0];

    document.body.insertBefore(divBaru, script);
    document.body.insertBefore(divBaru2, script);

    divBaru.classList.add("blur");
    divBaru2.classList.add("card");
  };

  function closeCard() {
    document.body.removeChild(blur);
    document.body.removeChild(card);
  };
  addCard();
  const card = document.querySelector("div.card");
  const blur = document.querySelector("div.blur");
  card.innerHTML = `<div class="textArea taCenter">
    <button id="close">×</button>
      <img src="img/1.jpg" width="90%" height="130%""></>
      <p class="al-center">“she is a very cute and adorable little girl. she has a pure heart and a beautiful soul.”</p>
    </div>
  <div class="btnArea">
  <button id='lanjut1'>></button>
  </div>`;

  const btnClose = document.getElementById("close");
  btnClose.addEventListener("click", () => {
    closeCard();
  });
  // pesan 2
  const lanjut1 = document.getElementById("lanjut1");
  lanjut1.addEventListener("click", () => {
    closeCard();
    addCard();
    card.innerHTML = `<button id="close">×</button>
    <div class="textArea taCenter">
      <img src="img/ocha.jpg" width="80%" height="110%"></>
      <p class="al-center">ocha... i learn so many things whenever we speak. the way u talk, the way u laugh, and how your mind works, i learn a lot of them.</p>
    </div>
    <div class="btnArea">
      <button id="lanjut2">></button>
    </div>`;
    const lanjut2 = document.getElementById('lanjut2');
    lanjut2.addEventListener('click',()=>{
      closeCard();
      addCard(); 
      card.innerHTML=`<button id="close">×</button>
        <div class="textArea taCenter">
        <img src="img/3.jpg" width="80%" height="110%"></>
        <p class="al-center">jujur, i pengen banget dengerin isi kepala u yang lainnya yang belum pernah u ceritain ke i. karena i tau u cape, so i dont care to your weaknesses. i choose to stay, the truth is i am here.</p>
        </div>
        <div class="btnArea">
          <button id="lanjut3">></button>
        </div>`;
      const btnClose = document.getElementById("close");
      btnClose.addEventListener("click", () => {
        closeCard();
      });
      const lanjut3 =document.getElementById('lanjut3');
      lanjut3.addEventListener('click',()=>{
        closeCard();
        addCard(); 
        card.innerHTML=`<button id="close">×</button>
        <div class="textArea taCenter">
        <img src="img/4.jpg" width="80%" height="110%"></>
        <p class="al-center">don't worry, i ga cape sama sifat u. u ga perlu berubah juga, karena berubah itu sangat susah. i cuma pengen ngarahin u ke arah yang lebih baik lagi.</p>
        </div>
        <div class="btnArea">
          <button id="lanjut4">></button>
        </div>`;
        const btnClose = document.getElementById("close");
        btnClose.addEventListener("click", () => {
          closeCard();
        });
        const lanjut4 =document.getElementById('lanjut4');
        lanjut4.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea taCenter">
          <img src="img/5.jpg" width="90%" height="120%"></>
          <p class="al-center">i bakalan selalu disini sama u, whatever happens, apapun kondisinya mau itu sehat, sakit, sedih, marah, seneng, capek, stres. i love u the way u are, and i always love u no matter what ocha.</p>
          </div>
          <div class="btnArea">
            <button id="lanjut5">></button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const lanjut5 =document.getElementById('lanjut5');
          lanjut5.addEventListener('click',()=>{
          closeCard();
          addCard(); 
          card.innerHTML=`<button id="close">×</button>
          <div class="textArea taCenter">
          <img src="img/10.gif" width="65%" height="115%"></>
          <p class="al-center">when u feel like hope is gone, just run to my arms again. i will do anything for u, i hope u enjoyed ur birthday and hopefully 19 will treat u well :)</p>
          </div>
          <div class="btnArea">
            <button id="keluar">back!</button>
          </div>`;
          const btnClose = document.getElementById("close");
          btnClose.addEventListener("click", () => {
            closeCard();
          });
          const keluar = document.getElementById("keluar");
          keluar.addEventListener("click", () => {
            closeCard();
          });
        });
        });
      });
    })
    // close
    const btnClose = document.getElementById("close");
    btnClose.addEventListener("click", () => {
      closeCard();
    });
  });
});
