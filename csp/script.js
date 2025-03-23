
const sidebar=document.querySelector('.sidebar');
document.getElementById('list').addEventListener('click', () => {
    sidebar.style.display= 'block';
});

document.getElementById('close').addEventListener('click', () => {
    sidebar.style.display= 'none';
});





const profileBox=document.querySelector('.profile-box');
document.getElementById('pro-open').addEventListener('click', () => {
    profileBox.style.display= 'block';
});
document.getElementById('pro-open1').addEventListener('click', () => {
    profileBox.style.display= 'block';
    sidebar.style.display= 'none';
});
document.getElementById('pro-close').addEventListener('click', () => {
    profileBox.style.display= 'none';
});

const logbox=document.querySelector(".logout-box");
document.getElementById("logout").addEventListener('click', () => {
    logbox.style.display='block';
});
document.getElementById("logout-close").addEventListener('click', () =>{
    logbox.style.display='none';
});

const fbBox=document.querySelector(".fbq");
document.getElementById("fb-q").addEventListener('click', () => {
    fbBox.style.display= 'block';
});
document.getElementById("fb-close").addEventListener('click', () => {
    fbBox.style.display= 'none';
});

const postbox=document.querySelector(".post-box");
document.getElementById("post").addEventListener('click', () => {
    postbox.style.display= 'block';
});
document.getElementById("pb-close").addEventListener('click', () => {
    postbox.style.display= 'none';
});


function suc(){
    document.querySelector(".success").style.display= 'none';
}
function suc1(){
    document.querySelector(".success1").style.display= 'none';
}
function suc2(){
    document.querySelector(".success2").style.display= 'none';
}




function changemarket(){
    const market=document.getElementById("market");
    var index=document.getElementById("crop").selectedIndex;
    if(index == 1){
        market.innerHTML='<option>Select Market</option><option>Kurnool</option><option>Tenali</option>'
    }
    else if(index == 2){
        market.innerHTML='<option>Select Market</option><option>Atmakur</option><option>Chintalapudi</option><option>Kadiri</option><option>Kurnool</option><option>Mylavaram</option><option>Nandikotkur</option><option>Nuzvid</option><option>Rapur</option><option>Tiruvuru</option>'
    }
    else if(index == 3){
        market.innerHTML='<option>Select Market</option><option>Allagadda</option><option>Anaparthy</option><option>Atmakur</option><option>Banaganapalli</option><option>Gudur</option><option>Jaggampet</option><option>Karapa</option><option>Nandikotkur</option><option>Nandyal</option><option>Peddapuram</option><option>Pithapuram</option><option>Prattipadu</option><option>Rajahmundry</option><option>Rapur</option><option>Sampara</option><option>Tanuku</option><option>Tiruvuru</option><option>Tuni</option><option>Vakadu</option><option>Venkatagiri</option>'
    }
}
    
function changeprice(){
    const crop=document.getElementById("crop");
    var cropIndex=crop.selectedIndex;
    var cropText=crop.options[cropIndex].text;
    const market=document.getElementById("market");
    var marketIndex=market.selectedIndex;
    var marketText=market.options[marketIndex].text;
    const crname=document.querySelector(".d10 p crop");
    const mrname=document.querySelector(".d10 p market");
    const min=document.querySelector("#min price");
    const avg=document.querySelector("#avg price");
    const max=document.querySelector("#max price");

    if(cropIndex==1){
        if(marketIndex==1){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '4007';
            avg.innerHTML= '6391';
            max.innerHTML= '8196';
        }
        else if(marketIndex==2){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '8300';
            avg.innerHTML= '8400';
            max.innerHTML= '8500';
        }
    }
    else if(cropIndex==2){
        if(marketIndex==1){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML='2090';
            avg.innerHTML='2090';
            max.innerHTML='2090';
        }
        else if(marketIndex==2){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2100';
            avg.innerHTML= '2150';
            max.innerHTML= '2200';
        }
        else if(marketIndex==3){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '3000';
            avg.innerHTML= '3100';
            max.innerHTML= '3200';
        }
        else if(marketIndex==4){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '1912';
            avg.innerHTML= '1912';
            max.innerHTML= '2617';
        }
        else if(marketIndex==5){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '1980';
            avg.innerHTML= '2000';
            max.innerHTML= '2050';
        }
        else if(marketIndex==6){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2090';
            avg.innerHTML= '2090';
            max.innerHTML= '2090';
        }
        else if(marketIndex==7){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2100';
            avg.innerHTML= '2200';
            max.innerHTML= '2300';
        }
        else if(marketIndex==8){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2500';
            avg.innerHTML= '2700';
            max.innerHTML= '3000';
        }
        else if(marketIndex==9){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2400';
            max.innerHTML= '2500';
        }
    }
    else if(cropIndex==3){
        if(marketIndex==1){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML='2260';
            avg.innerHTML='2300';
            max.innerHTML='2350';
        }
        else if(marketIndex==2){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2040';
            avg.innerHTML= '2040';
            max.innerHTML= '2040';
        }
        else if(marketIndex==3){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2183';
            avg.innerHTML= '2183';
            max.innerHTML= '2183';
        }
        else if(marketIndex==4){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2400';
            max.innerHTML= '2500';
        }
        else if(marketIndex==5){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2318';
            max.innerHTML= '2325';
        }
        else if(marketIndex==6){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2040';
            avg.innerHTML= '2040';
            max.innerHTML= '2050';
        }
        else if(marketIndex==7){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2080';
            avg.innerHTML= '2100';
            max.innerHTML= '2183';
        }
        else if(marketIndex==8){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2183';
            avg.innerHTML= '2183';
            max.innerHTML= '2183';
        }
        else if(marketIndex==9){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2888';
            avg.innerHTML= '2888';
            max.innerHTML= '2888';
        }
        else if(marketIndex==10){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2310';
            max.innerHTML= '2320';
        }
        else if(marketIndex==11){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2183';
            avg.innerHTML= '2193';
            max.innerHTML= '2200';
        }
        else if(marketIndex==12){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2040';
            avg.innerHTML= '2050';
            max.innerHTML= '2060';
        }
        else if(marketIndex==13){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2310';
            max.innerHTML= '2320';
        }
        else if(marketIndex==14){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2340';
            max.innerHTML= '2370';
        }
        else if(marketIndex==15){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2300';
            avg.innerHTML= '2300';
            max.innerHTML= '2310';
        }
        else if(marketIndex==16){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2020';
            avg.innerHTML= '2183';
            max.innerHTML= '2200';
        }
        else if(marketIndex==17){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2400';
            avg.innerHTML= '2500';
            max.innerHTML= '2600';
        }
        else if(marketIndex==18){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2200';
            avg.innerHTML= '2300';
            max.innerHTML= '2300';
        }
        else if(marketIndex==19){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '1960';
            avg.innerHTML= '2100';
            max.innerHTML= '2183';
        }
        else if(marketIndex==20){
            crname.innerHTML= cropText;
            mrname.innerHTML= marketText;
            min.innerHTML= '2200';
            avg.innerHTML= '2300';
            max.innerHTML= '2350';
        }
    }
}











function setGoogleTranslateLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

function applyStoredLanguage() {
    const selectedLang = localStorage.getItem('selectedLanguage');
    if (selectedLang) {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
            selectElement.value = selectedLang;
            selectElement.dispatchEvent(new Event('change'));
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applyStoredLanguage();

    const translateElement = document.querySelector('.goog-te-combo');
    if (translateElement) {
        translateElement.addEventListener('change', function() {
            const selectedLanguage = translateElement.value;
            setGoogleTranslateLanguage(selectedLanguage);
        });
    }
});