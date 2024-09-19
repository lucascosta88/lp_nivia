import './sectionMobile.css';

const Section2Mobile = () => {
    return ( 
        <div className='flex justify-center text-center' 
        style={{
            backgroundImage: `url('./02/background.svg')`,
            backgroundColor: 'gray', // Fallback color to see if the style is applied
        }}>
            <div className='py-12'>
                <h1 className='text-center'>Como seria sua vida se...</h1>
                <div className='py-12'>
                    <p className="">Tivesses tempo para cuidar de ti e</p>
                    <p className="">praticar atividade física regularmente?</p>
                    
                    <br/><p className="">Soubesses exatamente como cuidar das tuas</p>
                    <p className="">finanças e prosperar financeiramente?</p>

                    <br/><p className="">Atraísses o homem certo ou recuperasses</p>
                    <p className="">o teu relacionamento amoroso?</p>

                    <br/><p className="">Pudesses equilibrar maternidade,</p>
                    <p className="">carreira e bem-estar emocional?</p>

                    <br/><p className="">Te reconectasses com Deus e</p>
                    <p className="">descobrisses a tua melhor versão?</p>
                </div>
            </div>
        </div>
     );
}
 
export default Section2Mobile;