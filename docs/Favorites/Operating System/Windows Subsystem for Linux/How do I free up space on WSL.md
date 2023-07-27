# How do I free up space on WSL?

https://zhuanlan.zhihu.com/p/358528257

If you are using Windows Subsystem for Linux (WSL), you may have noticed that the virtual hard disk (VHD) used to store Linux files can take up a lot of space over time. Although the maximum limit for the VHD is 256GB, the space used by the VHD does not automatically decrease when files are deleted from the Linux environment. To avoid hitting the 256GB limit or receiving disk space warnings, you need to manually release the space used by the VHD after deleting files from the Linux environment.

Here are the steps to release the space used by the VHD:

1. Locate the VHD file for WSL:  
    "C:\Users\[your username]\AppData\Local\Packages\CanonicalGroupLimited.[your linux distribution]\LocalState\ext4.vhdx"

2. Open PowerShell and enter the following commands:
    ```powershell
    wsl --shutdown
    diskpart
    # open window Diskpart
    select vdisk file="C:\path_to_wsl\LocalState\ext4.vhdx"
    attach vdisk readonly
    compact vdisk
    detach vdisk
    exit
    ```