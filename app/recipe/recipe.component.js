import template from './recipe.component.html'

class controller {

    constructor ($timeout) {
        this.$timeout = $timeout
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            this.time = { value: 30 }
        }
    }

    end () {
        this.onTimeout()
    }

    start (remain) {
        console.log('start', remain)
        this.updateScore({ $event: remain })
    }

}

export let RecipeComponent = {
    controller,
    template,
    bindings: {
        toppings: '<',
        onTimeout: '&',
        updateScore: '&'
    }
}