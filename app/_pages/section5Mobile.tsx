import { Button } from "@/components/ui/button";

const Section5Mobile = () => {
    return ( 
        <div className="text-center" style={{
            backgroundImage: `url('./02/background.svg')`,
            backgroundColor: 'gray', // Fallback color to see if the style is applied
        }}>
            <div className="flex flex-col items-center py-12">
                <h1 className="h3S5">Estás pronta para <br/>transformar a tua vida?</h1>
                <div className="flex flex-col items-center py-12">
                    <p className="p4S5">Inscreve-te agora e garante o teu lugar na</p>
                    <p className="h1">Mentoria MAP - Mulheres de Alta Performance!</p>
                </div>
                <Button variant={'ProjectButton'} size={'ProjectButtonMobile'}>Garantir a minha vaga</Button>
            </div>
        </div>
     );
}
 
export default Section5Mobile;