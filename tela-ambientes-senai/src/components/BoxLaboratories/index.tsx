import "./style.css";

const BoxLaboratories = () => {
    return <div id="boxLaboratories">
        <div id="boxRooms">
            <header id="header-box">
                <h1 id="title-box">Ambientes</h1>
            </header>
        </div>
        <input type="search" name="pesquisa" id="pesquisar" />
        <img id="search-img" src="public/lupa-senai.png" alt="icone de pesquisar" />
        <div id="informatica1">
            <img src="public/pc-icon-senai.png" alt="icone de computador" id="info1-img"/>
            <h3>Laboratório de Informática 1</h3>
        </div>
        <div id="informatica2">
            <img src="public/pc-icon-senai.png" alt="icone de computador" id="info2-img"/>
            <h3>Laboratório de Informática 2</h3>
        </div>
        <div id="informatica3">
            <img src="public/pc-icon-senai.png" alt="icone de computador" id="info3-img"/>
            <h3>Laboratório de Informática 3</h3>
        </div>
        <div id="usinagem">
            <img src="" alt="" id="usin-img"/>
            <h3>Usinagem</h3>
        </div>
        <div id="mecanica">
            <img src="" alt="" id="mecan-img"/>
            <h3>Manutenção Mecânica</h3>
        </div>
        <div id="eletrica">
            <img src="" alt="" id="eletr-img"/>
            <h3>Elétrica</h3>
        </div>

    </div>;
};


export default BoxLaboratories;
