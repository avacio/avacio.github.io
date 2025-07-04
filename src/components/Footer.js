import styles from "./Footer.module.css";

export function Footer(props) {
    return (
        <>
            <div class="contact_container" id="contact">
                <img src="/img/coffee.gif" alt=""/>
                    <h1><font color="white">Let's get a coffee!</font></h1>
                    <p>Or tea, if that's your thing. Either way, I'd love to hear from you!</p>
                    <ul>
                    <li><a href="mailto:lexigerv@gmail.com" target="_blank" rel="noreferrer"><img src="/img/mail.png" alt="" /></a></li>
                    <li><a href="https://ca.linkedin.com/in/alexisgervacio" target="_blank" rel="noreferrer"><img src="/img/linkedin.png" alt="" /></a></li>
                    </ul>
            </div>
        </>
    );
}
