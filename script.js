// Isolando o código, criando uma função e inciando o mesma.
function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo'); // Inicia sempre o item do index 0 como ativo

        function activeTab(index) {
            tabContent.forEach((section) => { // Remove a classe ativo
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo'); // Adiciona a classe ativo
        }


        // itemMenu -> É exatamente o item quando o loop estiver sendo iniciado.
        // index -> É o index do item do loop [0,1,2...].
        tabMenu.forEach((itemMenu, index) => {
            //     // () -> Inicia a função, não declarando ela como uma função normal, sendo assim já inciando ela após o click.
                itemMenu.addEventListener('click', () => {
                    activeTab(index);
                });
        });
    
    }

}
initTabNav();

// Isolando o código, criando uma função e inciando o mesma.
function initAccordion(){
    
    const accordioList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordioList.length){
        accordioList[0].classList.add(activeClass)
        accordioList[0].nextElementSibling.classList.add(activeClass)
    
        function activeAccordion(){
            this.classList.toggle(activeClass); // toggle -> caso não esteja ativo ele adiciona, se estiver ativo ele remove 
            this.nextElementSibling.classList.toggle(activeClass);
        };
    
        accordioList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        });
    };

};
initAccordion();

// Isolando o código, criando uma função e inciando o mesma.
function initScrollSuave(){
    
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        // const topo = section.offsetTop;
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        // Forma alternativa
        // window.scrollTo({
        //     top:topo,
        //     behavior: 'smooth',
        // })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })

}
initScrollSuave();