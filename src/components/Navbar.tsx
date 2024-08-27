import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/navbar.css";

const Navbar = () => {
    const [language, setLanguage] = useState("en"); // Assuming "en" as default language

    useEffect(() => {
        const path = window.location.pathname;
        if (path.includes("/en/")) {
            setLanguage("en");
        } else if (path.includes("/de/")) {
            setLanguage("de");
        }
    }, []);

    return (
        <motion.div
            className="w-full z-[999] p-4 bg-[#151515] text-white selection:text-purple-400 select-none selection:bg-[#191919]"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}>
            <ul className="flex space-x-5 items-center justify-center">
                <li>
                    <a href={`/${language}/`} className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href={`/${language}/about`} className="nav-link">
                        About me
                    </a>
                </li>
                <li>
                    <a href={`/${language}/articles`} className="nav-link">
                        Articles
                    </a>
                </li>
                <ul className="flex flex-row space-x-1 items-center">
                    <li>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            className="w-[45px] h-[35px] max-h-[35px] border-0 rounded-md cursor-pointer border-purple-400 ease-in-out duration-75 transition-all hover:bg-[#212121] hover:border p-2 object-cover"
                            src={language != "en" ? "/ger.webp" : "/uk.png"}
                            onClick={() => {
                                const currentPath = window.location.pathname;

                                const newPath =
                                    language === "en"
                                        ? currentPath.replace(/^\/en/, "/de")
                                        : currentPath.replace(/^\/de/, "/en");

                                window.location.replace(newPath);
                            }}></motion.img>
                    </li>
                </ul>
            </ul>
        </motion.div>
    );
};

export default Navbar;
