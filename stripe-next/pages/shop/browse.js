import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/header';
import zodiarkPic from '../../public/zodiark2.jpg';

export default function Browse() {
    return (
        <>
            <Header />
            <h1>First Product</h1>
            <Image
                src={zodiarkPic}
                alt="Zodiark"
            />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}