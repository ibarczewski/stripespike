import Image from 'next/image';
import logo from '../../public/textonlylogo.jpg'

export default function HeaderLogo() {
    return (
        <div className="image-container">
            <Image src={logo} width={100} height={21}/>
            <style jsx>{
                `
                    .image-container {
                        display: flex;
                        width: 10%;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        flex: 1;
                        padding-top: .25em;
                    }
                `
            }</style>
        </div>
    )
}