import {mount} from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import {BNavItem, BNavbarBrand} from 'bootstrap-vue'

describe('Navbar.vue', () => {

  it('Longitud del título "Games Opinion" es 13', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.findAllComponents(BNavbarBrand).at(0).text()).toHaveLength(13)
  })

  it('Se encuentra la palabra "Administración"', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.findAllComponents(BNavItem).at(2).text()).toBe('Administración')
  })
})