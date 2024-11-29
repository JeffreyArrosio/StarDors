import React from "react";

function Footer() {

    return (
        <div>
            <footer className="bg-black text-yellow-500 p-6 text-center">
                <p>
                    <a
                        property="dct:title"
                        rel="cc:attributionURL"
                        href="https://github.com/JeffreyArrosio/StarDors"
                    >
                        Star Dors
                    </a> by
                    <span property="cc:attributionName"> Jeffrey and Danny</span> is licensed under
                    <a
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                        target="_blank"
                        rel="license noopener noreferrer"
                        className="creative-commons"
                    > CC BY-NC-SA 4.0
                        <img
                            className="creative-commons"
                            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                            alt=""
                        />
                        <img
                            className="creative-commons"
                            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                            alt=""
                        />
                        <img
                            className="creative-commons"
                            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                            alt=""
                        />
                        <img
                            className="creative-commons"
                            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                            alt=""
                        />
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Footer;