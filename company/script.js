//funcion que trae la api para ser utilizada en los web component
function ElFetch() {
    return fetch("https://api.spacexdata.com/v4/company")
    .then(res => res.json())
}

//contenedor parte 1
class ContPart1 extends HTMLElement {
    constructor() {
        super();
    }
    //conectar los nuevos datos al html
    connectedCallback() {

        //se continua la promesa que queda incompleta en el fetch para mostrar los datos de manera sincrona
        ElFetch().then(companyDatos=>{
            this.innerHTML = `
            <div class="name">SpaceX</div>
            <div class="contMapFounder">
                <div id="founder">
                        <h2 class="textFounder">Founder</h2>
                        <img src="/company/img/icons8-elon-musk-48 (2).png" alt="" class="elonkImg">
                        <div id="elonkLetra">${companyDatos.founder}</div>
                    </div>
                    <div id="lugar">
                        <img src="/company/img/descarga.jpg" alt="imagen de space x" class="lugarSpaceX">
                        <div id="datosLugar">
                            <div class="divsion">
                                <h2 class="headquarters">Headquarters</h2>
                            </div>
                            <h2>Address ➭<span>${companyDatos.headquarters.address}</span></h1>
                            <h2>City ➭<span>${companyDatos.headquarters.city}</span></h1>
                            <h2>State ➭<span>${companyDatos.headquarters.state}</span></h1>
                        </div>
                    </div>
                    <div id="pruebas">Valuation <img src="/company/img/icons8-propiedad-64.png" alt="valuation" class="valuation"> <div id="textValuation">${companyDatos.valuation}</div></div>
                </div>
            </div>
            `;
        })
        
    }
}
//conecta los nuevos datos de la clase ContPart1 con el webcomponent cont-part-1
customElements.define("cont-part-1", ContPart1);

// employes-ceo
class EmployesCeo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        ElFetch().then(companyDatos=>{
            this.innerHTML = `
            <div id="employes">Employes <img src="/company/img/icons8-llamada-de-conferencia-48.png" alt="people" class="people"> <div id="numberPeople">${companyDatos.employees}</div></div>
            <div id="founded">Founded <img src="/company/img/icons8-empresa-50.png" alt="company" class="companyImg"> <div id="anioFundacion">${companyDatos.founded}</div></div>
            `;
        })
    }
}
customElements.define('employes-ceo', EmployesCeo);

// summary
class Smary extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        ElFetch().then(companyDatos=>{
            console.log(companyDatos);
            this.innerHTML = `
            <h1 id="summary">${companyDatos.summary}</h1>
            `;
        })
        
    }
}
customElements.define('summa-ry', Smary);

// links
class Links extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        ElFetch().then(companyDatos=>{
            this.innerHTML = `
            <div id="linksss">
                <a href="${companyDatos.links.website}" class="linkRedes"><div id="webside"><img src="/company/img/icons8-web-50.png" alt="webSpacex" class="web"> Website</div></a>
                <a href="${companyDatos.links.flickr}" class="linkRedes"><div id="twiterSpaceX"><img src="/company/img/icons8-flickr-externo-un-servicio-de-alojamiento-de-imagenes-y-servicio-de-alojamiento-de-video-logo-color-tal-revivo-24.png" alt="flickr" class="flickr"> Flickr</div></a>
                <a href="${companyDatos.links.twitter}" class="linkRedes"><div id="twiterElon"><img src="/company/img/icons8-twitterx-50.png" alt="x" class="x"> X</div></a>
                <a href="${companyDatos.links.elon_twitter}" class="linkRedes"><div id="photo"><img src="/company/img/icons8-twitterx-50.png" alt="x" class="x"> Elon Musk X</div></a>
            </div>`;
        })
    }
}
customElements.define('lin-ks', Links);

  // barra-ab
class BarraAB extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="barraazul">
                <a href="/index.html"><img id="image" src="/SPACE-X/img/house-svgrepo-com.svg" alt="icon" class="icon"></a>
                <a href="/SPACE-X/Rockets/index.html"><img id="image1" src="/SPACE-X/img/rocket (3).svg" alt="icon" class="icon"></a>
                <a href="/SPACE-X/Capsules/index.html"><img id="image2" src="/SPACE-X/img/capsula icon.svg" alt="icon" class="icon"></a>
                <a href="/company/index.html"><img id="image3" src="/SPACE-X/img/company-svgrepo-com.svg" alt="icon" class="icon"></a>
                <a href="/SPACE-X/history/index.html"><img id="image4" src="/SPACE-X/img/history-log-manuscript-svgrepo-com.svg" alt="" class="icon"></a>
            </div>
            <div id="linea"></div>
        `;
    }
}
customElements.define('barra-ab', BarraAB);

class SpaceXCompany extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch("https://api.spacexdata.com/v4/company")
        .then(res => res.json())
        .then(companyDatos => {
            console.log(companyDatos);
            
            this.innerHTML = `
            <cont-part-1></cont-part-1>
            <employes-ceo></employes-ceo>
            <summa-ry></summa-ry>
            <lin-ks></lin-ks>
            <barra-ab></barra-ab>
            `;
        });
    }
}
customElements.define('space-x-company', SpaceXCompany);

