import { Provider } from "react-redux"
import App from "../../src/App"
import { AuthContextProvider } from "../../src/context/AuthContext"
import { RouterProvider } from "react-router-dom"
import { store } from "../../src/app/store"
import { router } from "../../src/router/router"

describe('testing login funcionality', () => {
    it('if user don´t exist redirect to /login', () => {
    cy.mount(<AuthContextProvider>
      <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </Provider>
    </AuthContextProvider>)
    })
})
