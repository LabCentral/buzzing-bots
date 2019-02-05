
/**
 * Simple control of a pair of continous servos attached to P1 and P2.
 */
//% color=190 weight=100 icon="\uf021" block="Wheels"
namespace wheels
{

    /**
     * Rotate left for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_rotate_left
    //% block="rotate left for | %interval | second(s)"
    export function rotateLeft(interval: number = 1): void
    {    
        servos.P1.run(-100)
        servos.P2.run(-100)
        basic.pause(interval * 1000)
        servos.P1.run(0)
        servos.P2.run(0)
    }

    /**
     * Rotate right for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_rotate_right
    //% block="rotate right for | %interval | second(s)"
    export function rotateRight(interval: number = 1): void
    {
        servos.P1.run(100)
        servos.P2.run(100)
        basic.pause(interval * 1000)
        servos.P1.run(0)
        servos.P2.run(0)
    }

    /**
     * Move forward for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_move_forward
    //% block="move forward for | %interval | second(s)"
    export function moveForward(interval: number = 1): void
    {
        servos.P1.run(100)
        servos.P2.run(-100)
        basic.pause(interval * 1000)
        servos.P1.run(0)
        servos.P2.run(0)
    }

    /**
     * Move backward for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_move_backward
    //% block="move backward for | %interval | second(s)"
    export function moveBackward(interval: number = 1): void {
        servos.P1.run(-100)
        servos.P2.run(100)
        basic.pause(interval * 1000)
        servos.P1.run(0)
        servos.P2.run(0)
    }

}

