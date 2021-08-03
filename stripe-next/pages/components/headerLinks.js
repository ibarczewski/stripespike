import Link from 'next/link';

export default function HeaderLinks() {
    return (
        <div className="link-container">
            <Link href={''}>Shop</Link>
            <Link href={''}>Blog</Link>
            <style jsx>{
                `
                    .link-container {
                        display: flex;
                        width: 30%;
                        justify-content: space-evenly;
                        align-items: center;
                        height: 100%;
                        flex: 1;
                    }
                `
            }</style>
        </div>
    )
}