/*Binome : Ragelhassi Ayman Et Zamakhchari Mouad / 2APG1 EMSI CENTRE*/
var produits = document.querySelectorAll(".add-to-cart");
var catalogue = [
    {
        code : 1,
        nom : "انتيخريستوس",
        desc : "انتيخريستوس",
        prix : 75 ,
        panier : 0
    },
    {
        code : 2,
        nom : "تسعة عشر",
        desc : "تسعة عشر",
        prix : 75 ,
        panier : 0
    },
    {
        code : 3,
        nom : "أرض زيكولا",
        desc : "أرض زيكولا",
        prix : 70 ,
        panier : 0
    },
    {
        code: 4,
        nom : "فيلادلفيا",
        desc : "فيلادلفيا",
        prix : 80 ,
        panier: 0
    },
    {
        code : 5,
        nom : "شيفرة دافنشي",
        desc : "شيفرة دافنشي",
        prix : 60 ,
        panier: 0
    },
    {
        code: 6,
        nom : "صلاح الدين الأيوبي",
        desc : "صلاح الدين الأيوبي",
        prix : 45 ,
        panier: 0
    },
    {
        code : 7,
        nom : "موسم الهجرة إلى الشمال",
        desc : "موسم الهجرة إلى الشمال",
        prix : 50 ,
        panier: 0
    },
    {
        code : 8,
        nom : "حكومة الظل",
        desc : "حكومة الظل",
        prix : 99 ,
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