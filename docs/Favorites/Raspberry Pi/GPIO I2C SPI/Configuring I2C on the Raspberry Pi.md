# Configuring I2C on the Raspberry Pi

https://pimylifeup.com/raspberry-pi-i2c/

## Equipment
Below is the equipment that we used for setting up our Pi for I2C.

### Recommended
Raspberry Pi  
Micro SD Card  
Ethernet Cable or Wi-Fi  
Power Supply  
I2C capable device such as a VEML6075 UV Sensor

### Optional
Raspberry Pi Case  
USB Keyboard  
USB Mouse  

## Installing the I2C Tools to your Raspberry Pi
To install the I2C tools and Python SMBus package on your Raspberry Pi, follow these steps:

1. Update your device by running the following commands:

    ```shell
    sudo apt update
    sudo apt full-upgrade
    ```

2. Once the update is complete, install the I2C-tools and python3-smbus package by running the command:

    ```shell
    sudo apt install -y i2c-tools python3-smbus
    ```

The **i2c-tools** package allows us to interact with the I2C The i2c-tools package enables interaction with the I2C protocol on your Raspberry Pi, allowing you to detect I2C connections. The **python3-smbu**s package enables interaction with I2C devices using Python on your Raspberry Pi.

## Enabling the I2C Protocol on the Raspberry Pi
In this section, we will be showing you how to enable the I2C protocol on your Pi. By default, support for I2C isn’t enabled within the kernel.

Here are the steps to enable the I2C protocol on the Raspberry Pi:

1. Launch the **raspi-config tool** by running the following command:

    ```shell
    sudo raspi-config
    ```
2. Use the **ARROW** keys to navigate and the **ENTER** key to select options.

3. Go to **5 Interfacing Options**.

4. Select **P5 I2C** from the list.

5. When asked, choose **Yes** to enable the ARM I2C interface.

6. You will be notified that I2C has been successfully enabled on your device.

7. To apply the changes, restart your Raspberry Pi with the following command:

    ```shell
    sudo reboot
    ```
After the reboot, the changes to the kernel settings will take effect, and the I2C protocol will be enabled on your Raspberry Pi.

## Testing your I2C Connection
To test your I2C connection, follow these steps:

1. Connect an I2C capable device to your Raspberry Pi using the correct GPIO pins. Refer to a pinout guide if necessary.

2. Use the i2c-tools package to detect the device by running the following command:

    ```shell
    sudo i2cdetect -y 0
    ```
Note that if you are using the original Raspberry Pi, use the command **sudo i2cdetect -y 0** instead.

3. The output of the command will display hexadecimal numbers representing the address of your I2C device. If you only see hyphens, check your circuit wiring or device for faults.

If you have successfully detected your I2C device, then the protocol is working on your Raspberry Pi. If you encounter any issues, leave a comment for assistance.