
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

let face_list: Image[] = []
face_list = [
    images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    `),
    images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    `),
    images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `),
    images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    # # . # #
    . . # . .
    `),
    images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    . # # # .
    `),
    images.createImage(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    # # # # #
    `),
    images.createImage(`
    . # . # .
    # # # # #
    # . . . #
    # . . . #
    # # # # #
    `),
    images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
]

/**
 * Custom blocks
 */
//% weight=100 color=#9048cf icon="\uf118" block="Faces"
namespace FaceMaker {


    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="draw face with mouth openness $value| out of $up_to"
    //% up_to.defl=255
    export function faceWithOpenMouth(value: number, up_to: number) {
        face_list[Math.round(Math.map(value, 0, up_to, 0, face_list.length - 1))].showImage(0, 0)
    }
}
