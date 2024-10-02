import $ from "jquery";

class Button {

    setActionListener(id, controller)
    {
        console.log('setActionListener');

        this.controller=controller;

        $(`#${id}`).off().on('click', () => { this.controller.performe(); });
    }


    /**
     * @type {Controller}
     */
    controller;

}

export { Button };