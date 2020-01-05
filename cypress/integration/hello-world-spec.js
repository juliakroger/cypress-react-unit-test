/// <reference types="cypress" />
/// <reference types="../../lib" />
import React from 'react'
import { mount } from 'cypress-react-unit-tests'
import { HelloWorld } from '../../src/hello-world.jsx'

/* eslint-env mocha */
describe('HelloWorld component', () => {
  it('works', () => {
    mount(<HelloWorld />)
    cy.contains('Hello World!')
  })
})
