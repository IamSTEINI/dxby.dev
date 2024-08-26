import React, { useEffect, useState } from "react";
import SlowType from "../ui/SlowType";

const generateRandomAddress = () => {
    const address = Math.floor(Math.random() * 0xffff);
    return `[0x${address.toString(16).toUpperCase().padStart(4, "0")}]`;
};

const generateMessage = (index: number) => {
    const messages = [
        "Loading system files...",
        "Checking system integrity...",
        "Verifying hardware components...",
        "Applying configurations...",
        "Initializing boot sequence...",
        "Allocating resources...",
        "Starting services...",
        "acero kernel: i2c_hid_acpi i2c-SYNA7DB5:01: failed to reset device: -61",
        "acero kernel: i2c_hid_acpi i2c-SYNA7DB5:01: failed to reset device: -61",
        "acero kernel: i2c_hid_acpi i2c-SYNA7DB5:01: failed to reset device: -61",
        "acero kernel: i2c_hid_acpi i2c-SYNA7DB5:01: failed to reset device: -61",
        "acero kernel: i2c_hid_acpi i2c-SYNA7DB5:01: can't add hid device: -61",
        "acero kernel: hid-generic 0003:10C4:8108.0001: input,hidraw0: USB HID v1.11 Mouse [YSPRINGTECH USB OPTICAL MOUSE] on usb-0000:03:00.3-2/input0",
        "Loading user preferences...",
        "Boot sequence complete. Launching user interface...",
        "Scanning for malware...",
        "dpkg: warning: ignoring pre-dependency problem!",
        "Preparing to unpack .../coreutils_8.32-4.1_amd64.deb ...",
        "Unpacking coreutils (8.32-4.1) ...",
        "Selecting previously unselected package dash.",
        "Preparing to unpack .../dash_0.5.11+git20210903+057cd650a4ed-8_amd64.deb ...",
        "Unpacking dash (0.5.11+git20210903+057cd650a4ed-8) ...",
        "Preparing to unpack .../debconf_1.5.79_all.deb ...",
        "Unpacking debconf (1.5.79) over (1.5.79) ...",
        "Selecting previously unselected package debian-archive-keyring.",
        "Preparing to unpack .../debian-archive-keyring_2021.1.1_all.deb ...",
        "Unpacking debian-archive-keyring (2021.1.1) ...",
        "Selecting previously unselected package debianutils.",
        "Preparing to unpack .../debianutils_5.7-0.2_amd64.deb ...",
        "Unpacking debianutils (5.7-0.2) ...",
        "Selecting previously unselected package diffutils.",
        "Preparing to unpack .../diffutils_1%3a3.7-5_amd64.deb ...",
        "Unpacking diffutils (1:3.7-5) ...",
        "dpkg: regarding .../dpkg_1.21.7kali1_amd64.deb containing dpkg, pre-dependency problem:",
        " dpkg pre-depends on libbz2-1.0",
        "  libbz2-1.0 is not installed.",
        "dpkg: warning: ignoring pre-dependency problem!",
        "dpkg: regarding .../dpkg_1.21.7kali1_amd64.deb containing dpkg, pre-dependency problem:",
        " dpkg pre-depends on liblzma5 (>= 5.2.2)",
        "  liblzma5 is not installed.",
        "dpkg: warning: ignoring pre-dependency problem!",
        "dpkg: regarding .../dpkg_1.21.7kali1_amd64.deb containing dpkg, pre-dependency problem:",
        " dpkg pre-depends on libselinux1 (>= 3.1~)",
        "  libselinux1 is not installed.",
        "dpkg: warning: ignoring pre-dependency problem!",
        "dpkg: regarding .../dpkg_1.21.7kali1_amd64.deb containing dpkg, pre-dependency problem:",
        " dpkg pre-depends on zlib1g (>= 1:1.1.4)",
        "  zlib1g is not installed.",
        "dpkg: warning: ignoring pre-dependency problem!",
        "Preparing to unpack .../dpkg_1.21.7kali1_amd64.deb ...",
        "Unpacking dpkg (1.21.7kali1) over (1.21.7kali1) ...",
        "dpkg: warning: ignoring pre-dependency problem!",
        "Updating system firmware...",
        "Setting up network connections...",
        "Unpacking gcc-12-base:amd64 (12-20220428-1) ...",
        "Selecting previously unselected package gpgv.",
        "Preparing to unpack .../gpgv_2.2.35-2_amd64.deb ...",
        "Synchronizing time servers...",
        "Verifying system permissions...",
        "78637.759323 thermal thermal_zone14: failed to read out thermal zone (-61)",
        "103175.274428 thermal thermal_zone14: failed to read out thermal zone (-61)",
        "104087.896937 thermal thermal_zone14: failed to read out thermal zone (-61)",
        "Finalizing setup...",
    ];
    return `${generateRandomAddress()} ${messages[index]}`;
};

