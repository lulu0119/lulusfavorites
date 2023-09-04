# ImportError: No module named RPi

| Original Source                                                                                         | Authors        | Title                            | Copyright Notice |
| ------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------- | ---------------- |
| [Stack Exchange](https://raspberrypi.stackexchange.com/questions/60774/importerror-no-module-named-rpi) | BetaDev et al. | ImportError: No module named RPi | CC BY-SA 4.0     |


Install python-pip using the command:
```shell
sudo apt-get install python-pip
```
Check if the RPi module is installed by running the command :
```shell
pip freeze | grep RPi
```
If the RPi.GPIO module is not listed, install it using one of the following commands:
```shell
# For Python 2
sudo apt-get install python-dev python-rpi.gpio
# or
pip install RPi.GPIO
# For Python 3
sudo apt-get install python3-dev python3-rpi.gpio
```
Finally, install the "picap" package using the command:
```shell
sudo apt-get install picap
picap-setup
```
It is important to verify the output of the command `pip freeze | grep RPi` and ensure that some modules may only be available for the root user. 