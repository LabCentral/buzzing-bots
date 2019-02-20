
/**
 * Simple control of a pair of continous servos attached to P1 and P2.
 */
//% color=190 weight=100 icon="\uf021" block="Wheels"
namespace wheels {

    /**
     * Rotate left
     * @param speed motor speed in percent; eg: 100
     */
    //% blockId=wheels_rotate_left
    //% block="rotate left at | %speed | percent"
    //% advanced=true
    //% speed.min=0 speed.max=100
    export function rotateLeft(speed: number = 100): void {
        servos.P1.run(-speed)
        servos.P2.run(-speed)
    }

    /**
     * Rotate right
     * @param speed motor speed in percent; eg: 100
     */
    //% blockId=wheels_rotate_right
    //% block="rotate right at | %speed | percent"
    //% advanced=true
    //% speed.min=0 speed.max=100
    export function rotateRight(speed: number = 100): void {
        servos.P1.run(speed)
        servos.P2.run(speed)
    }

    /**
     * Move forward
     * @param speed motor speed in percent; eg: 100
     */
    //% blockId=wheels_move_forward
    //% block="move forward at | %speed | percent"
    //% advanced=true
    //% speed.min=0 speed.max=100
    export function moveForward(speed: number = 100): void {
        servos.P1.run(speed)
        servos.P2.run(-speed)
    }

    /**
     * Move backward
     * @param speed motor speed in percent; eg: 100
     */
    //% blockId=wheels_move_backward
    //% block="move backward at | %speed | percent"
    //% advanced=true
    //% speed.min=0 speed.max=100
    export function moveBackward(speed: number = 100): void {
        servos.P1.run(-speed)
        servos.P2.run(speed)
    }

    /**
     * Stop moving
     */
    //% blockId=wheels_stop_moving
    //% block="stop moving"
    //% advanced=true
    export function stopMoving(): void {
        servos.P1.run(0)
        servos.P2.run(0)
    }

    /**
     * Rotate left for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_rotate_left_for
    //% block="rotate left for | %interval | second(s)"
    export function rotateLeftFor(interval: number = 1): void {
        rotateLeft()
        basic.pause(interval * 1000)
        stopMoving()
    }

    /**
     * Rotate right for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_rotate_right_for
    //% block="rotate right for | %interval | second(s)"
    export function rotateRightFor(interval: number = 1): void {
        rotateRight()
        basic.pause(interval * 1000)
        stopMoving()
    }

    /**
     * Move forward for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_move_forward_for
    //% block="move forward for | %interval | second(s)"
    export function moveForwardFor(interval: number = 1): void {
        moveForward()
        basic.pause(interval * 1000)
        stopMoving()
    }

    /**
     * Move backward for given interval
     * @param interval time in seconds to execute command; eg: 1
     */
    //% blockId=wheels_move_backward_for
    //% block="move backward for | %interval | second(s)"
    export function moveBackwardFor(interval: number = 1): void {
        moveBackward()
        basic.pause(interval * 1000)
        stopMoving()
    }
}

