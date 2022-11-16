let terminal = document.getElementById("greetings-text-box")
let launch = "sceptix";
let splash = ["sceptix version 2.1.5-rc-nv0016-revamp (sceptix@sjec.ac.in) [GCC 11.3.0]", "# ", "mounting /root/sceptix to /dev/mapper/browser", "clean, 69420/177013 files, 1415926535/7182818284 BLOCKS", "BIOS-provided physical RAM map:","kernel: BIOS-e820: [mem 0x0000000000000000-0x000000000009efff] usable","kernel: BIOS-e820: [mem 0x000000000009f000-0x00000000000bffff] reserved","kernel: BIOS-e820: [mem 0x0000000000100000-0x0000000009afffff] usable","kernel: BIOS-e820: [mem 0x0000000009b00000-0x0000000009dfffff] reserved","kernel: BIOS-e820: [mem 0x0000000009e00000-0x0000000009efffff] usable","kernel: BIOS-e820: [mem 0x0000000009f00000-0x0000000009f0cfff] ACPI NVS","kernel: BIOS-e820: [mem 0x0000000009f0d000-0x00000000bab68fff] usable","kernel: BIOS-e820: [mem 0x00000000bab69000-0x00000000bbd68fff] reserved","kernel: BIOS-e820: [mem 0x00000000bbd69000-0x00000000c9f7efff] usable","kernel: BIOS-e820: [mem 0x00000000c9f7f000-0x00000000ccf7efff] reserved","kernel: BIOS-e820: [mem 0x00000000ccf7f000-0x00000000cdf7efff] ACPI NVS","kernel: BIOS-e820: [mem 0x00000000cdf7f000-0x00000000cdffefff] ACPI data","kernel: BIOS-e820: [mem 0x00000000cdfff000-0x00000000cdffffff] usable","kernel: BIOS-e820: [mem 0x00000000ce000000-0x00000000ceffffff] reserved","kernel: BIOS-e820: [mem 0x00000000f8000000-0x00000000fbffffff] reserved","kernel: BIOS-e820: [mem 0x00000000fde00000-0x00000000fdefffff] reserved","kernel: BIOS-e820: [mem 0x00000000fec00000-0x00000000fec00fff] reserved","kernel: BIOS-e820: [mem 0x00000000fec10000-0x00000000fec10fff] reserved","kernel: BIOS-e820: [mem 0x00000000fed80000-0x00000000fed80fff] reserved","kernel: BIOS-e820: [mem 0x00000000fee00000-0x00000000fee00fff] reserved","kernel: BIOS-e820: [mem 0x00000000ff000000-0x00000000fff1ffff] reserved","kernel: BIOS-e820: [mem 0x0000000100000000-0x000000020f33ffff] usable","kernel: BIOS-e820: [mem 0x000000020f340000-0x000000022fffffff] reserved"];
splash[1] += new Date();
let i = 0;

function randomTime() {
    return Math.floor(Math.random() * 50 + 10);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function writer() {
    if (i < launch.length) {
        document.getElementById("text-0").innerHTML += launch.charAt(i++);
        setTimeout(writer, Math.floor(Math.random() * 200) + 50);
    }
    else {
        splasher();
    }
}

async function splasher() {
    for (i = 1; i <= 26; i++){
        let tag = document.createElement("h1");
        tag.id = `text-${i}`;
        let text = document.createTextNode(splash[i - 1]);
        tag.appendChild(text);
        if (i >= lines){
            let text_to_remove = document.getElementById(`text-${i - lines}`);
            terminal.removeChild(text_to_remove);
        }
        terminal.appendChild(tag);
        await sleep(randomTime());
    }
}

function countLines() {
    let terminalHeight = terminal.offsetHeight;
    let lineHeight = 15;
    console.log(Math.floor(terminalHeight / lineHeight * 0.5));
    return Math.floor(terminalHeight / lineHeight * 0.5);
}

let lines = countLines();
writer()