# WSL和VMware不兼容，安装了WSL之后VMware启动不起来

https://blog.csdn.net/qq_34398519/article/details/114289586?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5.pc_relevant_default&utm_relevant_index=10

WSL依赖于hyper-v必须开启，而VMware不依赖这个，必须关闭

CMD管理员模式启动，输入
```cmd
bcdedit /set hypervisorlaunchtype auto
```
则可以使用WSL

CMD管理员模式启动，输入
```cmd
bcdedit /set hypervisorlaunchtype off
```
则可以使用VMware

注意：不管是开还是关都需要重启电脑