const getBrowserData = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const ipAddress = "192.168.1." + Math.floor(Math.random() * 256);
    const networkSpeed = (Math.random() * 100 + 50).toFixed(2) + " Mbps";
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const cookiesEnabled = navigator.cookieEnabled ? "Yes" : "No";
    const batteryStatus = (navigator as any).getBattery
        ? "Battery API supported"
        : "Battery API not supported";

    return [
        `Browser: ${userAgent}`,
        `Platform: ${platform}`,
        `Language: ${language}`,
        `IP Address: ${ipAddress}`,
        `Network Speed: ${networkSpeed}`,
        `Screen Resolution: ${screenResolution}`,
        `Timezone: ${timezone}`,
        `Cookies Enabled: ${cookiesEnabled}`,
        `Battery Status: ${batteryStatus}`,
    ];
};

const getRandomTypingSpeed = () => Math.floor(Math.random() * 22) + 1;

interface BootScreenProps {
    children: React.ReactNode;
}

const BootScreen: React.FC<BootScreenProps> = ({ children }) => {
    const [lines, setLines] = useState<{ text: string; typingSpeed: number }[]>(
        []
    );
    const [showChildren, setShowChildren] = useState(false);

    useEffect(() => {
        const bootShown = localStorage.getItem("bootshown");
        if (bootShown != "true") {
            const timer = setTimeout(() => {
                setShowChildren(true);
                localStorage.setItem("bootshown", "true");
                setLines([]);
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setShowChildren(true);
        }
    }, []);

    useEffect(() => {
        const bootMessagesCount = 63;
        const browserData = getBrowserData();
        let index = 0;
        let initialPhaseCompleted = false;

        setLines((prevLines) => [
            ...prevLines,
            {
                text: `${generateRandomAddress()} Gathering system information...`,
                typingSpeed: getRandomTypingSpeed(),
            },
            ...browserData.map((data) => ({
                text: data,
                typingSpeed: getRandomTypingSpeed(),
            })),
        ]);

        const lineInterval = setInterval(
            () => {
                if (index < bootMessagesCount) {
                    if (index === 0 && !initialPhaseCompleted) {
                        if (localStorage.getItem("bootshown") != "true") {
                            setLines((prevLines) => [
                                ...prevLines,
                                {
                                    text: `${generateRandomAddress()} Running diagnostics...`,
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                                {
                                    text: `Memory: ${Math.floor(Math.random() * 32) + 1} GB`,
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                                {
                                    text: `CPU: ${Math.floor(Math.random() * 8) + 1} cores`,
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                                {
                                    text: `Storage: ${Math.floor(Math.random() * 512) + 50} GB available`,
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                                {
                                    text: `Network Latency: ${Math.floor(Math.random() * 50) + 10} ms`,
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                                {
                                    text: `systemd[1]: Starting BIRD routing daemon...`,
                                    typingSpeed: 0,
                                },
                                {
                                    text: `bird[478296]: /etc/bird.conf, line 2: syntax error`,
                                    typingSpeed: 0,
                                },
                                {
                                    text: `systemd[1]: bird.service: Control process exited, code=exited status=1`,
                                    typingSpeed: 0,
                                },
                                {
                                    text: `systemd[1]: Failed to start BIRD routing daemon.`,
                                    typingSpeed: 0,
                                },
                            ]);
                        }
                        initialPhaseCompleted = true;
                    } else {
                        if (localStorage.getItem("bootshown") != "true") {
                            setLines((prevLines) => [
                                ...prevLines,
                                {
                                    text: generateMessage(index),
                                    typingSpeed: getRandomTypingSpeed(),
                                },
                            ]);
                        }
                    }
                    index++;
                } else {
                    clearInterval(lineInterval);
                    setShowChildren(true);
                    localStorage.setItem("bootshown", "true");
                }
            },
            Math.floor(Math.random() * 420) + 0
        );

        return () => {
            clearInterval(lineInterval);
        };
    }, []);

    return (
        <>
            {localStorage.getItem("bootshown") != "tuze" && (
                <div
                    className={`fixed inset-0 flex select-none p-2 flex-col 
                    items-start justify-start text-gray-200 font-mono text-xs 
                    transition-opacity duration-200 ${showChildren ? "opacity-0" : "opacity-100"}`}>
                    <div className="text-start">
                        <div className="text-2xl font-bold mb-1">
                            <SlowType text={"Dx OS v0.1"} typingSpeed={75} />
                        </div>
                        <div className="text-base font-light mb-4">
                            <SlowType
                                text={
                                    "========================================="
                                }
                                typingSpeed={4200}
                            />
                        </div>
                        <div
                            className="h-fit w-full"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                overflowY: "auto",
                            }}>
                            {lines.length === 0 && (
                                <div className="whitespace-nowrap">
                                    {generateRandomAddress()} SYSTEM BOOTING
                                </div>
                            )}
                            {lines.map((line, index) => (
                                <div
                                    key={index}
                                    className="whitespace-nowrap h-full">
                                    <SlowType
                                        typingSpeed={line.typingSpeed}
                                        text={line.text}
                                    />{" "}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {showChildren && (
                <div className="relative min-h-screen">{children}</div>
            )}
        </>
    );
};

export default BootScreen;
