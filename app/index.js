import angular from 'angular'
import RouteModule from 'angular-route'

import 'bootstrap/dist/css/bootstrap.css'

import CountdownModule from './countdown'

import { ToppingService } from './topping.service'
import { ToppingsComponent } from './toppings/toppings.component'
import { RecipeComponent } from './recipe/recipe.component'
import { GameComponent } from './game/game.component'
import { BurgerComponent } from './burger/burger.component'
import { GameOverComponent } from './game-over/game-over.component'
import { routes } from './routes.config'

angular.module('app', [
    CountdownModule,
    RouteModule
])

.component('dtaToppings', ToppingsComponent)
.component('dtaRecipe', RecipeComponent)
.component('dtaGame', GameComponent)
.component('dtaBurger', BurgerComponent)
.component('dtaGameOver', GameOverComponent)

.service('ToppingService', ToppingService)

.config(routes)