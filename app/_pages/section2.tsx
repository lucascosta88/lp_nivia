import './section1.css';

const Section2 = () => {
    return ( 
        <div className='backgroundS2'>
            <div className='flex flex-col items-center z-0'>
                <h1 className='absolute text-[310px] z-0'>MULHERES</h1>
                <h1 className='absolute text-[310px] py-[450px] z-0'>ALTA PERFO</h1>
            </div>
            <div className="h1 flex flex-col items-center py-12 z-10">
                <h1 className='z-10'>Como seria a tua vida se...</h1>
                <div className='flex flex-col items-center py-12 z-10'>
                    <p className="p2 text-2xl">Tivesses tempo para cuidar de ti e</p>
                    <p className="p2 text-2xl">praticar atividade física regularmente?</p>
                    
                    <br/><p className="p2 text-2xl">Soubesses exatamente como cuidar das tuas</p>
                    <p className="p2 text-2xl">finanças e prosperar financeiramente?</p>

                    <br/><p className="p2 text-2xl">Atraísses o homem certo ou recuperasses</p>
                    <p className="p2 text-2xl">o teu relacionamento amoroso?</p>

                    <br/><p className="p2 text-2xl">Pudesses equilibrar maternidade,</p>
                    <p className="p2 text-2xl">carreira e bem-estar emocional?</p>

                    <br/><p className="p2 text-2xl">Te reconectasses com Deus e</p>
                    <p className="p2 text-2xl">descobrisses a tua melhor versão?</p>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;