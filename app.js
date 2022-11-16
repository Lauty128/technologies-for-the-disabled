const data = {
    history:{
        title:"HISTORIA",
        info:`El Consejo Nacional de Investigaciones Científicas y Técnicas (CONICET) fue creado por Decreto Ley N° 1291 del 5 de febrero de 1958, respondiendo a la percepción socialmente generalizada de la necesidad de estructurar un organismo académico que promoviera la investigación científica y tecnológica en el país.
        <br><br>
        Vale la pena destacar un importante antecedente a principios de esa década, durante la primera presidencia de Juan Domingo Perón, se estableció el Consejo Nacional de Investigaciones Técnicas y Científicas (CONITYC) con el objeto de desarrollar y modernizar el país bajo un Estado promotor de la ciencia y la tecnología.
        <br><br>
        El primer presidente del CONICET fue Bernardo A. Houssay -Premio Nobel de Medicina en 1947-, quien le infundió a la institución una visión estratégica expresada en claros conceptos organizativos que mantuvo a lo largo de más de una década de conducción.`
    },
    goals:{
        title:"FUNCIONES",
        info:`Fomentar y financiar la investigación científica y tecnológica y las actividades de apoyo que apunten al avance científico y tecnológico en el país, al desarrollo de la economía nacional y al mejoramiento de la calidad de vida, considerando los lineamientos establecidos por el Gobierno Nacional.
        <br><br>
        Fomentar el intercambio y la cooperación científico-tecnológica dentro del país y con el extranjero.
        <br><br>
        Otorgar subsidios a proyectos de investigación.
        <br><br>
        Otorgar pasantías y becas para la capacitación y perfeccionamiento de egresados universitarios o para la realización de investigaciones científicas en el país y en el extranjero.
        <br><br>
        Organizar y financiar institutos, laboratorios y centros de investigación que funcionen en universidades y en instituciones oficiales o privadas, o bajo la dependencia directa del Conicet.
        <br><br>
        Administrar las Carreras del Investigador Científico y del Personal de Apoyo a la Investigación y al Desarrollo.
        <br><br>
        Brindar asesoramiento a entidades públicas y privadas en el ámbito de su competencia.`
    }
}

const showBox = (title, info)=>{
    if(!document.querySelector(".box").classList.contains("box--active")){
        document.querySelector(".box-h2").textContent = title
        document.querySelector(".box-p").innerHTML = info
        document.querySelector(".box").classList.add("box--active")
    }
}

document.querySelector(".ConicetButtons").addEventListener("click", e=>{  
    showBox(data[e.target.getAttribute("id")].title, data[e.target.getAttribute("id")].info)
})

document.getElementById("close-box").addEventListener("click", ()=>{
    document.querySelector(".box").classList.remove("box--active")
})