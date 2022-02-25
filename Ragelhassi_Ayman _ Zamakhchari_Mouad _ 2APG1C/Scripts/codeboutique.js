/*Binome : Ragelhassi Ayman Et Zamakhchari Mouad / 2APG1 EMSI CENTRE*/
var produits = document.querySelectorAll(".add-to-cart");
var catalogue = [
    {
        code: 27,
        nom : "War Horse",
        desc : "War Horse",
        prix : 200 ,
        panier : 0
    },
    {
        code : 1,
        nom : "انتيخريستوس",
        desc : "انتيخريستوس",
        prix : 75 ,
        panier : 0
    },
    {
        code : 17,
        nom : "Game Of Thrones",
        desc : "Game Of Thrones",
        prix : 400 ,
        panier : 0
    },
    {
        code: 18,
        nom : "The Adventures Of Sherlock Holmes",
        desc : "The Adventures Of Sherlock Holmes",
        prix : 250 ,
        panier: 0
    },
    {
        code : 2,
        nom : "تسعة عشر",
        desc : "تسعة عشر",
        prix : 75 ,
        panier: 0
    },
    {
        code: 3,
        nom : "أرض زيكولا",
        desc : "أرض زيكولا",
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
    {
        code: 19,
        nom : "The Lightening Thief",
        desc : "The Lightening Thief",
        prix : 79 ,
        panier : 0
    },
    {
        code : 20,
        nom : "Percy Jackson And The Greek Gods",
        desc : "Percy Jackson And The Greek Gods",
        prix : 75 ,
        panier : 0
    },
    {
        code : 21,
        nom : "Greek Gods",
        desc : "Greek Gods",
        prix : 75 ,
        panier : 0
    },
    {
        code : 22,
        nom : "The Battle Of The Labyrinth",
        desc : "The Battle Of The Labyrinth",
        prix : 75 ,
        panier : 0
    },
    {
        code : 23,
        nom : "Piranha",
        desc : "Piranha",
        prix : 95 ,
        panier : 0
    },
    {
        code : 24,
        nom : "The Grey Ghost",
        desc : "The Grey Ghost",
        prix : 79 ,
        panier : 0
    },
    {
        code : 25,
        nom : "The Pharaoh s Secret",
        desc : "The Pharaoh s Secret",
        prix : 90 ,
        panier : 0
    },
    {
        code : 26,
        nom : "American Sniper",
        desc : "American Sniper",
        prix : 120 ,
        panier : 0
    }
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
        <h4 class="paniertot">
        ${prixpanier}MAD
        </h4>
        `;
    }
}
montrerpanier();
var elementpanier = localStorage.getItem("produitsAuPanier");
elementpanier = JSON.parse(elementpanier);
let containerproduits = document.querySelector(".produit");
if (elementpanier && containerproduits)
{
var button = document.getElementById("Valider"); 
    button.onclick = vider; //
}

function vider(event)
{
    if (containerproduits)
    {
      alert("Achat Effectuer");
      localStorage.clear();
      location.reload();
    }

}

function recherche()
{
        var i ,  table, titre , input , filter , grid;

        table = catalogue;

        input = document.getElementById("search");

        filter = input.value.toLowerCase();
        
        titre = table.getElementsByClassName("product-title");

          for (i = 0; i <  titre .length; i++)
    {
          grid =  titre [i].getElementsByClassName("product-title")[0];
          if ( grid) 
      {
          if ( grid.innerHTML.toLowerCase().indexOf(filter) > -1) 
          {
            titre [i].style.display = "";
          } 
         else
          {
            titre [i].style.display = "none";
          }
      }
    }
}
