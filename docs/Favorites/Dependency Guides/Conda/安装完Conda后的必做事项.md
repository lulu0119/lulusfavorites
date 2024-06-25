# 安装完 Conda 后的必做事项

## 创建新的虚拟环境

使用以下命令创建一个新的虚拟环境，例如，我们将其命名为 "default_env"：

```sh
conda create --name default_env  python=3.11
```

## 将新的虚拟环境设置为默认环境

```sh
conda config --set env_prompt '({name})'
conda config --set auto_activate_base false
```

## 将默认环境自动激活添加到.bashrc 的末尾

将以下行添加到您的 `.bashrc` 文件的末尾，以便在每次打开新的终端时自动激活名为 "default_env" 的虚拟环境：

```sh
conda activate default_env
```

"default_env"的存在使得在没有明确指定环境的情况下，conda 命令将默认使用该环境。这简化了命令的使用，并且在不小心安装依赖项到基本环境时提供了一层额外的保护。
