## Create Node.Js Server

1. run npm init in root folder
2. Update package.json set type:module
3. add .js to imports
4. npm install express
5. create server.js
6. add start command as node backend/server.js
7. require express
8. create route for / return backend is ready.
9. move products.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start

## Load Products From Backened

1. Edit Homescreen.js
2. define products,loading and error.
3. create useEffect
4. define async fetchData and call at it
5. install axios
6. get data from /api/products
7. show them in the list
8. create Loading Component
9. create a Message Box Component
10. use them in Homescreen

## Install ESlint for code Linting

1. install vscode eslint extension
2. npm install -D eslint
3. run ./node_modules/.bin/eslint --init
4. create ./frontend/.env
5. add SKIP_PREFLIGHT_CHECK=true

## Redux to Home Screen

1. npm install redux react-redux
2. create store.js
3. inistate={products:[]}
4. reducer=(state,action) => switch LOAD_PRODUCTS: {products:action.payload}
5. export default createStore(reducer,iniState)
6. Edit HomeScreen.js
7. shopName=useSelector(state=>state.products)
8. const dispatch = useDispatch()
9. useEffect()=>dispatch({type:LOAD_PRODUCTS,payload:data})
10. Add store to index.js
