import './section1.css';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import React from 'react';

const Section1 = () => {
    return ( 
        <div className="gradient-background flex pl-52">
            <div>
                <div className='py-12'>
                    <p className='p'>Mulheres de Alta Performance</p>
                </div>

                <div>
                    <h1 className='h1'>
                        Reconecta-te com o teu
                        <br/>feminino e eleva a tua
                        <br/>performance sistémica
                        <br/>em 4 meses!
                    </h1>
                </div>

                <div>
                    <p className='p1 py-12'>
                        Nesta mentoria exclusiva para mulheres,
                        <br/>vais trabalhar profundamente a tua
                        <br/>conexão com o feminino, integrando
                        <br/>aspectos como maternidade, casamento,
                        <br/>autoestima, saúde física e emocional,
                        <br/>finanças, carreira, negócios, sexualidade
                        <br/>e a tua conexão com Deus. 
                    </p>
                </div>

                <div>
                    <Button variant={'ProjectButton'} size={'ProjectButton'}>Garantir a minha vaga</Button>
                </div>
            </div>

            <div className='flex items-end images-container'>
                <Image className='image1' src='./01/01 1.svg' alt='Image 01' width={655} height={521} />
                <Image className='image2' src='./01/02 1.svg' alt='Image 02' width={585} height={521} />
            </div>
        </div>
     );
}
 
export default Section1;