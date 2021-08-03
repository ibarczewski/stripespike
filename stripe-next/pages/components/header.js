import HeaderLinks from '../components/headerLinks';
import HeaderLogo from '../components/headerLogo';
import HeaderCart from '../components/headerCart';

export default function Header() {
    return (
        <div className="content-container">
            <HeaderLinks className="box"/>
            <HeaderLogo className="box"/>
            {/* <HeaderLogo className="box"/> */}
            <HeaderCart className="box"/>
            <style jsx>{`
                .content-container {
                    background-color: white;
                    height: 50px;
                    width: 100%;
                    overflow: hidden;
                    z-index: 999;
                    position: fixed;
                    border-bottom: 1px solid black;
                    top: 0;
                    display: flex;
                    justify-content: space-between;
                }

                .box:first-child > div { margin-right: auto;}
                .box:last-child > div { margin-left: auto;}
            `}</style>

        </div>
    )

}