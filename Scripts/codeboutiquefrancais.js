/*Binome : Ragelhassi Ayman Et Zamakhchari Mouad / 2APG1 EMSI CENTRE*/
var produits = document.querySelectorAll(".add-to-cart");
var catalogue = [
    {
        code: 9,
        nom : "L'Archipel De Goulag",
        desc : "L'Archipel De Goulag",
        prix : 90 ,
        panier : 0
    },
    {
        code : 10,
        nom : "L'Etranger",
        desc : "L'Etranger",
        prix : 70 ,
        panier : 0
    },
    {
        code : 11,
        nom : "Candides ",
        desc : "Candides ",
        prix : 60 ,
        panier : 0
    },
    {
        code: 12,
        nom : "Lucien Leuwen",
        desc : "Lucien Leuwen",
        prix : 40,
        panier: 0
    },
    {
        code : 13,
        nom : "Jeanne D'Arc",
        desc : "Jeanne D'Arc",
        prix : 120 ,
        panier: 0
    },
    {
        code: 14,
        nom : "Notre Dame De Paris",
        desc : "Notre Dame De Paris",
        prix : 70 ,
        panier: 0
    },
    {
        code : 15,
        nom : "Voyage Au Bout De La Nuit",
        desc : "Voyage Au Bout De La Nuit",
        prix : 99 ,
        panier: 0
    },
    {
        code : 16,
        nom : "Les Trois Mousquetaires",
        desc : "Les Trois Mousquetaires",
        prix : 300 ,
        panier: 0
    },
   
];
for(let i=0; i < produits.length; i++)
{
    produits[i].addEventListener('click', () => {
        numpanier(catalogue[i]);
        total(catalogue[i]);
    })
}

function numpanier(produit)
{
    let numproduit = localStorage.getItem('numpanier')


    numproduit = parseInt(numproduit);

    if(numproduit)
    {
    localStorage.setItem('numpanier', numproduit + 1);
    }
    else
    {
        localStorage.setItem('numpanier', 1);
    }

    setItems(produit);
}
function setItems(produit)
{
let elementpanier = localStorage.getItem('produitsAuPanier');
elementpanier = JSON.parse(elementpanier);


if(elementpanier != null){
    if(elementpanier[produit.desc] == undefined)
    {
        elementpanier = {
            ...elementpanier,
            [produit.desc] : produit
        }
    }
    elementpanier[produit.desc].panier += 1; 
}
else{
    produit.panier = 1;
     elementpanier = {
        [produit.desc] : produit
     }

    }
    localStorage.setItem("produitsAuPanier", JSON.stringify(elementpanier));
}
function total(produit)
{
    let prixpanier = localStorage.getItem('Total');
    console.log("Prix", prixpanier);

    if(prixpanier != null)
    {
        prixpanier = parseInt(prixpanier);
        localStorage.setItem("Total" , prixpanier + produit.prix);

    }
    else{
    localStorage.setItem("Total", produit.prix);
    }
}
function montrerpanier()
{
    let elementpanier = localStorage.getItem("produitsAuPanier");
    elementpanier = JSON.parse(elementpanier);
    let containerproduits = document.querySelector(".produit");
    let prixpanier = localStorage.getItem('Total');
    console.log(elementpanier);
    if (elementpanier && containerproduits)
    {
        containerproduits.innerHTML ='';
        Object.values(elementpanier).map(item =>{
            containerproduits.innerHTML += `
            <div class="produit">
               <h3> <span>${item.nom}</span></h3>
            </div>
            <div class="prix">${item.prix} Dhs</div>
            <div class="quantite">${item.panier}
            </div>
            <div class="total"> 
            ${item.panier * item.prix}Dhs
            <button class="but btn-danger">
            Supprimer
            </button>
            </div>
            `;
        });
        containerproduits.innerHTML += `
        <div class="paniertotal">
        <h4 class="paniertotalheader">
        TOTAL : 
        </h4>
        <h4 class="paniertot">
        ${prixpanier} MAD
        </h4>
        `;
    }
}
montrerpanier();