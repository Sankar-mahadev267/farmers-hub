
const d9=document.querySelector('.d9');
const infoimg=document.querySelector('.pest-info img');
const info1=document.querySelector('.pest-info h1');
const info2=document.querySelector('.pest-info h2');
const info3=document.querySelector('.pest-info p');
document.getElementById('close-info').addEventListener('click', () => {
    d9.style.display='none';
});

document.getElementById('abacin').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/abacin-crystalCropProtection.png';
    info1.innerHTML='Abacin Insecticide';
    info2.innerHTML='Crystal Crop Protection';
    info3.innerHTML="<h2>Pesticide: Abacin</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide effective against various pests.</li><li>Contains the active ingredient Abamectin.</li><li>Safe for beneficial insects when applied correctly.</li></ul><li><strong>Benefits:</strong></li><ul><li>Highly effective against mites and insects.</li><li>Reduces pest populations quickly.</li><li>Improves crop yield and quality.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Commonly used against spider mites and leaf miners.</li></ul><li><strong>Dosage:</strong></li><ul><li>Recommended dosage is 0.5-1.0 ml per liter of water.</li><li>Application frequency: every 7-14 days as needed.</li></ul></ul>"
});
document.getElementById('actara').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/actara-syngenta.png';
    info1.innerHTML='Actara Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Pesticide: Actara</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum systemic insecticide.</li><li>Active ingredient: Thiamethoxam.</li><li>Effective against a wide range of sucking and chewing pests.</li></ul><li><strong>Benefits:</strong></li><ul><li>Quick action against pests; provides rapid control.</li><li>Long-lasting residual effect.</li><li>Improves crop health and yield.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls aphids, whiteflies, thrips, and other sap-sucking pests.</li></ul><li><strong>Dosage:</strong></li><ul><li>Recommended dosage is 0.25-0.5 grams per liter of water.</li><li>Application frequency: every 7-14 days as needed.</li></ul></ul>";
});
document.getElementById('admire').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/admire-bayer.png';
    info1.innerHTML='Admire Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Pesticide: Admire</h2><ul><li><strong>Key Features:</strong></li><ul><li>Systemic insecticide with active ingredient: Imidacloprid.</li><li>Highly effective against a variety of sucking insects.</li><li>Translocated within the plant, providing protection from the inside out.</li></ul><li><strong>Benefits:</strong></li><ul><li>Long-lasting control of pests; up to 4 weeks of residual activity.</li><li>Minimal impact on beneficial insects when used as directed.</li><li>Improves crop yield and quality by controlling pest populations.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Effective against aphids, whiteflies, and certain beetles.</li></ul><li><strong>Dosage:</strong></li><ul><li>Recommended dosage is 0.5-1.0 ml per liter of water for foliar application.</li><li>Soil application: 1-2 liters per hectare, depending on the crop and pest pressure.</li></ul></ul>";
});
document.getElementById('alika').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/alika-syngenta.jpg';
    info1.innerHTML='Alika Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Pesticide: Alika</h2><ul><li><strong>Key Features:</strong></li><ul><li>Contact and systemic action insecticide.</li><li>Active ingredient: Chlorantraniliprole.</li><li>Effective against a wide range of insect pests.</li></ul><li><strong>Benefits:</strong></li><ul><li>Provides long-lasting control of target pests.</li><li>Low toxicity to humans and beneficial insects.</li><li>Improves overall crop health and yield.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Effective against caterpillars, including the Fall Armyworm and Leafcutter ants.</li></ul><li><strong>Dosage:</strong></li><ul><li>Foliar application: 0.3-0.5 ml per liter of water.</li><li>Soil application: 1-1.5 liters per hectare, depending on the crop and pest population.</li></ul></ul>";
});
document.getElementById('ampligo').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/ampligo-syngenta.png';
    info1.innerHTML='Ampligo Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Pesticide: Ampligo</h2><ul><li><strong>Key Features:</strong></li><ul><li>Insecticide with both contact and systemic action.</li><li>Active ingredients: Chlorantraniliprole and Lambda-cyhalothrin.</li><li>Effective against a broad spectrum of insect pests.</li></ul><li><strong>Benefits:</strong></li><ul><li>Quick knockdown of target pests.</li><li>Long-lasting residual activity.</li><li>Low toxicity to beneficial insects and mammals.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls caterpillars, aphids, thrips, and whiteflies.</li></ul><li><strong>Dosage:</strong></li><ul><li>Foliar application: 0.4-0.8 ml per liter of water.</li><li>Application rate: 1-2 liters per hectare, depending on pest pressure.</li></ul></ul>";
});
document.getElementById('anant').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/anant-rallis.jpg';
    info1.innerHTML='Anant Insecticide';
    info2.innerHTML='Rallis';
    info3.innerHTML="<h2>Pesticide: Anant</h2><ul><li><strong>Key Features:</strong></li><ul><li>Effective against a wide range of pests.</li><li>Combination of systemic and contact action.</li><li>Long-lasting efficacy with low toxicity to beneficial insects.</li></ul><li><strong>Benefits:</strong></li><ul><li>Provides quick knockdown of target pests.</li><li>Reduces pest resistance due to multiple modes of action.</li><li>Safe for use in integrated pest management (IPM) programs.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls aphids, thrips, whiteflies, and caterpillars.</li></ul><li><strong>Dosage:</strong></li><ul><li>Foliar application: 0.5-1 ml per liter of water.</li><li>Application rate: 1-2 liters per hectare, based on pest pressure.</li></ul></ul>";
});
document.getElementById('areva').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/areva-dhanuka.png';
    info1.innerHTML='Areva Insecticide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Pesticide: Areva</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide effective against various pests.</li><li>Fast-acting with both contact and systemic properties.</li><li>Minimal impact on beneficial insects and pollinators.</li></ul><li><strong>Benefits:</strong></li><ul><li>Provides long-lasting control of target pests.</li><li>Helps prevent resistance development through multiple modes of action.</li><li>Compatible with most crop protection products for flexible application.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Effective against aphids, spider mites, and whiteflies.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 1-2 liters per hectare.</li><li>Mix with 200-400 liters of water for foliar application.</li></ul></ul>";
});
document.getElementById('benevia').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/benevia-fmc.jpg';
    info1.innerHTML='Benevia Insecticide';
    info2.innerHTML='FMC';
    info3.innerHTML="<h2>Pesticide: Benevia</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide effective against a wide range of pests.</li><li>Fast-acting with both contact and systemic action.</li><li>Reduced risk of resistance due to multiple modes of action.</li></ul><li><strong>Benefits:</strong></li><ul><li>Provides quick knockdown and residual control.</li><li>Safe for beneficial insects when used as directed.</li><li>Compatible with integrated pest management (IPM) programs.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Targets major pests such as thrips, whiteflies, and aphids.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5 to 1.0 liter per hectare.</li><li>Mix with 200-400 liters of water for foliar application.</li></ul></ul>";
});
document.getElementById('chess').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/chess-syngenta.png';
    info1.innerHTML='Chess Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Pesticide: Chess</h2><ul><li><strong>Key Features:</strong></li><ul><li>Systemic insecticide with translaminar movement.</li><li>Highly effective against a wide range of lepidopteran pests.</li><li>Provides long-lasting protection and residual activity.</li></ul><li><strong>Benefits:</strong></li><ul><li>Rapid action on target pests leading to quick knockdown.</li><li>Minimal impact on beneficial insects.</li><li>Compatible with integrated pest management (IPM) strategies.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Primarily used against caterpillars, including fall armyworm and loopers.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5 to 1.0 liter per hectare.</li><li>Mix with 200-300 liters of water for foliar application.</li></ul></ul>";
});
document.getElementById('confidor').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/confidor-bayer.jpg';
    info1.innerHTML='Confidor Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Pesticide: Confidor</h2><ul><li><strong>Key Features:</strong></li><ul><li>Systemic insecticide effective against sucking pests.</li><li>Rapid absorption by plants, providing quick protection.</li><li>Long-lasting residual activity.</li></ul><li><strong>Benefits:</strong></li><ul><li>Highly effective against a range of pests, including aphids and whiteflies.</li><li>Minimal impact on beneficial insects when used correctly.</li><li>Can be applied via soil or foliar methods.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Targets sucking insects such as aphids, whiteflies, and thrips.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5 to 1.0 liter per hectare.</li><li>Mix with 200-400 liters of water for foliar application.</li></ul></ul>";
});
document.getElementById('coragen').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/coragen-fmc.png';
    info1.innerHTML='Coragen Insecticide';
    info2.innerHTML='FMC';
    info3.innerHTML="<h2>Pesticide: Coragen</h2><ul><li><strong>Key Features:</strong></li><ul><li>Highly effective against lepidopteran pests.</li><li>Provides fast knockdown and long-lasting control.</li><li>Low toxicity to beneficial insects.</li></ul><li><strong>Benefits:</strong></li><ul><li>Helps in reducing crop damage from caterpillars.</li><li>Flexible application methods (foliar or soil application).</li><li>Compatible with various tank mixes.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Targets pests like armyworms, cutworms, and leafworms.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.25 to 0.5 liters per hectare.</li><li>Mix with sufficient water for thorough coverage.</li></ul></ul>";
});
document.getElementById('delegate').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/delegate-cortevaAgriscience.png';
    info1.innerHTML='Delegate Insecticide';
    info2.innerHTML='Corteva Agriscience';
    info3.innerHTML="<h2>Pesticide: Delegate</h2><ul><li><strong>Key Features:</strong></li><ul><li>Targeted action against lepidopteran pests.</li><li>Low toxicity to beneficial insects and pollinators.</li><li>Excellent residual activity for prolonged protection.</li></ul><li><strong>Benefits:</strong></li><ul><li>Rapid control of caterpillar pests.</li><li>Flexible application timing and methods.</li><li>Reduces crop damage and improves yield quality.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Effective against pests such as fruitworms, armyworms, and loopers.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.2 to 0.3 liters per hectare.</li><li>Mix with sufficient water for thorough coverage.</li></ul></ul>";
});
document.getElementById('ekalux').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/ekalux-syngenta.jpg';
    info1.innerHTML='Delegate Insecticide';
    info2.innerHTML='Corteva Agriscience';
    info3.innerHTML="<h2>Pesticide: Ekalux</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide effective against various pests.</li><li>Quick knockdown effect on target insects.</li><li>Low toxicity to mammals and beneficial insects.</li></ul><li><strong>Benefits:</strong></li><ul><li>Effective control of hard-to-manage pests.</li><li>Improves crop yield and quality.</li><li>Flexible application methods (foliar spray or soil application).</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Targets pests like aphids, thrips, and whiteflies.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 1 to 2 liters per hectare.</li><li>Mix with sufficient water for effective coverage.</li></ul></ul>";
});
document.getElementById('em1').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/em-1-dhanuka.png';
    info1.innerHTML='EM-1 Insecticide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Pesticide: EM-1</h2><ul><li><strong>Key Features:</strong></li><ul><li>Contains effective microorganisms that enhance soil health.</li><li>Improves plant growth and resilience.</li><li>Can be used as a foliar spray or soil drench.</li></ul><li><strong>Benefits:</strong></li><ul><li>Promotes beneficial microbial activity in the soil.</li><li>Reduces the incidence of soil-borne diseases.</li><li>Enhances nutrient availability to plants.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Helps in managing root rot and other soil-borne pathogens.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 1 to 2 liters per hectare.</li><li>Dilute with water (1:100) for application.</li></ul></ul>";
});
document.getElementById('exponus').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/exponus-basf.jpg';
    info1.innerHTML='EM-1 Insecticide';
    info2.innerHTML='BASF';
    info3.innerHTML="<h2>Pesticide: Exponus</h2><ul><li><strong>Key Features:</strong></li><ul><li>Systemic insecticide with high efficacy against pests.</li><li>Provides long-lasting protection.</li><li>Low toxicity to beneficial insects and pollinators.</li></ul><li><strong>Benefits:</strong></li><ul><li>Effective against a wide range of insect pests.</li><li>Helps in reducing pest resistance.</li><li>Improves crop yield and quality.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Primarily targets pests like aphids, whiteflies, and thrips.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5 to 1 liter per hectare.</li><li>Dilute with water as per label instructions.</li></ul></ul>";
});
document.getElementById('ferterra').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/ferterra-fmc.webp';
    info1.innerHTML='Ferterra Insecticide';
    info2.innerHTML='FMC';
    info3.innerHTML="<h2>Pesticide: Ferterra</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum fungicide effective against various fungal diseases.</li><li>Enhances plant health and growth.</li><li>Provides residual protection to crops.</li></ul><li><strong>Benefits:</strong></li><ul><li>Controls a wide range of leaf and root diseases.</li><li>Promotes higher yield and quality of produce.</li><li>Safe for use on a variety of crops with minimal environmental impact.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Effective against powdery mildew, downy mildew, and root rot.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 1-2 liters per hectare.</li><li>Mix with water as per label recommendations.</li></ul></ul>";
});
document.getElementById('furadan3g').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/furadan-3g-crystalcropprotection.jpg';
    info1.innerHTML='Furadan 3g Insecticide';
    info2.innerHTML='Crystal Crop Protection';
    info3.innerHTML="<h2>Furadan 3G Pesticide Details</h2><ul><li><strong>Product Name:</strong> Furadan 3G</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide and nematicide</li><li>Effective against a variety of soil-dwelling and foliar pests</li><li>Systemic action provides thorough pest control</li><li>Long-lasting residual effect</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by controlling pests effectively</li><li>Improves root health by managing nematode populations</li><li>Reduces the need for multiple applications, saving time and costs</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 5-10 kg per hectare</li><li><strong>Blackgram:</strong> 5-10 kg per hectare</li><li><strong>Maize:</strong> 5-10 kg per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Root Knot Nematodes</li><li>Stem Borers</li><li>White Grubs</li></ul>";
});
document.getElementById('gracia').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/gracia-godrejAgrovet.jpg';
    info1.innerHTML='Gracia Insecticide';
    info2.innerHTML='Godrej Agrovet';
    info3.innerHTML="<h2>Pesticide: Gracia</h2><ul><li><strong>Key Features:</strong></li><ul><li>Highly effective systemic insecticide.</li><li>Targets a wide range of sucking pests.</li><li>Low toxicity to beneficial insects.</li></ul><li><strong>Benefits:</strong></li><ul><li>Rapid action against pests, ensuring quick relief.</li><li>Long residual effect, providing extended protection.</li><li>Improves crop yield and quality.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls aphids, whiteflies, and thrips.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5-1.0 liters per hectare.</li><li>Mix with water as per label recommendations.</li></ul></ul>";
});
document.getElementById('jump').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/jump-bayer.png';
    info1.innerHTML='Jump Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Pesticide: Jump</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide.</li><li>Fast-acting with quick knockdown effect.</li><li>Suitable for both indoor and outdoor use.</li></ul><li><strong>Benefits:</strong></li><ul><li>Effective against a variety of insect pests.</li><li>Long-lasting residual activity.</li><li>Safe for use on many crops.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls common pests such as aphids, caterpillars, and beetles.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5-1.0 liters per hectare.</li><li>Mix with water according to label instructions.</li></ul></ul>";
});
document.getElementById('karate').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/karate-syngenta.jpg';
    info1.innerHTML='Karate Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Karate Pesticide Details</h2><ul><li><strong>Product Name:</strong> Karate</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide effective against a variety of pests</li><li>Quick knockdown with both contact and systemic action</li><li>Long-lasting residual protection</li><li>Low toxicity to beneficial insects and the environment</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by controlling pest populations effectively</li><li>Improves crop quality by minimizing damage from insects</li><li>Reduces the number of pesticide applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.3 g per liter of water</li><li><strong>Blackgram:</strong> 0.2 g per liter of water</li><li><strong>Maize:</strong> 0.3 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Leaf Folder</li><li>Thrips Infestation</li><li>Stem Borers</li></ul>";
});
document.getElementById('lancergold').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/lancer-gold-upl.jpg';
    info1.innerHTML='Lancer Gold Insecticide';
    info2.innerHTML='UPL';
    info3.innerHTML="<h2>Lancer Gold Pesticide Details</h2><ul><li><strong>Product Name:</strong> Lancer Gold</li></ul><h2>Key Features</h2><ul><li>Advanced formulation providing broad-spectrum insect control</li><li>Effective against a variety of pests including caterpillars and aphids</li><li>Fast-acting with both contact and systemic action</li><li>Low toxicity to beneficial insects and the environment</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by effectively managing pest populations</li><li>Improves overall crop quality by reducing pest damage</li><li>Reduces the need for multiple pesticide applications</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Armyworms</li><li>Leaf Hoppers</li><li>Cutworms</li></ul>";
});
document.getElementById('marshal').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/marshal-fmc.png';
    info1.innerHTML='Marshal Insecticide';
    info2.innerHTML='FMC';
    info3.innerHTML="<h2>Marshal Pesticide Details</h2><ul><li><strong>Product Name:</strong> Marshal</li></ul><h2>Key Features</h2><ul><li>Effective insecticide with a unique mode of action</li><li>Targets a wide range of pests including beetles and caterpillars</li><li>Rapid knockdown and long-lasting residual control</li><li>Safe for beneficial insects when used as directed</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by controlling pest infestations</li><li>Improves crop quality by reducing pest-related damage</li><li>Cost-effective solution with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Stem Borer</li><li>Fall Armyworm</li><li>Leaf Folder</li></ul>";
});
document.getElementById('media').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/media-dhanuka.png';
    info1.innerHTML='Media Insecticide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Media Pesticide Details</h2><ul><li><strong>Product Name:</strong> Media</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide effective against various pests</li><li>Provides quick knockdown and long-lasting control</li><li>Low toxicity to beneficial insects and pollinators</li><li>Highly effective in both preventive and curative applications</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by managing pest populations effectively</li><li>Enhances crop quality by reducing pest damage</li><li>Cost-effective with fewer required applications</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Leaf Folder</li><li>Thrips Infestation</li><li>Root Aphids</li></ul>";
});
document.getElementById('monostar').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/monostar-SWAL.png';
    info1.innerHTML='Monostar Insecticide';
    info2.innerHTML='SWAL';
    info3.innerHTML="<h2>Monostar Pesticide Details</h2><ul><li><strong>Product Name:</strong> Monostar</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide against a range of pests</li><li>Fast-acting with both contact and systemic action</li><li>Long-lasting protection with minimal environmental impact</li><li>Safe for beneficial insects when applied as directed</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by effectively managing pest infestations</li><li>Improves crop quality by reducing damage from insects</li><li>Cost-efficient with fewer applications required</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.3 g per liter of water</li><li><strong>Blackgram:</strong> 0.2 g per liter of water</li><li><strong>Maize:</strong> 0.3 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Stem Borer</li><li>Leaf Hoppers</li><li>Armyworms</li></ul>";
});
document.getElementById('movento').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/moventoEnergy-bayer.jpg';
    info1.innerHTML='Movento Energy Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Movento Energy Pesticide Details</h2><ul><li><strong>Product Name:</strong> Movento Energy</li></ul><h2>Key Features</h2><ul><li>Unique systemic insecticide targeting sap-sucking pests</li><li>Effective against aphids, whiteflies, and spider mites</li><li>Offers long-lasting protection with minimal environmental impact</li><li>Compatible with integrated pest management (IPM) programs</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively controlling pest populations</li><li>Improves crop quality by reducing pest-related damage</li><li>Reduces the frequency of pesticide applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Brown Planthopper</li><li>Leaf Curl Virus</li><li>Spider Mite Infestation</li></ul>";
});
document.getElementById('oberon').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/oberon-bayer.jpg';
    info1.innerHTML='Oberon Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Oberon Pesticide Details</h2><ul><li><strong>Product Name:</strong> Oberon</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide targeting a range of pests</li><li>Provides quick knockdown and long-lasting control</li><li>Low toxicity to beneficial insects and pollinators</li><li>Flexible application methods available</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by controlling pest populations effectively</li><li>Improves crop quality by minimizing pest damage</li><li>Cost-effective with fewer applications required</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Thrips Infestation</li><li>Whiteflies</li><li>Spider Mites</li></ul>";
});
document.getElementById('omite').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/omite-dhanuka.png';
    info1.innerHTML='Omite Insecticide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Omite Pesticide Details</h2><ul><li><strong>Product Name:</strong> Omite</li></ul><h2>Key Features</h2><ul><li>Effective miticide targeting spider mites and other pests</li><li>Provides quick action with long-lasting residual control</li><li>Low toxicity to beneficial insects and the environment</li><li>Easy to mix and apply with various methods</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by effectively managing mite populations</li><li>Improves crop quality by minimizing damage from mites</li><li>Cost-effective solution with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Spider Mites</li><li>Broad Mites</li><li>Two-Spotted Spider Mites</li></ul>";
});
document.getElementById('pager').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/pager-dhanuka.png';
    info1.innerHTML='Pager Insecticide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Pager Pesticide Details</h2><ul><li><strong>Product Name:</strong> Pager</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide targeting various pests</li><li>Fast-acting with both contact and systemic action</li><li>Effective in controlling resistant pest populations</li><li>Safe for beneficial insects when used as directed</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively managing pest infestations</li><li>Improves crop quality by reducing pest damage</li><li>Cost-efficient with fewer required applications</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Leaf Folder</li><li>Thrips Infestation</li><li>Jassids</li></ul>";
});
document.getElementById('phoskill').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/phoskill-upl.png';
    info1.innerHTML='Phoskill Insecticide';
    info2.innerHTML='UPL';
    info3.innerHTML="<h2>Phoskill Pesticide Details</h2><ul><li><strong>Product Name:</strong> Phoskill</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide and acaricide</li><li>Targets a wide range of pests, including leaf miners and aphids</li><li>Rapid action with a long residual effect</li><li>Safe for beneficial insects when used correctly</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by effectively controlling pest populations</li><li>Improves crop quality by minimizing pest-related damage</li><li>Cost-effective with fewer applications required</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Leaf Miners</li><li>Aphids</li><li>Whiteflies</li></ul>";
});
document.getElementById('police').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/police-gharda.jpg';
    info1.innerHTML='Police Insecticide';
    info2.innerHTML='Gharda';
    info3.innerHTML="<h2>Police Pesticide Details</h2><ul><li><strong>Product Name:</strong> Police</li></ul><h2>Key Features</h2><ul><li>Effective broad-spectrum insecticide</li><li>Controls a wide range of pests including caterpillars and beetles</li><li>Fast-acting with both contact and systemic action</li><li>Compatible with IPM practices</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by controlling pest infestations effectively</li><li>Reduces pest-related damage, improving crop quality</li><li>Cost-effective solution with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Armyworms</li><li>Diamondback Moths</li><li>Leaf Beetles</li></ul>";
});
document.getElementById('rogor').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/rogor-fmc.jpg';
    info1.innerHTML='Rogor Insecticide';
    info2.innerHTML='FMC';
    info3.innerHTML="<h2>Pesticide: Jump</h2><ul><li><strong>Key Features:</strong></li><ul><li>Broad-spectrum insecticide.</li><li>Fast-acting with quick knockdown effect.</li><li>Suitable for both indoor and outdoor use.</li></ul><li><strong>Benefits:</strong></li><ul><li>Effective against a variety of insect pests.</li><li>Long-lasting residual activity.</li><li>Safe for use on many crops.</li></ul><li><strong>Disease Controlled:</strong></li><ul><li>Controls common pests such as aphids, caterpillars, and beetles.</li></ul><li><strong>Dosage:</strong></li><ul><li>Application rate: 0.5-1.0 liters per hectare.</li><li>Mix with water according to label instructions.</li></ul></ul>";
});
document.getElementById('simodis').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/simodis-syngenta.jpg';
    info1.innerHTML='Simodis Insecticide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Simodis Pesticide Details</h2><ul><li><strong>Product Name:</strong> Simodis</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide and acaricide</li><li>Targets a broad range of pests including spider mites and aphids</li><li>Systemic action with long residual activity</li><li>Low impact on beneficial insects when used appropriately</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by controlling pest populations effectively</li><li>Enhances crop quality by minimizing pest damage</li><li>Economical with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Spider Mites</li><li>Aphids</li><li>Whiteflies</li></ul>";
});
document.getElementById('solomon').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/solomon-bayer.png';
    info1.innerHTML='Solomon Insecticide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Solomon Pesticide Details</h2><ul><li><strong>Product Name:</strong> Solomon</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide effective against various pests</li><li>Systemic action providing long-lasting control</li><li>Effective against resistant pest populations</li><li>Compatible with integrated pest management (IPM) practices</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by effectively managing pest infestations</li><li>Enhances crop quality by reducing pest damage</li><li>Cost-effective with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Leaf Hoppers</li><li>Thrips</li><li>Stem Borers</li></ul>";
});
document.getElementById('tafgor').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/tafgor-rallis.png';
    info1.innerHTML='Tafgor Insecticide';
    info2.innerHTML='Rallis';
    info3.innerHTML="<h2>Tafgor Pesticide Details</h2><ul><li><strong>Product Name:</strong> Tafgor</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide and acaricide</li><li>Controls a wide range of pests including caterpillars and aphids</li><li>Systemic action provides long-lasting protection</li><li>Low toxicity to beneficial insects when used correctly</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively managing pest populations</li><li>Improves crop quality by reducing pest damage</li><li>Cost-effective with fewer applications required</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.4 g per liter of water</li><li><strong>Blackgram:</strong> 0.3 g per liter of water</li><li><strong>Maize:</strong> 0.4 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Caterpillars</li><li>Aphids</li><li>Thrips</li></ul>";
});
document.getElementById('ulala').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/ulala-upl.jpg';
    info1.innerHTML='Ulala Insecticide';
    info2.innerHTML='UPL';
    info3.innerHTML="<h2>Ulala Pesticide Details</h2><ul><li><strong>Product Name:</strong> Ulala</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide effective against a variety of pests</li><li>Fast-acting with both contact and systemic action</li><li>Low toxicity to beneficial insects when applied correctly</li><li>Compatible with integrated pest management (IPM) practices</li></ul><h2>Benefits</h2><ul><li>Increases crop yield by controlling pest populations effectively</li><li>Enhances crop quality by minimizing pest damage</li><li>Cost-effective with fewer applications needed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Stem Borer</li><li>Leaf Folder</li><li>Thrips</li></ul>";
});
document.getElementById('acrobat').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/acrobatF-BASF.png';
    info1.innerHTML='Acrobat Fungicide';
    info2.innerHTML='BASF';
    info3.innerHTML="<h2>Acrobat Pesticide Details</h2><ul><li><strong>Product Name:</strong> Acrobat</li></ul><h2>Key Features</h2><ul><li>Effective fungicide with systemic action</li><li>Controls a wide range of fungal diseases</li><li>Rapid absorption and translocation in plants</li><li>Low toxicity to non-target organisms</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by effectively managing fungal infections</li><li>Enhances quality of produce by reducing disease impact</li><li>Cost-effective with prolonged residual activity</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blast</li><li>Sheath Blight</li><li>Downy Mildew</li></ul>";
});
document.getElementById('aliette').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/alietteF-bayer.png';
    info1.innerHTML='Aliette IFungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Aliette Pesticide Details</h2><ul><li><strong>Product Name:</strong> Aliette</li></ul><h2>Key Features</h2><ul><li>Systemic fungicide with protective and curative properties</li><li>Effective against soil-borne and foliar diseases</li><li>Promotes root development and enhances plant growth</li><li>Low toxicity to non-target organisms and beneficial insects</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by controlling diseases effectively</li><li>Enhances quality of produce by reducing disease damage</li><li>Cost-effective with a long-lasting effect</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1 g per liter of water</li><li><strong>Blackgram:</strong> 0.8 g per liter of water</li><li><strong>Maize:</strong> 1 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Downy Mildew</li><li>Rice Blast</li><li>Phytophthora Blight</li></ul>";
});
document.getElementById('amistar').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/amistarF-syngenta.png';
    info1.innerHTML='Amistr Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Amistar Pesticide Details</h2><ul><li><strong>Product Name:</strong> Amistar</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide with systemic action</li><li>Effective against a wide range of fungal diseases</li><li>Provides both preventive and curative control</li><li>Low toxicity to non-target organisms</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively managing fungal infections</li><li>Improves crop quality by reducing disease impact</li><li>Flexible application options and long-lasting effects</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Blast</li><li>Sheath Blight</li><li>Powdery Mildew</li></ul>";
});
document.getElementById('amistartop').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/amistarTopF-syngenta.png';
    info1.innerHTML='Amistar Top Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Amistar Top Pesticide Details</h2><ul><li><strong>Product Name:</strong> Amistar Top</li></ul><h2>Key Features</h2><ul><li>Combination of systemic and contact action</li><li>Broad-spectrum fungicide effective against various fungal diseases</li><li>Provides both preventive and curative properties</li><li>Compatible with a wide range of crops</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield and quality by effectively controlling diseases</li><li>Long-lasting protection with fewer applications needed</li><li>Low toxicity to beneficial insects and non-target organisms</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.6 g per liter of water</li><li><strong>Blackgram:</strong> 0.5 g per liter of water</li><li><strong>Maize:</strong> 0.6 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Blast</li><li>Sheath Blight</li><li>Leaf Spot</li></ul>";
});
document.getElementById('abacil').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/AmruthABACIL LiquidF-amruthOrganic.jpg';
    info1.innerHTML='Abacil Liquid Fungicide';
    info2.innerHTML='Amruth Organic';
    info3.innerHTML="<h2>Abacil Liquid Pesticide Details</h2><ul><li><strong>Product Name:</strong> Abacil Liquid</li></ul><h2>Key Features</h2><ul><li>Highly effective systemic insecticide</li><li>Controls a wide range of insect pests</li><li>Fast-acting with rapid knockdown effect</li><li>Minimal impact on beneficial insects</li></ul><h2>Benefits</h2><ul><li>Improves crop health and yield by effectively managing pests</li><li>Reduces crop damage and enhances quality</li><li>Flexible application options and compatibility with other agrochemicals</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 ml per liter of water</li><li><strong>Blackgram:</strong> 0.8 ml per liter of water</li><li><strong>Maize:</strong> 1.0 ml per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Leafhoppers</li><li>Whiteflies</li><li>Thrips</li></ul>";
});
document.getElementById('antracol').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/antracolF-bayer.jpg';
    info1.innerHTML='Antracol Fungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Antracol Pesticide Details</h2><ul><li><strong>Product Name:</strong> Antracol</li></ul><h2>Key Features</h2><ul><li>Systemic fungicide with broad-spectrum activity</li><li>Effective against multiple fungal pathogens</li><li>Provides both preventive and curative action</li><li>Enhances crop health and resistance</li></ul><h2>Benefits</h2><ul><li>Improves yield by controlling diseases effectively</li><li>Reduces crop losses due to fungal infections</li><li>Long-lasting protection with flexible application</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.4 g per liter of water</li><li><strong>Maize:</strong> 0.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Blast</li><li>Sheath Blight</li><li>Leaf Spot</li></ul>";
});
document.getElementById('avtar').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/avtarF-indofil.jpg';
    info1.innerHTML='Avtar Fungicide';
    info2.innerHTML='Indofil';
    info3.innerHTML="<h2>Avtar Pesticide Details</h2><ul><li><strong>Product Name:</strong> Avtar</li></ul><h2>Key Features</h2><ul><li>Effective systemic insecticide with translaminar action</li><li>Targets a wide range of pests</li><li>Rapid action with long residual effect</li><li>Safe for beneficial insects when used as directed</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield by effectively managing pest populations</li><li>Reduces crop damage and improves quality</li><li>Flexible application methods available</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 ml per liter of water</li><li><strong>Blackgram:</strong> 0.8 ml per liter of water</li><li><strong>Maize:</strong> 1.0 ml per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Stem Borer</li><li>Leaf Folder</li><li>Whitefly</li></ul>";
});
document.getElementById('bavisti').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/bavistiF-crystalCropProtection.png';
    info1.innerHTML='Bavisti Fungicide';
    info2.innerHTML='Crystal Crop Protection';
    info3.innerHTML="<h2>Bavisti Pesticide Details</h2><ul><li><strong>Product Name:</strong> Bavisti</li></ul><h2>Key Features</h2><ul><li>Highly effective systemic fungicide</li><li>Provides long-lasting protection against a variety of diseases</li><li>Works by inhibiting fungal growth and spore formation</li><li>Compatible with most agricultural practices</li></ul><h2>Benefits</h2><ul><li>Improves crop yield by preventing disease outbreaks</li><li>Reduces the need for multiple applications</li><li>Enhances overall plant health and resilience</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 g per liter of water</li><li><strong>Blackgram:</strong> 0.8 g per liter of water</li><li><strong>Maize:</strong> 1.0 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Fungal Leaf Spot</li><li>Downy Mildew</li><li>Blast Disease</li></ul>";
});
document.getElementById('blitox').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/blitoxF-rallis.png';
    info1.innerHTML='Blitox Fungicide';
    info2.innerHTML='Rallis';
    info3.innerHTML="<h2>Blitox Pesticide Details</h2><ul><li><strong>Product Name:</strong> Blitox</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide with quick action</li><li>Effective against a variety of fungal pathogens</li><li>Prevents spore germination and fungal growth</li><li>Safe for use on various crops</li></ul><h2>Benefits</h2><ul><li>Enhances crop quality and yield</li><li>Reduces disease incidence and crop losses</li><li>Easy to apply with flexible timing</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.5 g per liter of water</li><li><strong>Blackgram:</strong> 1.0 g per liter of water</li><li><strong>Maize:</strong> 1.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blight</li><li>Leaf Spot</li><li>Powdery Mildew</li></ul>";
});
document.getElementById('bluecopper').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/blueCopperF-crystalCropProtection.png';
    info1.innerHTML='Blue Copper Fungicide';
    info2.innerHTML='Crystal Crop Protection';
    info3.innerHTML="<h2>Blue Copper Pesticide Details</h2><ul><li><strong>Product Name:</strong> Blue Copper</li></ul><h2>Key Features</h2><ul><li>Effective fungicide and bactericide</li><li>Provides protective and curative action</li><li>Reduces disease spread through contact</li><li>Improves plant health and vigor</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield and quality</li><li>Helps in managing disease resistance</li><li>Safe for use on a variety of crops</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 2.0 g per liter of water</li><li><strong>Blackgram:</strong> 1.5 g per liter of water</li><li><strong>Maize:</strong> 2.0 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blast Disease</li><li>Leaf Blight</li><li>Downy Mildew</li></ul>";
});
document.getElementById('cabriotop').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/cabrioTopF-BASF.png';
    info1.innerHTML='Cabrio Top Fungicide';
    info2.innerHTML='BASF';
    info3.innerHTML="<h2>Cabrio Top Pesticide Details</h2><ul><li><strong>Product Name:</strong> Cabrio Top</li></ul><h2>Key Features</h2><ul><li>Dual-action fungicide with systemic properties</li><li>Effective against a wide range of fungal diseases</li><li>Promotes plant health and resilience</li><li>Provides both preventive and curative action</li></ul><h2>Benefits</h2><ul><li>Enhances crop quality and yield</li><li>Reduces the incidence of diseases</li><li>Flexible application timing</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.5 g per liter of water</li><li><strong>Blackgram:</strong> 1.0 g per liter of water</li><li><strong>Maize:</strong> 1.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Leaf Blast</li><li>Sheath Blight</li><li>Fungal Leaf Spots</li></ul>>";
});
document.getElementById('companion').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/companionF-indofil.png';
    info1.innerHTML='Companion Fungicide';
    info2.innerHTML='Indofil';
    info3.innerHTML="<h2>Companion Pesticide Details</h2><ul><li><strong>Product Name:</strong> Companion</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum pesticide</li><li>Effective against various pests and diseases</li><li>Promotes plant growth and health</li><li>Environmentally friendly formulation</li></ul><h2>Benefits</h2><ul><li>Enhances crop yield and quality</li><li>Reduces pest resistance development</li><li>Safe for beneficial insects</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 2.0 g per liter of water</li><li><strong>Blackgram:</strong> 1.5 g per liter of water</li><li><strong>Maize:</strong> 2.0 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blast Disease</li><li>Fungal Leaf Spots</li><li>Leaf Blight</li></ul>";
});
document.getElementById('contafplus').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/contafPlusF-rallis.png';
    info1.innerHTML='Contaf Plus Fungicide';
    info2.innerHTML='Rallis';
    info3.innerHTML="<h2>Contaf Plus Pesticide Details</h2><ul><li><strong>Product Name:</strong> Contaf Plus</li></ul><h2>Key Features</h2><ul><li>Systemic and contact action</li><li>Effective against a wide range of insects</li><li>Promotes rapid absorption in plants</li><li>Long-lasting residual activity</li></ul><h2>Benefits</h2><ul><li>Enhances crop health and productivity</li><li>Reduces pest populations effectively</li><li>Safe for beneficial insects when used as directed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 g per liter of water</li><li><strong>Blackgram:</strong> 0.8 g per liter of water</li><li><strong>Maize:</strong> 1.2 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Stem Borer</li><li>Leafhoppers</li><li>Fungal Leaf Diseases</li></ul>";
});
document.getElementById('custodia').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/custodiaF-adama.jpg';
    info1.innerHTML='Custodia Fungicide';
    info2.innerHTML='Adama';
    info3.innerHTML="<h2>Custodia Pesticide Details</h2><ul><li><strong>Product Name:</strong> Custodia</li></ul><h2>Key Features</h2><ul><li>Dual action fungicide</li><li>Effective against a variety of fungal diseases</li><li>Improves plant tolerance to stress</li><li>Long-lasting control with preventive and curative action</li></ul><h2>Benefits</h2><ul><li>Protects crop health and yield</li><li>Reduces risk of disease recurrence</li><li>Environmentally safe with low toxicity</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 ml per liter of water</li><li><strong>Blackgram:</strong> 0.75 ml per liter of water</li><li><strong>Maize:</strong> 1.25 ml per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blast Disease</li><li>Leaf Spots</li><li>Rust</li></ul>";
})
document.getElementById('dhanukam45').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/DhanukaM45F-dhanuka.png';
    info1.innerHTML='Dhanuka M45 Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Dhanuka M45 Pesticide Details</h2><ul><li><strong>Product Name:</strong> Dhanuka M45</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide</li><li>Effective against a variety of fungal diseases</li><li>Systemic and contact action</li><li>Long-lasting residual effect</li></ul><h2>Benefits</h2><ul><li>Improves crop health and yield</li><li>Reduces disease incidence</li><li>Safe for beneficial insects when used properly</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0 g per liter of water</li><li><strong>Blackgram:</strong> 0.5 g per liter of water</li><li><strong>Maize:</strong> 1.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Blast Disease</li><li>Leaf Spot</li><li>Downy Mildew</li></ul>";
});
document.getElementById('folicur').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/folicurF-bayer.jpg';
    info1.innerHTML='Folicur Fungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Folicur Pesticide Details</h2><ul><li><strong>Product Name:</strong> Folicur</li></ul><h2>Key Features</h2><ul><li>Systemic fungicide</li><li>Effective against a wide range of fungal diseases</li><li>Long-lasting protection</li><li>Rapid absorption and translocation in plants</li></ul><h2>Benefits</h2><ul><li>Improves crop quality and yield</li><li>Reduces disease severity</li><li>Compatible with many tank-mix partners</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5-1.0 g per liter of water</li><li><strong>Blackgram:</strong> 0.5-0.75 g per liter of water</li><li><strong>Maize:</strong> 1.0-1.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Blast</li><li>Leaf Spot</li><li>Fusarium Wilt</li></ul>";
});
document.getElementById('foliogold').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/folioGoldF-syngenta.jpg';
    info1.innerHTML='Folio Gold Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Folio Gold Pesticide Details</h2><ul><li><strong>Product Name:</strong> Folio Gold</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide</li><li>Effective against various fungal pathogens</li><li>Enhances crop health and yield</li><li>Rainfast and long-lasting protection</li></ul><h2>Benefits</h2><ul><li>Controls fungal diseases effectively</li><li>Improves quality and shelf life of crops</li><li>Safe for beneficial insects</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0-1.5 g per liter of water</li><li><strong>Blackgram:</strong> 0.5-1.0 g per liter of water</li><li><strong>Maize:</strong> 1.0-1.5 g per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Rice Blast</li><li>Leaf Blight</li><li>Downey Mildew</li></ul>";
});
document.getElementById('godiwasuper').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/godiwaSuperF-dhanuka.png';
    info1.innerHTML='Godiwa Super Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Godiwa Super Pesticide Details</h2><ul><li><strong>Product Name:</strong> Godiwa Super</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide</li><li>Effective against various pests</li><li>Rapid knockdown action</li><li>Long-lasting residual effect</li></ul><h2>Benefits</h2><ul><li>Controls a wide range of insect pests</li><li>Enhances crop yield and quality</li><li>Safe for beneficial insects when used as directed</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.0-1.5 ml per liter of water</li><li><strong>Blackgram:</strong> 1.0 ml per liter of water</li><li><strong>Maize:</strong> 1.0-1.5 ml per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Controls major sucking and chewing pests</li></ul>";
});
document.getElementById('hexadhanplus').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/hexadhanPlusF-dhanuka.png';
    info1.innerHTML='Hexadhan Plus Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Hexadhan Plus Pesticide Details</h2><ul><li><strong>Product Name:</strong> Hexadhan Plus</li></ul><h2>Key Features</h2><ul><li>Systemic insecticide and acaricide</li><li>Highly effective against a wide range of pests</li><li>Low toxicity to beneficial insects</li><li>Long-lasting protection</li></ul><h2>Benefits</h2><ul><li>Rapid action against pests</li><li>Promotes healthy plant growth</li><li>Improves crop yield and quality</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.5-2.0 ml per liter of water</li><li><strong>Blackgram:</strong> 1.0-1.5 ml per liter of water</li><li><strong>Maize:</strong> 1.5 ml per liter of water</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against aphids, thrips, spider mites, and other sucking pests</li></ul>";
});
document.getElementById('indofilm45').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/IndofilM-45F-Indofil.jpg';
    info1.innerHTML='Indofil M-45 Fungicide';
    info2.innerHTML='Indofil';
    info3.innerHTML="<h2>Indofil M-45 Pesticide Details</h2><ul><li><strong>Product Name:</strong> Indofil M-45</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide</li><li>Contains 75% Mancozeb</li><li>Effective against a variety of fungal diseases</li><li>Non-toxic to plants and safe for beneficial insects</li></ul><h2>Benefits</h2><ul><li>Prevents fungal infections</li><li>Promotes healthy crop growth</li><li>Enhances crop yield and quality</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 2-2.5 kg per hectare</li><li><strong>Blackgram:</strong> 1-1.5 kg per hectare</li><li><strong>Maize:</strong> 2-3 kg per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against blast, leaf spot, and other fungal diseases</li></ul>";
});
document.getElementById('infinito').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/infinitoF-bayer.png';
    info1.innerHTML='Infinito Fungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Infinito Pesticide Details</h2><ul><li><strong>Product Name:</strong> Infinito</li></ul><h2>Key Features</h2><ul><li>Combination of Fluopyram and Prothioconazole</li><li>Highly effective against a wide range of fungal diseases</li><li>Provides protective and curative action</li><li>Improves crop health and yields</li></ul><h2>Benefits</h2><ul><li>Long-lasting disease control</li><li>Prevents resistance development in pathogens</li><li>Safe for beneficial insects and the environment</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-1.5 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against leaf spot, sheath blight, and other fungal diseases</li></ul>";
});
document.getElementById('kasub').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/kasu-BF-dhanuka.png';
    info1.innerHTML='Kasu-B Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Kasu-B Pesticide Details</h2><ul><li><strong>Product Name:</strong> Kasu-B</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide</li><li>Effective against a variety of pests</li><li>Fast-acting and long-lasting effects</li><li>Minimal impact on beneficial insects</li></ul><h2>Benefits</h2><ul><li>Controls multiple insect pests effectively</li><li>Enhances crop yield and quality</li><li>Easy to use with various application methods</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-2 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls aphids, whiteflies, and other sucking pests</li></ul>";
});
document.getElementById('kavach').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/kavachF-syngenta.png';
    info1.innerHTML='Kavach Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Kavach Pesticide Details</h2><ul><li><strong>Product Name:</strong> Kavach</li></ul><h2>Key Features</h2><ul><li>Systemic insecticide with contact and stomach action</li><li>Effective against a wide range of pests</li><li>Compatible with various crops</li><li>Low toxicity to beneficial insects</li></ul><h2>Benefits</h2><ul><li>Controls major insect pests effectively</li><li>Promotes healthy plant growth</li><li>Easy to apply with various methods</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-1.5 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-2 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls jassids, whiteflies, and aphids</li></ul>";
});
document.getElementById('luna').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/lunaExperienceF-bayer.jpg';
    info1.innerHTML='Luna Experience Fungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Luna Experience Pesticide Details</h2><ul><li><strong>Product Name:</strong> Luna Experience</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide</li><li>Systemic and translaminar activity</li><li>Effective against various fungal diseases</li><li>Long-lasting protection</li></ul><h2>Benefits</h2><ul><li>Reduces disease incidence and severity</li><li>Improves crop yield and quality</li><li>Compatible with most crops and can be mixed with other products</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5-1 liter per hectare</li><li><strong>Blackgram:</strong> 0.5-0.75 liters per hectare</li><li><strong>Maize:</strong> 0.5-1 liter per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls downy mildew, leaf blight, and powdery mildew</li></ul>";
});
document.getElementById('master').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/masterF-rallis.png';
    info1.innerHTML='Master Fungicide';
    info2.innerHTML='Rallis';
    info3.innerHTML="<h2>Master Pesticide Details</h2><ul><li><strong>Product Name:</strong> Master</li></ul><h2>Key Features</h2><ul><li>Highly effective insecticide</li><li>Broad-spectrum activity against various pests</li><li>Rapid action and residual effect</li><li>Low toxicity to beneficial insects</li></ul><h2>Benefits</h2><ul><li>Enhances crop productivity</li><li>Reduces pest resistance</li><li>Improves overall plant health</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5-1 liter per hectare</li><li><strong>Blackgram:</strong> 0.3-0.5 liters per hectare</li><li><strong>Maize:</strong> 0.5-1 liter per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls various insect pests including aphids, whiteflies, and thrips</li></ul>";
});
document.getElementById('nativo').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/nativoF-bayer.png';
    info1.innerHTML='Nativo Fungicide';
    info2.innerHTML='Bayer';
    info3.innerHTML="<h2>Nativo Pesticide Details</h2><ul><li><strong>Product Name:</strong> Nativo</li></ul><h2>Key Features</h2><ul><li>Systemic insecticide and fungicide</li><li>Effective against a wide range of pests and diseases</li><li>Long residual activity</li><li>Low toxicity to beneficial organisms</li></ul><h2>Benefits</h2><ul><li>Improves crop yield and quality</li><li>Reduces the need for multiple pesticide applications</li><li>Helps in disease management</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.2-0.5 kg per hectare</li><li><strong>Blackgram:</strong> 0.15-0.3 kg per hectare</li><li><strong>Maize:</strong> 0.2-0.4 kg per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls diseases like leaf blight, rust, and aphids</li></ul>";
});
document.getElementById('nisarga').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/nisargaBioF-multiplex.jpg';
    info1.innerHTML='Nisarga Bio Fungicide';
    info2.innerHTML='Multiplex';
    info3.innerHTML="<h2>Nisarga Bio Pesticide Details</h2><ul><li><strong>Product Name:</strong> Nisarga</li></ul><h2>Key Features</h2><ul><li>100% natural and organic formulation</li><li>Effective against a variety of pests and diseases</li><li>Enhances soil health and fertility</li><li>Safe for beneficial insects and pollinators</li></ul><h2>Benefits</h2><ul><li>Reduces chemical pesticide usage</li><li>Promotes sustainable agriculture</li><li>Improves overall crop health</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-2 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls pests such as aphids, whiteflies, and fungal diseases</li></ul>";
});
document.getElementById('revus').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/revusF-syngenta.png';
    info1.innerHTML='Revus Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Revus Pesticide Details</h2><ul><li><strong>Product Name:</strong> Revus</li></ul><h2>Key Features</h2><ul><li>Highly effective against a wide range of fungal diseases</li><li>Systemic action ensures thorough protection</li><li>Low toxicity to humans and animals</li><li>Rainfast within a few hours of application</li></ul><h2>Benefits</h2><ul><li>Controls diseases effectively, enhancing crop yield</li><li>Reduces reliance on traditional fungicides</li><li>Promotes healthy crop growth</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 0.5-1 liter per hectare</li><li><strong>Blackgram:</strong> 0.3-0.5 liters per hectare</li><li><strong>Maize:</strong> 0.5-1 liter per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Controls diseases such as downy mildew, leaf blight, and other fungal infections</li></ul>";
});
document.getElementById('ridomil').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/ridomilGoldF-syngenta.jpg';
    info1.innerHTML='Ridomil gold Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Ridomil Pesticide Details</h2><ul><li><strong>Product Name:</strong> Ridomil</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum fungicide effective against soil-borne and foliar diseases</li><li>Systemic action provides lasting protection</li><li>Low risk of resistance development</li><li>Compatible with many other pesticides</li></ul><h2>Benefits</h2><ul><li>Enhances crop health and yield</li><li>Controls a wide variety of fungal diseases</li><li>Reduces the need for multiple applications</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-2 kg per hectare</li><li><strong>Blackgram:</strong> 0.5-1 kg per hectare</li><li><strong>Maize:</strong> 1-2 kg per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against diseases like downy mildew, late blight, and root rot</li></ul>";
});
document.getElementById('roko').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/rokoF-biostadt.png';
    info1.innerHTML='Roko Fungicide';
    info2.innerHTML='Biostadt';
    info3.innerHTML="<h2>Roko Pesticide Details</h2><ul><li><strong>Product Name:</strong> Roko</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide and acaricide</li><li>Effective against various pests and mites</li><li>Fast-acting formula</li><li>Low toxicity to beneficial insects when applied correctly</li></ul><h2>Benefits</h2><ul><li>Controls a wide range of pests</li><li>Improves crop yield and quality</li><li>Reduces the risk of pest resistance</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-2 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against pests like aphids, whiteflies, and spider mites</li></ul>";
});
document.getElementById('saaf').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/saafF-upl.jpg';
    info1.innerHTML='Saaf Fungicide';
    info2.innerHTML='UPL';
    info3.innerHTML="<h2>Saaf Pesticide Details</h2><ul><li><strong>Product Name:</strong> Saaf</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide</li><li>Effective against a variety of pests</li><li>Quick action with residual effectiveness</li><li>Low toxicity to beneficial insects</li></ul><h2>Benefits</h2><ul><li>Controls multiple pests effectively</li><li>Enhances crop yield and quality</li><li>Reduces pest resistance development</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-2 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against pests like leafhoppers, aphids, and thrips</li></ul>";
});
document.getElementById('score').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/scoreF-syngenta.png';
    info1.innerHTML='Score Fungicide';
    info2.innerHTML='Syngenta';
    info3.innerHTML="<h2>Score Pesticide Details</h2><ul><li><strong>Product Name:</strong> Score</li></ul><h2>Key Features</h2><ul><li>Systemic fungicide</li><li>Effective against a wide range of diseases</li><li>Rapid absorption and translocation in plants</li><li>Low toxicity to beneficial organisms</li></ul><h2>Benefits</h2><ul><li>Prevents disease outbreaks</li><li>Improves crop yield and quality</li><li>Long-lasting residual effect</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-1.5 liters per hectare</li><li><strong>Blackgram:</strong> 0.5-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against sheath blight, leaf spot, and downy mildew</li></ul>";
});
document.getElementById('sixer').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/sixerF-dhanuka.png';
    info1.innerHTML='Sixer Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Sixer Pesticide Details</h2><ul><li><strong>Product Name:</strong> Sixer</li></ul><h2>Key Features</h2><ul><li>Broad-spectrum insecticide</li><li>Effective against various pests</li><li>Rapid action with residual effect</li><li>Compatible with most insecticides</li></ul><h2>Benefits</h2><ul><li>Controls a wide range of sucking and chewing pests</li><li>Improves crop yield and quality</li><li>Easy to use and apply</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1.5-2 liters per hectare</li><li><strong>Blackgram:</strong> 1-1.5 liters per hectare</li><li><strong>Maize:</strong> 1.5-2 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against aphids, jassids, and whiteflies</li></ul>";
});
document.getElementById('spectrum').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/spectrumF-dhanuka.png';
    info1.innerHTML='Spectrum Fungicide';
    info2.innerHTML='Dhanuka';
    info3.innerHTML="<h2>Spectrum Pesticide Details</h2><ul><li><strong>Product Name:</strong> Spectrum</li></ul><h2>Key Features</h2><ul><li>Systemic insecticide and acaricide</li><li>Effective against a wide range of pests</li><li>Rapid uptake by plants</li><li>Long residual activity</li></ul><h2>Benefits</h2><ul><li>Controls both sucking and chewing pests</li><li>Enhances crop yield and quality</li><li>Flexible application methods</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Paddy:</strong> 1-1.5 liters per hectare</li><li><strong>Blackgram:</strong> 0.75-1 liter per hectare</li><li><strong>Maize:</strong> 1-1.5 liters per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against spider mites, aphids, and whiteflies</li></ul>";
});
document.getElementById('tilt').addEventListener('click', () => {
    d9.style.display='block';
    infoimg.src='images/tiltF-CrystalCropProtection.png';
    info1.innerHTML='Tilt Fungicide';
    info2.innerHTML='Crystal Crop Protection';
    info3.innerHTML="<h2>Tilt Pesticide Details</h2><ul><li><strong>Product Name:</strong> Tilt</li></ul><h2>Key Features</h2><ul><li>Systemic fungicide</li><li>Broad-spectrum activity</li><li>Prevents fungal diseases</li><li>Compatible with various crops</li></ul><h2>Benefits</h2><ul><li>Enhances crop health and yield</li><li>Improves disease resistance</li><li>Flexible application timing</li></ul><h2>Dosage for Various Crops</h2><ul><li><strong>Wheat:</strong> 0.5-1 liter per hectare</li><li><strong>Rice:</strong> 0.5-1 liter per hectare</li><li><strong>Barley:</strong> 0.5-1 liter per hectare</li></ul><h2>Diseases Controlled</h2><ul><li>Effective against leaf rust, powdery mildew, and other fungal diseases</li></ul>";
});




