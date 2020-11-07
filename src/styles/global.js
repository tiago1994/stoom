import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    h1, h2, h3{
        color: ${props => props.theme.colors.text};
    }
    .topoPagina{
        background-color: ${props => props.theme.colors.topo};
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 15px 20px;
    }
    .pageDefault{
        background-color: ${props => props.theme.colors.background};
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .conteudoPagina{
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
    }
    .divButton{
        margin-top: 100px;
        height: 50px;
    }
    .divButton a, .divButton button{
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
    }
    .divItens{
        display: flex; 
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }


    .buttonNext, .buttonNext:hover, .buttonNext:focus{
        background-color: ${props => props.theme.colors.topo};
        text-decoration: initial;
        color: ${props => props.theme.colors.text};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        outline: initial;
    }
    .divItem{
        background-color: ${props => props.theme.colors.itembg};
        margin: 10px;
        position: relative;
        height: 180px;
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        flex-direction: column;
        border: 4px solid ${props => props.theme.colors.background};
        cursor: pointer;
    }
    .divItemActive{
        border: 4px solid ${props => props.theme.colors.topo};
    }
    .itemSuggestion{
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: ${props => props.theme.colors.topo};
        color: ${props => props.theme.colors.text};
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .divImage{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imageBox{
        height: 120px;
    }
    .textProduct{
        width: 100%;
        text-align: center;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.topo};
        color: ${props => props.theme.colors.text};
        font-weight: bold;
    }


    .bgModal{
        position: fixed;
        background-color: rgba(0, 0, 0, .8);
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .divModal{
        background-color: #FFF;
        width: 400px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .textDescription{
        text-align: center;
    }
    .titleModal{
        color: ${props => props.theme.colors.topo}
    }
`