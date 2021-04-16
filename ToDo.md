To do list
===

[x] Setup
    [x] npm installs
    [x] database setup 
     - make db auth_shelf 
     - run queries

[x] Display all items 
    [x] make ShelfItem component
    [x] make dispatch to redux/saga
    [x] make rootSaga call saga
    [x] make saga 
        - yield axios GET
        - yield put 
    [x] write server GET route
    [x] useEffect and useSelector 
    [x] map to ShelfItem

[x] Add items to shelf - USERS should be able to add new item to DB
    [x] Make AddItem component
    [x] conditional render -- already taken care of?
    [x] inputs - onChange functions
    [x] button - onClick function
    [x] dispatch
    [x] saga
     - yield axios POST
    [x] server POST route to "item" db
     - rejectUnauthenticated


[ ] Delete Items from shelf
    - Authenticated user should be able to delete
    - IF they were the one who added
    [x] add "admin" column to "user" table -- boolean default false
    [x] make "admin" user account
    [x] conditional render for "delete" button in each ShelfItem 
    [x] dispatch for DELETE
    [x] rootsaga call saga
    [x] make saga
        - yield axios delete
        - yield put
    [ ] server DELETE route to "item db
     -rejectUnauthenticated
     - req.user...

     ```
    console.log('req.user:', req.user );

    if( req.user.clearance_level > 10 )
     ```
