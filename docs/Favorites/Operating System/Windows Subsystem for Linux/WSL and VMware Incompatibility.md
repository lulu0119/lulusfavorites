# WSL and VMware Incompatibility: VMware Fails to Start After Installing WSL

| Original Source                                                              | Author     | Title                                                       | Copyright Notice |
| ---------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------- | ---------------- |
| [CSDN 博客](https://blog.csdn.net/weixin_41019705/article/details/105167871) | zhuxiatong | Windows 安装 WSL(解决 VMware Workstation 和 Hyper-V 不兼容) | CC BY-SA 4.0     |

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
