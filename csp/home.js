const d8=document.querySelector('.d8');
const infoimg1=document.querySelector('.pest-info1 img');
const info11=document.querySelector('.pest-info1 h1');
const info21=document.querySelector('.pest-info1 h2');
const info31=document.querySelector('.pest-info1 p');

document.getElementById('close-info1').addEventListener('click', () => {
    d8.style.display='none';
});

document.getElementById('coragen1').addEventListener('click', () => {
    d8.style.display='block';
    infoimg1.src='images/coragen-fmc.png';
    info11.innerHTML='Coragen Insecticide';
    info21.innerHTML='FMC';
    info31.innerHTML="<h2>Pesticide: Coragen</h2><ul><li><strong>Key Features:</strong></li><ul><li>Highly effective against lepidopteran pests.</li><li>Provides fast knockdown and long-lasting control.</li><li>Low toxicity to beneficial insects.</li></ul><li><strong>Benefits:</strong></li><ul><li>Helps in reducing crop damage from caterpillars.</li><li>Flexible application methods (foliar or soil application).</li><li>Compatible with various tank mixes.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Targets pests like armyworms, cutworms, and leafworms.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.25 to 0.5 liters per hectare.</li><li>Mix with sufficient water for thorough coverage.</li></ul></ul>";
});
document.getElementById('em11').addEventListener('click', () => {
    d8.style.display='block';
    infoimg1.src='images/em-1-dhanuka.png';
    info11.innerHTML='EM-1 Insecticide';
    info21.innerHTML='Dhanuka';
    info31.innerHTML="<h2>Pesticide: EM-1</h2><ul><li><strong>Key Features:</strong></li><ul><li>Contains effective microorganisms that enhance soil health.</li><li>Improves plant growth and resilience.</li><li>Can be used as a foliar spray or soil drench.</li></ul><li><strong>Benefits:</strong></li><ul><li>Promotes beneficial microbial activity in the soil.</li><li>Reduces the incidence of soil-borne diseases.</li><li>Enhances nutrient availability to plants.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Helps in managing root rot and other soil-borne pathogens.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 1 to 2 liters per hectare.</li><li>Dilute with water (1:100) for application.</li></ul></ul>";
});
document.getElementById('jump1').addEventListener('click', () => {
    d8.style.display='block';
    infoimg1.src='images/jump-bayer.png';
    info11.innerHTML='Jump Insecticide';
    info21.innerHTML='Bayer';
    info31.innerHTML="<h2>Pesticide: Jump</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide.</li><li>Fast-acting with quick knockdown effect.</li><li>Suitable for both indoor and outdoor use.</li></ul><li><strong>Benefits:</strong></li><ul><li>Effective against a variety of insect pests.</li><li>Long-lasting residual activity.</li><li>Safe for use on many crops.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls common pests such as aphids, caterpillars, and beetles.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5-1.0 liters per hectare.</li><li>Mix with water according to label instructions.</li></ul></ul>";
});
document.getElementById('simodis1').addEventListener('click', () => {
    d8.style.display='block';
    infoimg1.src='images/simodis-syngenta.jpg';
    info11.innerHTML='Simodis Insecticide';
    info21.innerHTML='Syngenta';
    info31.innerHTML="<h2>Simodis Pesticide Details</h2><ul><li><strong>Product Name:</strong> Simodis</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide and acaricide</li><li>Targets a broad range of pests including spider mites and aphids</li><li>Systemic action with long residual activity</li><li>Low impact on beneficial insects when used appropriately</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by controlling pest populations effectively</li><li>Enhances crop quality by minimizing pest damage</li><li>Economical with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Spider Mites</li><li>Aphids</li><li>Whiteflies</li></ul>";
});
document.getElementById('tafgor1').addEventListener('click', () => {
    d8.style.display='block';
    infoimg1.src='images/tafgor-rallis.png';
    info11.innerHTML='Tafgor Insecticide';
    info21.innerHTML='Rallis';
    info31.innerHTML="<h2>Tafgor Pesticide Details</h2><ul><li><strong>Product Name:</strong> Tafgor</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide and acaricide</li><li>Controls a wide range of pests including caterpillars and aphids</li><li>Systemic action provides long-lasting protection</li><li>Low toxicity to beneficial insects when used correctly</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively managing pest populations</li><li>Improves crop quality by reducing pest damage</li><li>Cost-effective with fewer applications required</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Caterpillars</li><li>Aphids</li><li>Thrips</li></ul>";
});