let terminal = document.getElementById("greetings-text-box")
let launch = "sceptix";
let splash = ["BIOS-provided physical RAM map:","kernel: BIOS-e820: [mem 0x0000000000000000-0x000000000009efff] usable","kernel: BIOS-e820: [mem 0x000000000009f000-0x00000000000bffff] reserved","kernel: BIOS-e820: [mem 0x0000000000100000-0x0000000009afffff] usable","kernel: BIOS-e820: [mem 0x0000000009b00000-0x0000000009dfffff] reserved","kernel: BIOS-e820: [mem 0x0000000009e00000-0x0000000009efffff] usable","kernel: BIOS-e820: [mem 0x0000000009f00000-0x0000000009f0cfff] ACPI NVS","kernel: BIOS-e820: [mem 0x0000000009f0d000-0x00000000bab68fff] usable","kernel: BIOS-e820: [mem 0x00000000bab69000-0x00000000bbd68fff] reserved","kernel: BIOS-e820: [mem 0x00000000bbd69000-0x00000000c9f7efff] usable","kernel: BIOS-e820: [mem 0x00000000c9f7f000-0x00000000ccf7efff] reserved","kernel: BIOS-e820: [mem 0x00000000ccf7f000-0x00000000cdf7efff] ACPI NVS","kernel: BIOS-e820: [mem 0x00000000cdf7f000-0x00000000cdffefff] ACPI data","kernel: BIOS-e820: [mem 0x00000000cdfff000-0x00000000cdffffff] usable","kernel: BIOS-e820: [mem 0x00000000ce000000-0x00000000ceffffff] reserved","kernel: BIOS-e820: [mem 0x00000000f8000000-0x00000000fbffffff] reserved","kernel: BIOS-e820: [mem 0x00000000fde00000-0x00000000fdefffff] reserved","kernel: BIOS-e820: [mem 0x00000000fec00000-0x00000000fec00fff] reserved","kernel: BIOS-e820: [mem 0x00000000fec10000-0x00000000fec10fff] reserved","kernel: BIOS-e820: [mem 0x00000000fed80000-0x00000000fed80fff] reserved","kernel: BIOS-e820: [mem 0x00000000fee00000-0x00000000fee00fff] reserved","kernel: BIOS-e820: [mem 0x00000000ff000000-0x00000000fff1ffff] reserved","kernel: BIOS-e820: [mem 0x0000000100000000-0x000000020f33ffff] usable","kernel: BIOS-e820: [mem 0x000000020f340000-0x000000022fffffff] reserved","kernel: SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=16, Nodes=1","kernel: ftrace: allocating 51655 entries in 202 pages","kernel: ftrace: allocated 202 pages with 4 groups","kernel: Dynamic Preempt: voluntary","kernel: rcu: Preemptible hierarchical RCU implementation.","kernel: rcu:         RCU restricting CPUs from NR_CPUS=8192 to nr_cpu_ids=16.","kernel:         Trampoline variant of Tasks RCU enabled.","kernel:         Rude variant of Tasks RCU enabled.","kernel:         Tracing variant of Tasks RCU enabled.","kernel: rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.","kernel: rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=16","kernel: NR_IRQS: 524544, nr_irqs: 1096, preallocated irqs: 16","kernel: rcu: srcu_init: Setting srcu_struct sizes based on contention.","kernel: Console: colour dummy device 80x25","kernel: printk: console [tty0] enabled","kernel: ACPI: Core revision 20220331","kernel: clocksource: hpet: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 133484873504 ns","kernel: APIC: Switch to symmetric I/O mode setup","kernel: AMD-Vi: ivrs, add hid:AMDI0020, uid:\_SB.FUR0, rdevid:160","kernel: AMD-Vi: ivrs, add hid:AMDI0020, uid:\_SB.FUR1, rdevid:160","kernel: AMD-Vi: ivrs, add hid:AMDI0020, uid:\_SB.FUR2, rdevid:160","kernel: AMD-Vi: ivrs, add hid:AMDI0020, uid:\_SB.FUR3, rdevid:160","kernel: Switched APIC routing to physical flat.","kernel: ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1","kernel: clocksource: tsc-early: mask: 0xffffffffffffffff max_cycles: 0x2b28bae289d, max_idle_ns: 440795359794 ns","kernel: Calibrating delay loop (skipped), value calculated using timer frequency.. 5988.32 BogoMIPS (lpj=11976648)","kernel: pid_max: default: 32768 minimum: 301","kernel: LSM: Security Framework initializing","kernel: landlock: Up and running.","kernel: Yama: becoming mindful.","kernel: AppArmor: AppArmor initialized","kernel: Mount-cache hash table entries: 16384 (order: 5, 131072 bytes, linear)","kernel: Mountpoint-cache hash table entries: 16384 (order: 5, 131072 bytes, linear)","kernel: x86/cpu: User Mode Instruction Prevention (UMIP) activated","kernel: LVT offset 1 assigned for vector 0xf9","kernel: LVT offset 2 assigned for vector 0xf4","kernel: Last level iTLB entries: 4KB 1024, 2MB 1024, 4MB 512","kernel: Last level dTLB entries: 4KB 2048, 2MB 2048, 4MB 1024, 1GB 0","kernel: Spectre V1 : Mitigation: usercopy/swapgs barriers and __user pointer sanitization","kernel: Spectre V2 : Mitigation: Retpolines","kernel: Spectre V2 : Spectre v2 / SpectreRSB mitigation: Filling RSB on context switch","kernel: Spectre V2 : Enabling Speculation Barrier for firmware calls","kernel: RETBleed: Mitigation: untrained return thunk","kernel: Spectre V2 : mitigation: Enabling conditional Indirect Branch Prediction Barrier","kernel: Spectre V2 : Selecting STIBP always-on mode to complement retbleed mitigation","kernel: Spectre V2 : User space: Mitigation: STIBP always-on protection","kernel: Speculative Store Bypass: Mitigation: Speculative Store Bypass disabled via prctl","kernel: Freeing SMP alternatives memory: 44K","kernel: smpboot: CPU0: AMD Ryzen 5 4600H with Radeon Graphics (family: 0x17, model: 0x60, stepping: 0x1)","kernel: cblist_init_generic: Setting adjustable number of callback queues.","kernel: cblist_init_generic: Setting shift to 4 and lim to 1.","kernel: cblist_init_generic: Setting shift to 4 and lim to 1.","kernel: cblist_init_generic: Setting shift to 4 and lim to 1.","kernel: Performance Events: Fam17h+ core perfctr, AMD PMU driver.","kernel: ... version:                0","kernel: ... bit width:              48","kernel: ... generic registers:      6","kernel: ... value mask:             0000ffffffffffff","kernel: ... max period:             00007fffffffffff","kernel: ... fixed-purpose events:   0","kernel: ... event mask:             000000000000003f","kernel: rcu: Hierarchical SRCU implementation.","kernel: rcu:         Max phase no-delay instances is 1000.","kernel: NMI watchdog: Enabled. Permanently consumes one hw-PMU counter.","kernel: smp: Bringing up secondary CPUs ...","kernel: x86: Booting SMP configuration:","kernel: .... node  #0, CPUs:        #1","kernel: Spectre V2 : Update user space SMT mitigation: STIBP always-on","kernel:   #2  #3  #4  #5  #6","kernel: TSC synchronization [CPU#0 -> CPU#6]:","kernel: Measured 4590 cycles TSC warp between CPUs, turning off TSC clock.","kernel: tsc: Marking TSC unstable due to check_tsc_sync_source failed","kernel:   #7  #8  #9 #10 #11","kernel: smp: Brought up 1 node, 12 CPUs","kernel: smpboot: Max logical packages: 2","kernel: smpboot: Total of 12 processors activated (71859.88 BogoMIPS)","kernel: devtmpfs: initialized","kernel: x86/mm: Memory block size: 128MB","kernel: ACPI: PM: Registering ACPI NVS region [mem 0x09f00000-0x09f0cfff] (53248 bytes)","kernel: ACPI: PM: Registering ACPI NVS region [mem 0xccf7f000-0xcdf7efff] (16777216 bytes)","kernel: futex hash table entries: 4096 (order: 6, 262144 bytes, linear)","kernel: pinctrl core: initialized pinctrl subsystem","kernel: PM: RTC time: 19:18:28, date: 2022-10-22","kernel: NET: Registered PF_NETLINK/PF_ROUTE protocol family","kernel: DMA: preallocated 1024 KiB GFP_KERNEL pool for atomic allocations","kernel: DMA: preallocated 1024 KiB GFP_KERNEL|GFP_DMA pool for atomic allocations","kernel: DMA: preallocated 1024 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations","kernel: audit: initializing netlink subsys (disabled)","kernel: audit: type=2000 audit(1666466308.160:1): state=initialized audit_enabled=0 res=1","kernel: thermal_sys: Registered thermal governor 'fair_share'","kernel: thermal_sys: Registered thermal governor 'bang_bang'","kernel: thermal_sys: Registered thermal governor 'step_wise'","kernel: thermal_sys: Registered thermal governor 'user_space'","kernel: thermal_sys: Registered thermal governor 'power_allocator'","kernel: EISA bus registered","kernel: cpuidle: using governor ladder","kernel: cpuidle: using governor menu","kernel: Simple Boot Flag at 0x44 set to 0x1","kernel: HugeTLB: can optimize 4095 vmemmap pages for hugepages-1048576kB","kernel: acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5","kernel: PCI: MMCONFIG at [mem 0xf8000000-0xfbffffff] reserved in E820","kernel: PCI: Using configuration type 1 for base access","kernel: kprobes: kprobe jump-optimization is enabled. All kprobes are optimized if possible.","kernel: HugeTLB: can optimize 7 vmemmap pages for hugepages-2048kB","kernel: HugeTLB registered 1.00 GiB page size, pre-allocated 0 pages","kernel: HugeTLB registered 2.00 MiB page size, pre-allocated 0 pages","kernel: ACPI: Added _OSI(Module Device)","kernel: ACPI: Added _OSI(Processor Device)","kernel: ACPI: Added _OSI(3.0 _SCP Extensions)","kernel: ACPI: Added _OSI(Processor Aggregator Device)","kernel: ACPI: Added _OSI(Linux-Dell-Video)","kernel: ACPI: Added _OSI(Linux-Lenovo-NV-HDMI-Audio)","kernel: ACPI: Added _OSI(Linux-HPI-Hybrid-Graphics)","kernel: ACPI: 15 ACPI AML tables successfully acquired and loaded","kernel: ACPI: [Firmware Bug]: BIOS _OSI(Linux) query ignored","kernel: ACPI: EC: EC started","kernel: ACPI: EC: interrupt blocked","kernel: ACPI: EC: EC_CMD/EC_SC=0x66, EC_DATA=0x62","kernel: ACPI: \_SB_.PCI0.LPC0.EC0_: Boot DSDT EC used to handle transactions","kernel: ACPI: Interpreter enabled","kernel: ACPI: PM: (supports S0 S3 S4 S5)","kernel: ACPI: Using IOAPIC for interrupt routing","kernel: PCI: Using host bridge windows from ACPI; if necessary, use \"pci=nocrs\" and report a bug","kernel: PCI: Using E820 reservations for host bridge windows","kernel: ACPI: Enabled 4 GPEs in block 00 to 1F","kernel: ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-ff])","kernel: acpi PNP0A08:00: _OSC: platform does not support [SHPCHotplug LTR DPC]","kernel: acpi PNP0A08:00: _OSC: OS now controls [PCIeHotplug PME AER PCIeCapability]","kernel: PCI host bridge to bus 0000:00","kernel: pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7 window]","kernel: pci_bus 0000:00: root bus resource [io  0x0d00-0xffff window]","kernel: pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff window]","kernel: pci_bus 0000:00: root bus resource [mem 0x000c0000-0x000cffff window]","kernel: pci_bus 0000:00: root bus resource [mem 0x000d0000-0x000effff window]","kernel: pci_bus 0000:00: root bus resource [mem 0xd0000000-0xf7ffffff window]","kernel: pci_bus 0000:00: root bus resource [mem 0xfc000000-0xfed3ffff window]","kernel: pci_bus 0000:00: root bus resource [mem 0x250200000-0xfcbfffffff window]","kernel: pci_bus 0000:00: root bus resource [bus 00-ff]","kernel: pci 0000:00:00.0: [1022:1630] type 00 class 0x060000","kernel: pci 0000:00:00.2: [1022:1631] type 00 class 0x080600","kernel: pci 0000:00:01.0: [1022:1632] type 00 class 0x060000","kernel: pci 0000:00:01.1: [1022:1633] type 01 class 0x060400","kernel: pci 0000:00:01.1: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:01.2: [1022:1634] type 01 class 0x060400","kernel: pci 0000:00:01.2: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:02.0: [1022:1632] type 00 class 0x060000","kernel: pci 0000:00:02.1: [1022:1634] type 01 class 0x060400","kernel: pci 0000:00:02.1: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:02.2: [1022:1634] type 01 class 0x060400","kernel: pci 0000:00:02.2: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:08.0: [1022:1632] type 00 class 0x060000","kernel: pci 0000:00:08.1: [1022:1635] type 01 class 0x060400","kernel: pci 0000:00:08.1: enabling Extended Tags","kernel: pci 0000:00:08.1: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:08.2: [1022:1635] type 01 class 0x060400","kernel: pci 0000:00:08.2: enabling Extended Tags","kernel: pci 0000:00:08.2: PME# supported from D0 D3hot D3cold","kernel: pci 0000:00:14.0: [1022:790b] type 00 class 0x0c0500","kernel: pci 0000:00:14.3: [1022:790e] type 00 class 0x060100","kernel: pci 0000:00:18.0: [1022:1448] type 00 class 0x060000","Starting Virtual filesystem service...","Started Virtual filesystem service.","Finished Rewrite dynamic launcher portal entries.","Reached target Session services which should run early.","Reached target Tasks to be run before GNOME Session starts.","Starting Session Manager...","sceptix version 2.1.5-rc-nv0016-revamp (sceptix@sjec.ac.in) [GCC 11.3.0]","# ","mounting /root/sceptix to /dev/mapper/browser","clean, 69420/177013 files, 1415926535/7182818284 BLOCKS","sceptix: Receiving page content","sceptix: Positioning elements","sceptix: DOM content loaded","sceptix: Liberate The Mind!","sceptix: Personalising your visit..."];
splash[191] += new Date();
let i = 0;

