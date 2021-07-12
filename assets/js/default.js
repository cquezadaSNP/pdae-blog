'use strict'

const module = document.querySelector('[data-module="pdae_theme_navbar"]')
const options = {
  trigger: module.dataset.moduleTrigger,
  target: module.dataset.moduleTarget
}

const triggers = document.querySelectorAll(`.${options.trigger}`)
const target = document.getElementById(options.target)

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    target.classList.toggle('navbar-open')
  })
})