//pesticides selecting
const pestcard=document.querySelectorAll(".pest-card");
const aphids=document.querySelectorAll(".aphids");
const thrips=document.querySelectorAll(".thrips");
const whiteflies=document.querySelectorAll(".whiteflies");
const spidermites=document.querySelectorAll(".spidermites");
const caterpillars=document.querySelectorAll(".caterpillars");
const armyworm=document.querySelectorAll(".armyworm");
const leafborers=document.querySelectorAll(".leafborers");
const loopers=document.querySelectorAll(".loopers");
const cutworm=document.querySelectorAll(".cutworm");
const leafworm=document.querySelectorAll(".leafworm");
const rootrot=document.querySelectorAll(".rootrot");
const stemborers=document.querySelectorAll(".stemborers");
const leaffolder=document.querySelectorAll(".leaffolder");
const tungrovirus=document.querySelectorAll(".tungrovirus");
const mildew=document.querySelectorAll(".mildew");
const rootknot=document.querySelectorAll(".rootknot");
const nematodes=document.querySelectorAll(".nematodes");
const leafhoppers=document.querySelectorAll(".leafhoppers");
const planthoppers=document.querySelectorAll(".planthoppers");
const blast=document.querySelectorAll(".blast");
const sheathblight=document.querySelectorAll(".sheathblight");
const leafspot=document.querySelectorAll(".leafspot");
const brownspot=document.querySelectorAll(".brownspot");
const rust=document.querySelectorAll(".rust");
const leafblight=document.querySelectorAll(".leafblight");



document.getElementById("aphids").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    aphids.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("thrips").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    thrips.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("whiteflies").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    whiteflies.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("spidermites").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    spidermites.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("caterpillars").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    caterpillars.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("armyworm").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    armyworm.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leafborers").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leafborers.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("loopers").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    loopers.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("cutworm").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    cutworm.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leafworm").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leafworm.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("rootrot").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    rootrot.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("stemborers").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    stemborers.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leaffolder").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leaffolder.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("tungrovirus").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    tungrovirus.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("mildew").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    mildew.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("rootknot").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    rootknot.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("nematodes").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    nematodes.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leafhoppers").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leafhoppers.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("planthoppers").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    planthoppers.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("blast").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    blast.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("sheathblight").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    sheathblight.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leafspot").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leafspot.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("brownspot").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    brownspot.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("rust").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    rust.forEach(div =>{
        div.style.display = 'block';
    });
});

document.getElementById("leafblight").addEventListener('click', () => {
    pestcard.forEach(div =>{
        div.style.display = 'none';
    });
    leafblight.forEach(div =>{
        div.style.display = 'block';
    });
});