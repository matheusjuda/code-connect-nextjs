import Image from "next/image";
import { Avatar } from "../Avatar";

export const CardPost = () => {
    return (
        <article>
            <header>
                <figure>
                    <Image />
                </figure>
            </header>
            <section>titulo texto</section>
            <footer>
                <Avatar />
            </footer>
        </article>
    );
};