function randomTime() {
    return Math.floor(Math.random() * 20 + 3);
}

function randomTimeFast() {
    return Math.floor(Math.random() * 15 + 5);
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
        setTimeout(splasher, 300);
    }
}

async function splasher() {
    for (i = 1; i < 200; i++){
        let tag = document.createElement("h1");
        tag.id = `text-${i}`;
        let text = document.createTextNode(splash[i - 1]);
        tag.appendChild(text);
        terminal.appendChild(tag);
        await sleep(randomTime());
        terminal.scrollTop = tag.offsetHeight + tag.offsetTop; 
    }
    loader();
}

const singleCharacterWidth = (parent = document.body) => {
    const span = document.createElement("span");
    span.style.width = "1ch";
    span.style.position = "fixed";
    parent.appendChild(span);
    const width = span.getBoundingClientRect().width;
    parent.removeChild(span); 
    return width;
};

function loader () {
    let tag = document.createElement("h1");
    tag.id = "progress-bar";
    let terminalWidth = terminal.clientWidth;
    let totalCharacters = Math.round(terminalWidth / singleCharacterWidth(terminal) * 0.5);
    window.barLength = totalCharacters - 12;
    let text = document.createTextNode("Progress: []");
    tag.appendChild(text);
    terminal.appendChild(tag);
    terminal.scrollTop = terminal.scrollHeight;
    i = 1;
    setTimeout(loaderWriter, 300);
}

function loaderWriter() {
    if (i <= 100) {
        document.getElementById("progress-bar").innerHTML = "";
        j = Math.round((i++ / 100) * window.barLength);
        document.getElementById("progress-bar").innerHTML += `Progress: [`;
        for (k = 0; k < j; k++){
            document.getElementById("progress-bar").innerHTML += "#";
        }
        for (k = 0; k < window.barLength - j; k++){
            document.getElementById("progress-bar").innerHTML += ".";
        }
        document.getElementById("progress-bar").innerHTML += "]";
        setTimeout(loaderWriter, randomTimeFast());
    }
    else {
        setTimeout( () => {
            document.getElementById("container").classList.remove("hidden");
            removeFadeOut(document.getElementById("greetings-box"), 500);
        }, 300);
    }
}

function removeFadeOut(el, speed) {
    let seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(() => {
        el.parentNode.removeChild(el);
    }, speed);
}

writer()