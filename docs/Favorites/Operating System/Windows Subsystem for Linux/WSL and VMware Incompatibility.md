# WSL and VMware Incompatibility: VMware Fails to Start After Installing WSL

https://blog.csdn.net/weixin_41019705/article/details/105167871

WSL relies on Hyper-V, which must be enabled, while VMware does not depend on it and must be disabled.

To use WSL, open CMD in administrator mode and enter the following command:
```cmd
bcdedit /set hypervisorlaunchtype auto
```

To use VMware, open CMD in administrator mode and enter the following command:
```cmd
bcdedit /set hypervisorlaunchtype off
```

Note: Regardless of whether you enable or disable Hyper-V, you need to restart your computer.