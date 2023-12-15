const html = document.querySelector('html') //seleciona a tag html

//seleciona botões
const focusBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')


focusBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', '/Fokus-projeto-base/imagens/foco.png')
})

curtoBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/Fokus-projeto-base/imagens/descanso-curto.png')

})

longoBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', '/Fokus-projeto-base/imagens/descanso-longo.png')

})

