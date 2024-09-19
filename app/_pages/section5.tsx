import { Button } from "@/components/ui/button";

const Section5 = () => {
    return ( 
        <div className="backgroundS5">
            <div className="flex flex-col items-center py-12">
                <h1 className="h3">Estás pronta para transformar a tua vida?</h1>
                <div className="flex flex-col items-center py-12">
                    <p className="p4">Inscreve-te agora e garante o teu lugar na</p>
                    <p className="h1">Mentoria MAP - Mulheres de Alta Performance!</p>
                </div>
                <Button variant={'ProjectButton'} size={'ProjectButton'}>Garantir a minha vaga</Button>
            </div>
        </div>
     );
}
 
export default Section5;