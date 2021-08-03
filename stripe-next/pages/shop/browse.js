import Link from 'next/link';
import Image from 'next/image';
import zodiarkPic from '../../public/zodiark2.jpg';

export default function Browse() {
    return (
        <>
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