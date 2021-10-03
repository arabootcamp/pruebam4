import {mount} from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import {BNavItem} from 'bootstrap-vue'

describe('Navbar.vue', () => {
 
  it('Hay 3 componentes b-nav-item en el Navbar', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.findAllComponents(BNavItem)).toHaveLength(3)
  })
 
  it('Existe el texto  Home, Opiniones y Administración para cada b-nav-item', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.findAllComponents(BNavItem).at(0).text()).toBe('Home')
    expect(wrapper.findAllComponents(BNavItem).at(1).text()).toBe('Opiniones')
    expect(wrapper.findAllComponents(BNavItem).at(2).text()).toBe('Administración')
  })

  it('El Navbar contiene el atributo href', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.html()).toContain('href')
  })
})